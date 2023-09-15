import { MdOutlineFilterList } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';
import { themes, withTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    icon: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
  },
};

const Filter = withTheme(({ theme, variant = 'default' }) => {
  const style = styles[variant];

  return (
    <button>
      <MdOutlineFilterList size={40} className={twMerge(' ml-2', style.icon[theme])} />
    </button>
  );
});

export { Filter };
