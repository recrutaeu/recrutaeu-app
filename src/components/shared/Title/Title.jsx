'use client';
import { twMerge } from 'tailwind-merge';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    [themes.DEFAULT]: 'text-neutral-0',
    [themes.DARK]: 'text-neutral-0',
    [themes.LIGHT]: 'text-neutral-90',
  },
  inverse: {
    [themes.DEFAULT]: 'text-primary-90',
    [themes.DARK]: 'text-neutral-90',
    [themes.LIGHT]: 'text-neutral-0',
  },
  inverseSecundary: {
    [themes.DEFAULT]: 'text-primary-90',
    [themes.DARK]: 'text-neutral-0',
    [themes.LIGHT]: 'text-neutral-90',
  },
};

const Title = ({ children, variant = 'default', className, ...props }) => {
  const { theme } = useTheme();
  const style = styles[variant];

  return (
    <p className={twMerge('text-4xl font-bold md:text-7Xl', style[theme], className)} {...props}>
      {children}
    </p>
  );
};

export { Title };
