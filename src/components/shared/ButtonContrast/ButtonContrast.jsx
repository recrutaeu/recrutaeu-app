import { useState } from 'react';
import { Contrast } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { themes, withTheme } from '@/contexts/ThemeContext';
import { commons } from '@/locales';

const styles = {
  default: {
    div: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-0',
    },
    text: {
      [themes.DEFAULT]: 'text-neutral-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-0',
    },
    circleDefault: {
      [themes.DEFAULT]: 'bg-primary-90',
      [themes.DARK]: 'bg-primary-90',
      [themes.LIGHT]: 'border border-neutral-0 bg-primary-90',
    },
    circleDark: {
      [themes.DEFAULT]: 'bg-neutral-90',
      [themes.DARK]: 'bg-neutral-90',
      [themes.LIGHT]: 'border border-neutral-0 bg-neutral-90',
    },
    circleDeLight: {
      [themes.DEFAULT]: 'border border-neutral-90 bg-neutral-0',
      [themes.DARK]: 'border border-neutral-90',
      [themes.LIGHT]: ' bg-neutral-0',
    },
  },
  inverse: {
    div: {
      [themes.DEFAULT]: 'text-primary-40',
    },
    text: {
      [themes.DEFAULT]: 'text-neutral-0',
    },
  },
};

const ButtonContrast = withTheme(({ setTheme, className, theme, variant = 'default' }) => {
  const style = styles[variant];
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full">
      <button className={twMerge(style.div[theme], className)} onClick={() => setToggle(!toggle)}>
        <Contrast />
      </button>
      {toggle && (
        <div className="ml-1">
          <button
            className={twMerge('flex items-center border-b-neutral-30 h-[38px]', style.text[theme])}
            onClick={() => setTheme(themes.DEFAULT)}
          >
            <div
              className={twMerge(
                'rounded-[100%]  overflow-hidden w-[15px] h-[15px]',
                style.circleDefault[theme],
              )}
            ></div>
            <div className="ml-2">{commons.button.constrast.default}</div>
          </button>
          <button
            className={twMerge('flex items-center h-[38px]', style.text[theme])}
            onClick={() => setTheme(themes.DARK)}
          >
            <div
              className={twMerge(
                'rounded-[100%]  overflow-hidden w-[15px] h-[15px]',
                style.circleDark[theme],
              )}
            ></div>
            <div className="ml-2">{commons.button.constrast.dark}</div>
          </button>
          <button
            className={twMerge('flex items-center h-[38px]', style.text[theme])}
            onClick={() => setTheme(themes.LIGHT)}
          >
            <div
              className={twMerge(
                'rounded-[100%]  overflow-hidden w-[15px] h-[15px]',
                style.circleDeLight[theme],
              )}
            ></div>
            <div className="ml-2">{commons.button.constrast.ligth}</div>
          </button>
        </div>
      )}
    </div>
  );
});

export { ButtonContrast };
