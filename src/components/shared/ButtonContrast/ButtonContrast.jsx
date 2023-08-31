import { useState } from 'react';
import { calculateSizeAdjustValues } from 'next/dist/server/font-utils';
import { IoContrastOutline } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';
import { ButtonContrastMenu } from './ButtonContrastMenu';
import { themes, withTheme } from '@/contexts/ThemeContext';
import { commons } from '@/locales';

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

const ButtonContrast = withTheme(({ setTheme, className, theme, variant = 'default' }) => {
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
        <IoContrastOutline size={26} className="text-inherit" />
      </button>
      {toggle && <ButtonContrastMenu onChange={handleThemeChange} variant={variant} />}
    </div>
  );
});

export { ButtonContrast };
