import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { twMerge } from 'tailwind-merge';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    iconText: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90 ',
    },
  },

  inverse: {
    iconText: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-0 ',
    },
  },
};

const NumberPages = ({ currentPage, totalPage, className, variant = 'default' }) => {
  const { theme } = useTheme();
  const style = styles[variant];

  return (
    <div className="flex mt-4 items-center justify-center">
      <button>
        <LuChevronLeft size={24} className={style.iconText[theme]} />
      </button>
      <p
        className={twMerge(
          'text-sm lg:text-base font-semibold mr-2 ml-2',
          style.iconText[theme],
          className,
        )}
      >{`${currentPage} \\ ${totalPage}`}</p>
      <button>
        <LuChevronRight size={24} className={style.iconText[theme]} />
      </button>
    </div>
  );
};

export { NumberPages };
