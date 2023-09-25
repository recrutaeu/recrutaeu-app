'use client';
import { twMerge } from 'tailwind-merge';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { Poup } from '@/components/shared/Poup';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { commons } from '@/locales';

const styles = {
  default: {
    title: {
      [themes.DEFAULT]: 'text-primary-90 font-semibold',
      [themes.DARK]: 'text-neutral-0 font-semibold',
      [themes.LIGHT]: 'text-neutral-90 font-semibold',
    },
    text: {
      [themes.DEFAULT]: 'text-neutral-90 text-sm lg:text-base font-light leading-7 flex',
      [themes.DARK]: 'text-neutral-0 text-sm lg:text-base font-light leading-7 flex',
      [themes.LIGHT]: 'text-neutral-90 text-sm lg:text-base font-light leading-7 flex',
    },
  },
};

const JobDetails = ({ isOpen, setIsOpen, vacancy }) => {
  const { theme } = useTheme();
  const style = styles['default'];

  return (
    <Poup isOpen={isOpen} setIsOpen={setIsOpen} title="Detalhes da vaga" variant="inverseSecundary">
      <div className="grow overflow-auto no-scrollbar mb-10">
        <p className={twMerge('text-lg  font-bold leading-7 ', style.title[theme])}>
          {vacancy?.company}
        </p>

        <div className={twMerge(style.text[theme], 'mt-3')}>
          <p className="mr-1 capitalize font-bold">{`${commons.jobs.descriptionJob.job}:`}</p>
          <p className="capitalize">{vacancy?.title}</p>
        </div>

        <div className={twMerge(style.text[theme])}>
          <p className="mr-1 capitalize font-bold">setor:</p>
          <p className="capitalize">{vacancy?.sector}</p>
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

        <p className={twMerge(' mt-4 mb-2', style.text[theme])}>{vacancy?.description}</p>
      </div>
      <div className="max-w-[100%] flex justify-between gap-5 lg:justify-center">
        <ButtonPrimary variant="inverseSecundary">
          {commons.jobs.details.buttonDelet.label}
        </ButtonPrimary>
        <ButtonPrimary variant="inverseTertiary">
          {commons.jobs.details.buttonEdit.label}
        </ButtonPrimary>
      </div>
    </Poup>
  );
};
export default JobDetails;
