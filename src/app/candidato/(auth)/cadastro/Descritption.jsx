'use client';
import { twMerge } from 'tailwind-merge';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    text: {
      [themes.DEFAULT]: 'text-neutral-0',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
  },
  inverse: {
    text: {
      [themes.DEFAULT]: 'text-neutral-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-0',
    },
  },
};

const Description = ({ variant = 'default', className, children }) => {
  const { theme } = useTheme();
  const style = styles[variant];
  return <p className={twMerge('text-xl', style.text[theme], className)}>{children}</p>;
};

export { Description };
