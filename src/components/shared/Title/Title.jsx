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
  inverseTertiary: {
    [themes.DEFAULT]: 'text-primary-90',
    [themes.DARK]: 'text-neutral-0',
    [themes.LIGHT]: 'text-neutral-90',
  },
  inverseForm: {
    [themes.DEFAULT]: 'text-primary-40',
    [themes.DARK]: 'text-neutral-0',
    [themes.LIGHT]: 'text-neutral-90',
  },
  inverseFormSecondary: {
    [themes.DEFAULT]: 'text-primary-40',
    [themes.DARK]: 'text-neutral-90',
    [themes.LIGHT]: 'text-neutral-0',
  },
  bgTransform: {
    [themes.DEFAULT]: 'text-primary-90',
    [themes.DARK]: 'text-neutral-90 md:text-neutral-0',
    [themes.LIGHT]: 'text-neutral-0 md:text-neutral-90',
  },
  bgTransformSecundary: {
    [themes.DEFAULT]: 'text-primary-40',
    [themes.DARK]: 'text-neutral-90 md:text-neutral-0',
    [themes.LIGHT]: 'text-neutral-0 md:text-neutral-90',
  },
  bgTransformTertiary: {
    [themes.DEFAULT]: 'text-primary-40 md:text-primary-90',
    [themes.DARK]: 'text-neutral-90',
    [themes.LIGHT]: 'text-neutral-0',
  },
  inverseFormDetails: {
    [themes.DEFAULT]: 'text-primary-40',
    [themes.DARK]: 'text-neutral-90',
    [themes.LIGHT]: 'text-neutral-0',
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
