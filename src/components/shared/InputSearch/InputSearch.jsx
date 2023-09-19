'use client';
import { LuSearch } from 'react-icons/lu';
import { twMerge } from 'tailwind-merge';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    input: {
      [themes.DEFAULT]: 'bg-neutral-10',
      [themes.DARK]: 'bg-neutral-0',
      [themes.LIGHT]: 'border-neutral-90 border-2 ',
    },
    icon: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-90',
    },
  },
  inverse: {
    input: {
      [themes.DEFAULT]: 'bg-neutral-0',
      [themes.DARK]: 'bg-neutral-0',
      [themes.LIGHT]: 'bg-transparent border border-neutral-90',
    },
    icon: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-90',
    },
  },
};

const InputSearch = ({
  type,
  id,
  children,
  size,
  placeholder,
  className,
  variant = 'default',
  ...props
}) => {
  const { theme } = useTheme();
  const style = styles[variant];

  return (
    <>
      <div className="relative w-full">
        <div
          className={twMerge(
            'absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none',
          )}
        >
          <LuSearch size={size} className={(style.icon[theme], className)} />
        </div>
        <input
          type={type}
          id={id}
          className={twMerge(
            'p-3 pl-12 w-full outline-none rounded-md',
            className,
            style.input[theme],
          )}
          placeholder={placeholder}
          required
          {...props}
        />
      </div>
    </>
  );
};

export { InputSearch };
