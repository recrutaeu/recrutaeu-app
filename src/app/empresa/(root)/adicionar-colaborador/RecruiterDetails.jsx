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

const RecruiterDetails = ({ isOpen, setIsOpen, recruiter }) => {
  const { theme } = useTheme();
  const style = styles['default'];

  return (
    <Poup
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Detalhes do colaborador"
      variant="inverseSecundary"
    >
      <div className="grow overflow-auto no-scrollbar mb-10">
        <p className={twMerge('text-lg  font-bold leading-7 ', style.title[theme])}>
          {recruiter?.name}
        </p>

        <div className={twMerge(style.text[theme], 'mt-3')}>
          <p className="mr-1 capitalize font-bold">{`${commons.name}:`}</p>
          <p className="capitalize">{recruiter?.email}</p>
        </div>
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
export default RecruiterDetails;
