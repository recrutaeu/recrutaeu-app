'use client';
import { twMerge } from 'tailwind-merge';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    div: {
      [themes.DEFAULT]: 'border-primary-90',
      [themes.DARK]: 'border-neutral-0',
      [themes.LIGHT]: 'border-neutral-90',
    },
  },
  bgTransform: {
    div: {
      [themes.DEFAULT]: 'border-primary-90',
      [themes.DARK]: 'border-neutral-90 md:border-neutral-0',
      [themes.LIGHT]: 'border-neutral-0 md:border-neutral-90',
    },
  },
  inverse: {
    div:{
      [themes.DEFAULT]: 'border-primary-90',
      [themes.DARK]: 'border-neutral-90',
      [themes.LIGHT]: 'border-neutral-0',
    }
  }
};

const Quote = ({ children, className, variant = 'default', ...props }) => {
  const { theme } = useTheme();
  const style = styles[variant];

  return (
    <div
      className={twMerge('border-l-4 border-solid w-full pl-4', style.div[theme], className)}
      {...props}
    >
      {children}
    </div>
  );
};

export { Quote };
