'use client';
import { MdSearch } from 'react-icons/md';
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
  inverseSecundary: {
    input: {
      [themes.DEFAULT]: 'bg-neutral-0',
      [themes.DARK]: 'border-2 border-neutral-90 bg-neutral-0',
      [themes.LIGHT]: 'bg-neutral-0',
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
            'absolute inset-y-0 left-0 flex items-center justify-center pointer-events-none px-2',
          )}
        >
          <MdSearch className={twMerge('w-5 h-5 lg:w-6 lg:h-6', style.icon[theme], className)} />
        </div>
        <input
          type={type}
          id={id}
          className={twMerge(
            'w-full outline-none rounded-md text-neutral-90 font-light text-sm pl-8 h-12 lg:h-14 lg:pl-10 lg:text-base',
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
