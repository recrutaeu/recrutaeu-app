'use client';
import { twMerge } from 'tailwind-merge';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    text: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-0',
    },
  },
};

const Description = ({ children, className }) => {
  const { theme } = useTheme();
  const style = styles['default'];

  return <p className={twMerge(style.text[theme], className)}>{children}</p>;
};

export { Description };
