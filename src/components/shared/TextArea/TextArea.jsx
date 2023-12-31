import { twMerge } from 'tailwind-merge';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    label: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
    textArea: {
      [themes.DEFAULT]: 'bg-neutral-0',
      [themes.DARK]: 'bg-neutral-0',
      [themes.LIGHT]: 'bg-neutral-0 border border-neutral-90',
    },
    error: {
      [themes.DEFAULT]: 'text-red-400',
      [themes.DARK]: 'text-red-500',
      [themes.LIGHT]: 'text-red-500',
    },
  },
  inverse: {
    label: {
      [themes.DEFAULT]: 'text-neutral-0',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
    textArea: {
      [themes.DEFAULT]: 'bg-neutral-0',
      [themes.DARK]: 'bg-neutral-0',
      [themes.LIGHT]: 'bg-neutral-0 border border-neutral-90',
    },
    error: {
      [themes.DEFAULT]: 'text-red-400',
      [themes.DARK]: 'text-red-500',
      [themes.LIGHT]: 'text-red-500',
    },
  },
};

const TextArea = ({ text, label, className, variant = 'default', error, ...props }) => {
  const { theme } = useTheme();
  const style = styles[variant];

  return (
    <div className={twMerge('w-full')}>
      <p
        className={twMerge(
          'mb-1 w-full font-semibold text-sm lg:text-base',
          className,
          style.label[theme],
        )}
        {...props}
      >
        {label}
      </p>
      <textarea
        className={twMerge(
          'p-2.5 w-full text-sm font-light rounded-md lg:text-sm outline-none no-scrollbar resize-none',
          style.textArea[theme],
        )}
        {...props}
      ></textarea>
      {error && (
        <div className="w-full mt-2">
          <p className={style.error[theme]}>{error}</p>
        </div>
      )}
    </div>
  );
};

export { TextArea };
