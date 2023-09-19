'use client';
import { MdOutlineFilterList } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    icon: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
  },
};

const Filter = ({ variant = 'default', size, className }) => {
  const { theme } = useTheme();
  const style = styles[variant];

  return (
    <button>
      <MdOutlineFilterList size={size} className={twMerge(' ml-2', style.icon[theme], className)} />
    </button>
  );
};

export { Filter };
