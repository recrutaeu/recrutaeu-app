import { twMerge } from 'tailwind-merge';
import { themes, withTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    input: {
      [themes.DEFAULT]: 'bg-neutral-15',
      [themes.DARK]: 'bg-neutral-20',
      [themes.LIGHT]: 'bg-neutral-0',
    },
  },
  inverse: {
    input: {
      [themes.DEFAULT]: 'bg-neutral-10',
      [themes.DARK]: 'bg-neutral-0',
      [themes.LIGHT]: 'bg-neutral-0 border border-neutral-90',
    },
  },
};

const InputRoot = withTheme(({ children, theme, className, variant = 'default' }) => {
  const style = styles[variant];
  return (
    <div
      className={twMerge(
        'flex items-center rounded-md justify-between px-4 gap-4 w-full',
        className,
        style.input[theme],
      )}
      variant={variant}
    >
      {children}
    </div>
  );
});

export { InputRoot };
