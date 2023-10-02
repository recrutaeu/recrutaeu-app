'use client';
import { MaskedInput } from 'rsuite';
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
      [themes.DEFAULT]: 'bg-neutral-10',
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
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-0',
    },
    input: {
      [themes.DEFAULT]: 'bg-neutral-15',
      [themes.DARK]: 'bg-neutral-0 border border-neutral-90',
      [themes.LIGHT]: 'bg-neutral-0',
    },
    error: {
      [themes.DEFAULT]: 'text-red-400',
      [themes.DARK]: 'text-red-500',
      [themes.LIGHT]: 'text-red-500',
    },
  },
  // inverseSecundary: {
  //   label: {
  //     [themes.DEFAULT]: 'text-neutral-0',
  //     [themes.DARK]: 'text-neutral-0',
  //     [themes.LIGHT]: 'text-neutral-90',
  //   },
  //   input: {
  //     [themes.DEFAULT]: 'bg-neutral-0',
  //     [themes.DARK]: 'bg-neutral-0',
  //     [themes.LIGHT]: 'bg-neutral-0 border border-neutral-90',
  //   },
  // },
  // inverseTertiary: {
  //   label: {
  //     [themes.DEFAULT]: 'text-neutral-0',
  //     [themes.DARK]: 'text-neutral-0',
  //     [themes.LIGHT]: 'text-neutral-90',
  //   },
  //   input: {
  //     [themes.DEFAULT]: 'bg-neutral-0',
  //     [themes.DARK]: 'bg-neutral-0 border border-neutral-90',
  //     [themes.LIGHT]: 'bg-neutral-0 border border-neutral-90',
  //   },
  // },
};

const InputMask = ({
  label,
  placeholder,
  variant = 'default',
  type,
  mask,
  error,
  className,
  ...props
}) => {
  const { theme } = useTheme();
  const style = styles[variant];

  return (
    <div className={twMerge('w-full flex flex-col gap-2', className)}>
      <div className={twMerge('w-ful', className)}>
        <label
          htmlFor={props.id}
          className={twMerge('w-full font-medium text-sm lg:text-base', style.label[theme])}
        >
          {label}
        </label>
        <MaskedInput
          type={type}
          placeholder={placeholder}
          className={twMerge(
            'w-full rounded-md outline-none text-xs font-light h-12 lg:h-14 px-3 mt-1 lg:text-base',
            style.input[theme],
          )}
          mask={mask}
          {...props}
        />
      </div>
      {error && (
        <div className="w-full">
          <p className={style.error[theme]}>{error}</p>
        </div>
      )}
    </div>
  );
};

export { InputMask };
