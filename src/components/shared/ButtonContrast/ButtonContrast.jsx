'use client';
import { useState } from 'react';
import { IoContrastOutline } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';
import { ButtonContrastMenu } from './ButtonContrastMenu';
import { themes, useTheme } from '@/contexts/ThemeContext';

const defaultStyle = {
  div: {
    [themes.DEFAULT]: 'text-primary-90',
    [themes.DARK]: 'text-neutral-90',
    [themes.LIGHT]: 'text-neutral-0',
  },
  text: {
    [themes.DEFAULT]: 'text-neutral-90',
    [themes.DARK]: 'text-neutral-90',
    [themes.LIGHT]: 'text-neutral-90',
  },
  circleDefault: {
    [themes.DEFAULT]: 'bg-primary-90',
    [themes.DARK]: 'bg-primary-90',
    [themes.LIGHT]: 'bg-primary-90',
  },
  circleDark: {
    [themes.DEFAULT]: 'bg-neutral-90',
    [themes.DARK]: 'bg-neutral-90',
    [themes.LIGHT]: 'bg-neutral-90',
  },
  circleDeLight: {
    [themes.DEFAULT]: 'border border-neutral-90 bg-neutral-0',
    [themes.DARK]: 'border border-neutral-90',
    [themes.LIGHT]: 'border border-neutral-90  bg-neutral-0',
  },
};

const styles = {
  default: defaultStyle,
  inverse: {
    ...defaultStyle,
    div: {
      [themes.DEFAULT]: 'text-primary-40',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
  },
};

const ButtonContrast = ({ className, variant = 'default' }) => {
  const { theme, setTheme } = useTheme();
  const style = styles[variant];
  const [toggle, setToggle] = useState(false);
  const handleThemeChange = (theme) => {
    setTheme(theme);
    setToggle(false);
  };

  return (
    <div className={twMerge(className, 'relative')}>
      <button
        className={twMerge('flex items-center', style.div[theme])}
        onClick={() => setToggle(!toggle)}
      >
        <IoContrastOutline size={24} className="text-inherit" />
      </button>
      {toggle && <ButtonContrastMenu onChange={handleThemeChange} variant={variant} />}
    </div>
  );
};

export { ButtonContrast };
