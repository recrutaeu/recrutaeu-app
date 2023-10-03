'use client';
import { Controller } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import { InputLabel } from '../InputLabel';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    text: {
      [themes.DEFAULT]: 'text-neutral-0',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
    error: {
      [themes.DEFAULT]: 'text-red-400',
      [themes.DARK]: 'text-red-500',
      [themes.LIGHT]: 'text-red-500',
    },
  },
  inverse: {
    text: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
    error: {
      [themes.DEFAULT]: 'text-red-400',
      [themes.DARK]: 'text-red-500',
      [themes.LIGHT]: 'text-red-500',
    },
  },
  inverseSecundary: {
    text: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
    error: {
      [themes.DEFAULT]: 'text-red-400',
      [themes.DARK]: 'text-red-500',
      [themes.LIGHT]: 'text-red-500',
    },
  },
  inverseTertiary: {
    text: {
      [themes.DEFAULT]: 'text-neutral-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-0',
    },
    error: {
      [themes.DEFAULT]: 'text-red-400',
      [themes.DARK]: 'text-red-500',
      [themes.LIGHT]: 'text-red-500',
    },
  },
};

const DataPicker = ({
  variant = 'default',
  label,
  className,
  control,
  startName,
  endName,
  error,
}) => {
  const { theme } = useTheme();
  const style = styles[variant];

  return (
    <div className={twMerge('w-full flex flex-col gap-1 cursor-pointer', className)}>
      <label
        className={twMerge('text-sm lg:text-base font-semibold', style.text[theme], className)}
      >
        {label}
      </label>
      <div className="flex items-center justify-between lg:gap-5">
        <Controller
          control={control}
          name={startName}
          render={({ field: { onChange, value } }) => {
            return (
              <InputLabel
                type="date"
                className={twMerge('w-full text-xs lg:text-base', className)}
                variant={variant}
                onChange={onChange}
                value={value}
              />
            );
          }}
        />

        <p className={twMerge('text-sm lg:text-base', style.text[theme], className)}>à</p>
        <Controller
          control={control}
          name={endName}
          render={({ field: { onChange, value } }) => {
            return (
              <InputLabel
                type="date"
                className={twMerge('w-full text-xs lg:text-base', className)}
                variant={variant}
                onChange={onChange}
                value={value}
              />
            );
          }}
        />
      </div>
      {error && (
        <div className="w-full mt-2">
          <p className={style.error[theme]}>{error}</p>
        </div>
      )}
    </div>
  );
};

export { DataPicker };
