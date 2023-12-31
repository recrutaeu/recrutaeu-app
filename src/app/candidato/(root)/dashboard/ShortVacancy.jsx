import { LuChevronRight } from 'react-icons/lu';
import { twMerge } from 'tailwind-merge';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { Card } from '@/components/shared/Card';
import { Divider } from '@/components/shared/Divider';
import { Stepper } from '@/components/shared/Stepper';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { commons } from '@/locales';

const styles = {
  default: {
    text: {
      [themes.DEFAULT]: 'text-neutral-90',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
  },
};

const ShortVacancy = ({ vacancy, variant = 'default', onClick, ...props }) => {
  const { theme } = useTheme();
  const style = styles[variant];

  return (
    <Card
      className="flex flex-col items-center flex-wrap px-2 py-3 cursor-pointer"
      onClick={onClick}
    >
      <p className={twMerge('text-sm font-bold leading-6', style.text[theme])}>{vacancy?.title}</p>
      <div className="my-3">
        <p className={twMerge('text-sm font-light', style.text[theme])}>{vacancy?.sector}</p>
        <p
          className={twMerge('text-sm font-light', style.text[theme])}
        >{`${vacancy?.city} - ${vacancy?.state}`}</p>
      </div>

      <ButtonLink variant="bgTransform" className={'text-sm'}>
        Detalhes
      </ButtonLink>
    </Card>
  );
};

export { ShortVacancy };
