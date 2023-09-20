'use client';
import { twMerge } from 'tailwind-merge';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    text: {
      [themes.DEFAULT]: 'text-neutral-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-0',
    },
  },
};

const TableHeader = ({ children, className }) => {
  const { theme } = useTheme();
  const style = styles['default'];

  return (
    <th
      className={twMerge('w-full flex items-center text-left px-4', style.text[theme], className)}
    >
      {children}
    </th>
  );
};

export { TableHeader };
