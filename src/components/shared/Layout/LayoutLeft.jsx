'use client';
import { twMerge } from 'tailwind-merge';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    [themes.DEFAULT]: 'bg-primary-90',
    [themes.DARK]: 'bg-neutral-90',
    [themes.LIGHT]: 'bg-neutral-0',
  },
  inverse: {
    [themes.DEFAULT]: 'bg-neutral-10',
    [themes.DARK]: 'bg-neutral-0',
    [themes.LIGHT]: 'bg-neutral-90',
  },
};

const LayoutLeft = ({ children, className, variant = 'default', ...props }) => {
  const { theme } = useTheme();
  const style = styles[variant];

  return (
    <div
      className={twMerge('w-full px-5 py-4 lg:py-10 lg:pl-14', style[theme], className)}
      {...props}
    >
      {children}
    </div>
  );
};

export { LayoutLeft };
