import { LuChevronRight } from 'react-icons/lu';
import { twMerge } from 'tailwind-merge';
import { Divider } from '@/components/shared/Divider';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { commons } from '@/locales';

const styles = {
  default: {
    title: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90 ',
    },
    text: {
      [themes.DEFAULT]: 'text-neutral-90 text-sm font-medium leading-6 flex',
      [themes.DARK]: 'text-neutral-0 text-sm font-medium leading-6 flex',
      [themes.LIGHT]: 'text-neutral-90 text-sm font-medium leading-6 flex',
    },
    icon: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90 ',
    },
  },
};

const Vacancy = ({ vacancy, variant = 'default', onClick, ...props }) => {
  const { theme } = useTheme();
  const style = styles[variant];

  return (
    <button
      className="mt-3 flex flex-col w-full cursor-pointer"
      onClick={() => onClick(vacancy)}
      {...props}
    >
      <div className="flex items-center w-full">
        <div className="w-full text-start">
          <p className={twMerge('text-base font-bold leading-6', style.title[theme])}>
            {vacancy?.title}
          </p>
          <div className={style.text[theme]}>
            <p className="mr-1 capitalize">{`${commons.jobs.descriptionJob.job}:`}</p>
            <p className="capitalize font-light">{vacancy?.title}</p>
          </div>
          <div className={style.text[theme]}>
            <p className="mr-1 capitalize">{`${commons.jobs.descriptionJob.location}:`}</p>
            <p className="capitalize font-light">{`${vacancy?.city} - ${vacancy?.state}`}</p>
          </div>
          <div className={style.text[theme]}>
            <p className="mr-1 capitalize">{`${commons.jobs.descriptionJob.remuneration}:`}</p>
            <p className="capitalize font-light">{`R$ ${vacancy?.salaryRange}`}</p>
          </div>
          <div className={style.text[theme]}>
            <p className="mr-1 capitalize">{`${commons.jobs.descriptionJob.contract}:`}</p>
            <p className="lowercase font-light">{vacancy?.contractType}</p>
          </div>
          <Divider className="mt-3" />
        </div>

        <LuChevronRight size={40} className={style.icon[theme]} />
      </div>
    </button>
  );
};

export { Vacancy };
