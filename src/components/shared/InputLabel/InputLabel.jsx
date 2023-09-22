import { twMerge } from 'tailwind-merge';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    label: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
    input: {
      [themes.DEFAULT]: 'bg-neutral-0',
      [themes.DARK]: 'bg-neutral-0',
      [themes.LIGHT]: 'bg-neutral-0 border-2 border-neutral-90',
    },
  },
};

const InputLabel = ({ label, placeholder, type, id, className }) => {
  const { theme } = useTheme();
  const style = styles['default'];

  return (
    <div className={twMerge('w-ful', className)}>
      <label
        htmlFor={id}
        className={twMerge('w-full font-semibold text-sm lg:text-base', style.label[theme])}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        className={twMerge(
          'w-full rounded-md outline-none text-xs font-light p-2 px-4 mt-1 lg:text-base',
          style.input[theme],
        )}
      />
    </div>
  );
};

export { InputLabel };
