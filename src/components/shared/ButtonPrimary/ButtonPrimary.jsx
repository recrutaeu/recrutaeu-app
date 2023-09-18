import { twMerge } from 'tailwind-merge';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    [themes.DEFAULT]: 'bg-primary-90 text-neutral-0 hover:bg-primary-100',
    [themes.DARK]: 'bg-neutral-90 text-neutral-0 hover:bg-neutral-15 hover:text-neutral-90',
    [themes.LIGHT]: 'bg-neutral-0 text-neutral-90 hover:bg-neutral-15 hover:text-neutral-90',
  },
  inverse: {
    [themes.DEFAULT]:
      'hover:bg-primary-40 hover:text-primary-90 border-2 border-primary-40  text-primary-40',
    [themes.DARK]:
      'bg-neutral-90 text-neutral-0 border-2  border-neutral-0 hover:bg-neutral-0 hover:text-neutral-90',
    [themes.LIGHT]:
      'bg-neutral-0 text-neutral-90 border-2  border-neutral-90  hover:bg-neutral-90 hover:text-neutral-0',
  },
  inverseSecundary: {
    [themes.DEFAULT]: 'bg-primary-90 text-neutral-0 hover:bg-primary-100',
    [themes.DARK]:
      'border-2 border-neutral-0 text-neutral-0 hover:bg-neutral-0 hover:text-neutral-90',
    [themes.LIGHT]:
      'border-2 border-neutral-90 text-neutral-90 hover:bg-neutral-90 hover:text-neutral-0',
  },
};

const ButtonPrimary = ({ children, className, variant = 'default', ...props }) => {
  const style = styles[variant];
  const { theme } = useTheme();

  return (
    <button
      className={twMerge('px-4 py-3 rounded-lg font-bold text-md w-40', style[theme], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export { ButtonPrimary };
