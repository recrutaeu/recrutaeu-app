import { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';
import { Input } from '../Input';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    inputIcon: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-90',
    },
  },
};

const InputPassword = ({ className, variant = 'default', label }) => {
  const { theme } = useTheme();
  const [inputType, setInputType] = useState('password');
  const style = styles['default'];

  return (
    <>
      <Input.Root variant={variant}>
        <Input.Field type={inputType} label={label} id="password" required />

        {inputType === 'password' ? (
          <button type="button" onClick={() => setInputType('text')}>
            <MdVisibilityOff size={24} className={twMerge(style.inputIcon[theme], className)} />
          </button>
        ) : (
          <button type="button" onClick={() => setInputType('password')}>
            <MdVisibility size={24} className={twMerge(style.inputIcon[theme], className)} />
          </button>
        )}
      </Input.Root>
    </>
  );
};

export { InputPassword };
