import { useEffect, useState } from 'react';
import { LuChevronRight } from 'react-icons/lu';
import { twMerge } from 'tailwind-merge';
import { Divider } from '@/components/shared/Divider';
import { Stepper } from '@/components/shared/Stepper';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { useFindApplicationById, useFindVacancyById } from '@/firebase/firestore/queries';
import { commons } from '@/locales';

const styles = {
  default: {
    title: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-90 sm:text-neutral-0',
      [themes.LIGHT]: 'text-neutral-0 sm:text-neutral-90',
    },
    text: {
      [themes.DEFAULT]: 'text-neutral-90 text-sm font-medium leading-6 flex',
      [themes.DARK]: 'text-neutral-90 sm:text-neutral-0 text-sm font-medium leading-6 flex',
      [themes.LIGHT]: 'text-neutral-0 sm:text-neutral-90 text-sm font-medium leading-6 flex',
    },
    icon: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-90 sm:text-neutral-0',
      [themes.LIGHT]: 'text-neutral-0 sm:text-neutral-90',
    },
  },
  inverse: {
    title: {
      [themes.DEFAULT]: 'text-neutral-0',
      [themes.DARK]: 'text-neutral-90 sm:text-neutral-0',
      [themes.LIGHT]: 'text-neutral-0 sm:text-neutral-90',
    },
    text: {
      [themes.DEFAULT]: 'text-neutral-0 text-sm font-medium leading-6 flex',
      [themes.DARK]: 'text-neutral-90 sm:text-neutral-0 text-sm font-medium leading-6 flex',
      [themes.LIGHT]: 'text-neutral-0 sm:text-neutral-90 text-sm font-medium leading-6 flex',
    },
    icon: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-90 sm:text-neutral-0',
      [themes.LIGHT]: 'text-neutral-0 sm:text-neutral-90',
    },
  },
};

const steps = [
  { stepIndex: 1, title: 'teste' },
  { stepIndex: 2, title: 'videochamada' },
  { stepIndex: 3, title: 'entrevista' },
  { stepIndex: 4, title: 'teste 2' },
  { stepIndex: 5, title: 'teste 3' },
];

const Application = ({ vacancyID, variant = 'default', onClick, application, ...props }) => {
  const [vacancySearched, setVacancySearched] = useState({});
  const currentStep = application.steps.reduce(
    (last, item) => (item.index > last.index && item.status === 'approved' ? item : last),
    application.steps[0],
  );

  const { data: vacancy } = useFindVacancyById({
    id: vacancyID,
  });

  useEffect(() => {
    if (vacancy) {
      setVacancySearched(vacancy);
    }
  }, [vacancy]);

  const { theme } = useTheme();
  const style = styles[variant];

  return (
    <button
      className="mt-3 flex flex-col w-full cursor-pointer"
      onClick={() => onClick(application)}
      {...props}
    >
      <div className="flex items-center w-full">
        <div className="w-full text-start">
          <p className={twMerge('text-base font-bold leading-6', style.title[theme])}>
            {vacancySearched?.title}
          </p>
          <div className={style.text[theme]}>
            <p className="mr-1 capitalize">{`${commons.jobs.descriptionJob.job}:`}</p>
            <p className="capitalize font-light">{vacancySearched?.sector}</p>
          </div>
          <div className={style.text[theme]}>
            <p className="mr-1 capitalize">{`${commons.jobs.descriptionJob.location}:`}</p>
            <p className="capitalize font-light">{`${vacancySearched?.city} - ${vacancySearched?.state}`}</p>
          </div>
          <div className={style.text[theme]}>
            <p className="mr-1 capitalize">{`${commons.jobs.descriptionJob.remuneration}:`}</p>
            <p className="capitalize font-light">{`R$ ${vacancySearched?.salaryRange}`}</p>
          </div>
          <Stepper
            steps={application.steps}
            currentStep={currentStep}
            className={'mt-2'}
            variant="inverse"
          />
          <Divider className="mt-5" />
        </div>

        <LuChevronRight size={40} className={style.icon[theme]} />
      </div>
    </button>
  );
};

export { Application };
