'use client';
import { twMerge } from 'tailwind-merge';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    input: {
      [themes.DEFAULT]: 'bg-neutral-0',
      [themes.DARK]: 'bg-neutral-20',
      [themes.LIGHT]: 'bg-neutral-0',
    },
    text: {
      [themes.DEFAULT]: 'text-neutral-0',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
  },
  inverse: {
    input: {
      [themes.DEFAULT]: 'bg-neutral-0',
      [themes.DARK]: 'bg-neutral-0',
      [themes.LIGHT]: 'bg-neutral-0 border-2 border-neutral-90',
    },
    text: {
      [themes.DEFAULT]: 'text-neutral-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-90',
    },
  },
};

const InputPopup = ({ label, type, id, className, placeholder, variant = 'default' }) => {
  const { theme } = useTheme();
  const style = styles[variant];

  return (
    <div className={twMerge(className, 'flex flex-col gap-1 cursor-pointer')}>
      <label for={id} className={twMerge('text-base font-semibold', style.text[theme])}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={twMerge(
          'text-md text-neutral-90 h-10 py-1 px-4 rounded-md peer focus:outline-none',
          style.input[theme],
        )}
      />
    </div>
  );
};
export { InputPopup };