'use client';

import { themes, useTheme } from '@/contexts/ThemeContext';
import { twMerge } from 'tailwind-merge';

const styles = {
  default: {
    text: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-0',
    },
  },
  inverse: {
    text: {
      [themes.DEFAULT]: 'text-neutral-0',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
  }
};

export const Description = ({ variant, children, className }) => {
  const { theme } = useTheme();

  const style = styles[variant];

  return <p className={twMerge('text-xl', style.text[theme], className)}>{children}</p>;
};
