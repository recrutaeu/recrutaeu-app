'use client';
import { useState } from 'react';
import { PiSelectionAllFill, PiSelectionAll } from 'react-icons/pi';
import { twMerge } from 'tailwind-merge';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    icon: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-0',
    },
  },
};

const ButtonSelectAll = ({ onChange }) => {
  const [checked, setChecked] = useState();
  const { theme } = useTheme();
  const style = styles['default'];
  const handleCheck = () => {
    const toggle = !checked;
    setChecked(toggle);
    onChange(toggle);
  };

  return (
    <button type="button" className={twMerge('cursor-pointer', style.icon[theme])}>
      {checked ? (
        <PiSelectionAllFill size={24} onClick={handleCheck} />
      ) : (
        <PiSelectionAll size={24} onClick={handleCheck} />
      )}
    </button>
  );
};

export { ButtonSelectAll };
