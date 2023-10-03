import { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { Title } from '@/components/shared/Title';
import { useAuthContext } from '@/contexts/AuthContext';
import { themes, useTheme } from '@/contexts/ThemeContext';
import {
  useCreateOrUpdateApplication,
  useDeleteApplicationById,
} from '@/firebase/firestore/mutations';
import { useFindApplicationByVacancyId } from '@/firebase/firestore/queries';
import { uuid } from '@/firebase/uuid';
import { commons } from '@/locales';

const styles = {
  default: {
    title: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90 ',
    },
    text: {
      [themes.DEFAULT]: 'text-neutral-90 text-base font-medium leading-7 flex',
      [themes.DARK]: 'text-neutral-0 text-base font-medium leading-7 flex',
      [themes.LIGHT]: 'text-neutral-90 text-base font-medium leading-7 flex',
    },
    icon: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90 ',
    },
  },
};

const VacancyDetails = ({ vacancy, variant = 'default' }) => {
  const { theme } = useTheme();
  const style = styles[variant];

  const { mutate: createOrUpdateApplication } = useCreateOrUpdateApplication();
  const { mutate: deleteApplicationById } = useDeleteApplicationById();
  const { user } = useAuthContext();

  const {
    data: application,
    error,
    refetch,
  } = useFindApplicationByVacancyId({
    vacancyId: vacancy?.id,
    userId: user.id,
    retry: false,
  });

  useEffect(() => {
    refetch();
  }, [refetch, vacancy?.id]);

  const handleApplication = () => {
    const data = {
      id: uuid(),
      vacancyId: vacancy.id,
      userId: user.id,
      companyId: vacancy.companyId,
      steps: [
        {
          index: 0,
          type: 'subscribed',
          status: 'pending',
          data: {
            date: new Date(),
          },
        },
        {
          index: 1,
          type: 'test',
          status: 'pending',
        },
        {
          index: 2,
          type: 'interview',
          status: 'pending',
        },
        {
          index: 3,
          type: 'feedback',
          status: 'pending',
        },
      ],
    };
    createOrUpdateApplication(data);
    refetch();
  };

  const handleRemoveApplication = () => {
    deleteApplicationById(application.id);
    refetch();
  };

  return (
    <>
      <Title className="text-3xl leading-8 mb-10 hidden lg:block" variant="inverseSecundary">
        {commons.jobs.informationJob.title}
      </Title>
      <div className="grow overflow-auto no-scrollbar mb-10">
        <p className={twMerge('text-lg  font-bold leading-7 ', style.title[theme])}>
          {vacancy?.company}
        </p>

        <div className={twMerge(style.text[theme], 'mt-3')}>
          <p className="mr-1 capitalize font-bold">{`${commons.jobs.descriptionJob.job}:`}</p>
          <p className="capitalize">{vacancy?.title}</p>
        </div>

        <div className={style.text[theme]}>
          <p className="mr-1 capitalize font-bold">{`${commons.jobs.descriptionJob.location}:`}</p>
          <p className="capitalize">{`${vacancy?.city} - ${vacancy?.state}`}</p>
        </div>

        <div className={style.text[theme]}>
          <p className="mr-1 capitalize font-bold">{`${commons.jobs.descriptionJob.remuneration}:`}</p>
          <p className="capitalize">{`R$ ${vacancy?.salaryRange}`}</p>
        </div>

        <div className={style.text[theme]}>
          <p className="mr-1 capitalize font-bold">{`${commons.jobs.descriptionJob.contract}:`}</p>
          <p className="lowercase">{vacancy?.contractType}</p>
        </div>

        <div className={style.text[theme]}>
          <p className="mr-1 capitalize font-bold">{`${commons.jobs.descriptionJob.benefits}:`}</p>
          <p className="capitalize">{vacancy?.benefits}</p>
        </div>

        <p className={twMerge(' mt-8 mb-4', style.text[theme])}>{vacancy?.description}</p>
      </div>
      <div className="max-w-[100%] flex justify-center">
        {application && !error ? (
          <ButtonPrimary variant="inverseSecundary" onClick={handleRemoveApplication}>
            {commons.jobs.buttonUndo.label}
          </ButtonPrimary>
        ) : (
          <ButtonPrimary variant="inverseSecundary" onClick={handleApplication}>
            {commons.jobs.button.label}
          </ButtonPrimary>
        )}
      </div>
    </>
  );
};

export { VacancyDetails };
