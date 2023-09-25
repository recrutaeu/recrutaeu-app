'use client';
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
  },
  inverse: {
    text: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
  },
  inverseSecundary: {
    text: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
  },
  inverseTertiary: {
    text: {
      [themes.DEFAULT]: 'text-neutral-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-0',
    },
  },
};

const DataPicker = ({ variant = 'default', label, className, registerStart, registerEnd }) => {
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
        <InputLabel
          type="date"
          id={'start'}
          className={twMerge('w-full text-xs lg:text-base', className)}
          variant={variant}
          register={registerStart}
        />
        <p className={twMerge('text-sm lg:text-base', style.text[theme], className)}>à</p>
        <InputLabel
          type="date"
          id={'end'}
          className={twMerge('w-full text-xs lg:text-base', className)}
          variant={variant}
          register={registerEnd}
        />
      </div>
    </div>
  );
};

export { DataPicker };
