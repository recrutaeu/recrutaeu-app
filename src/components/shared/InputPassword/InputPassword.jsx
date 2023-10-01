'use client';
import { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { Input, InputGroup } from 'rsuite';

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
  },
};

const InputPassword = ({ variant = 'default', placeholder, error, ...props }) => {
  const { theme } = useTheme();
  const style = styles['default'];
  const [visible, setVisible] = useState(false);

  const handleChange = () => {
    setVisible(!visible);
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <InputGroup
        inside
        className={twMerge('flex rounded-md w-full h-14', style.background[theme])}
      >
        <Input
          type={visible ? 'text' : 'password'}
          className={twMerge('w-full rounded-md outline-none pl-3', style.backgroundInput[theme])}
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
          <p className="text-red-500">{error}</p>
        </div>
      )}
    </div>
  );
};

export { InputPassword };
