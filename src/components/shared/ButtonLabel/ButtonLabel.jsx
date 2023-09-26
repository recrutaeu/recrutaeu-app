'use client';
import { twMerge } from 'tailwind-merge';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    [themes.DEFAULT]: 'text-primary-90',
    [themes.DARK]: 'text-neutral-90',
    [themes.LIGHT]: 'text-neutral-0',
  },
  inverse: {
    [themes.DEFAULT]: 'text-primary-40',
    [themes.DARK]: 'text-neutral-0',
    [themes.LIGHT]: 'text-neutral-90',
  },

  inverseSecundary: {
    [themes.DEFAULT]: 'text-primary-90',
    [themes.DARK]: 'text-neutral-90',
    [themes.LIGHT]: 'text-neutral-90',
  },
  inverseTertiary: {
    [themes.DEFAULT]: 'text-primary-40',
    [themes.DARK]: 'text-neutral-90',
    [themes.LIGHT]: 'text-neutral-0',
  },
  inverseQuarto: {
    [themes.DEFAULT]: 'text-primary-90',
    [themes.DARK]: 'text-neutral-0',
    [themes.LIGHT]: 'text-neutral-90',
  },
};

const ButtonLabel = ({ children, className, type, variant = 'default', ...props }) => {
  const style = styles[variant];
  const { theme } = useTheme();

  return (
    <button
      type={type}
      className={twMerge('font-bold cursor-pointer', style[theme], className)}
      {...props}
    >
      {children}
    </button>
  );
};
export { ButtonLabel };
