'use client';
import { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { Input, InputGroup } from 'rsuite';
import { twMerge } from 'tailwind-merge';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    background: {
      [themes.DEFAULT]: 'bg-neutral-10',
      [themes.DARK]: 'bg-neutral-0',
      [themes.LIGHT]: 'bg-neutral-0 border border-neutral-90',
    },
    backgroundInput: {
      [themes.DEFAULT]: 'bg-neutral-10',
      [themes.DARK]: 'bg-neutral-0',
      [themes.LIGHT]: 'bg-neutral-0',
    },
    inputIcon: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-90',
    },
    error: {
      [themes.DEFAULT]: 'text-red-400',
      [themes.DARK]: 'text-red-500',
      [themes.LIGHT]: 'text-red-500',
    },
  },
  inverse: {
    background: {
      [themes.DEFAULT]: 'bg-neutral-15',
      [themes.DARK]: 'bg-neutral-0 border border-neutral-90',
      [themes.LIGHT]: 'bg-neutral-0',
    },
    backgroundInput: {
      [themes.DEFAULT]: 'bg-neutral-15',
      [themes.DARK]: 'bg-neutral-0',
      [themes.LIGHT]: 'bg-neutral-0',
    },
    inputIcon: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-90',
    },
    error: {
      [themes.DEFAULT]: 'text-red-400',
      [themes.DARK]: 'text-red-500',
      [themes.LIGHT]: 'text-red-500',
    },
  },
};

const InputPassword = ({ variant = 'default', placeholder, error, ...props }) => {
  const { theme } = useTheme();
  const style = styles[variant];
  const [visible, setVisible] = useState(false);

  const handleChange = () => {
    setVisible(!visible);
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <InputGroup
        inside
        className={twMerge('flex rounded-md w-full  h-12 lg:h-14', style.background[theme])}
      >
        <Input
          type={visible ? 'text' : 'password'}
          className={twMerge(
            'w-full rounded-md outline-none pl-3 text-xs font-light lg:text-base',
            style.backgroundInput[theme],
          )}
          placeholder={placeholder}
          {...props}
        />
        <InputGroup.Button
          onClick={handleChange}
          className="lg:w-1/12 w-[12%] flex items-center justify-center"
        >
          {visible ? (
            <MdVisibility className={twMerge('w-5 h-5 lg:w-6 lg:h-6', style.inputIcon[theme])} />
          ) : (
            <MdVisibilityOff className={twMerge('w-5 h-5 lg:w-6 lg:h-6', style.inputIcon[theme])} />
          )}
        </InputGroup.Button>
      </InputGroup>
      {error && (
        <div className="w-full">
          <p className={style.error[theme]}>{error}</p>
        </div>
      )}
    </div>
  );
};

export { InputPassword };
