import { themes, useTheme } from '@/contexts/ThemeContext';
import { commons } from '@/locales';
import { twMerge } from 'tailwind-merge';

const defaultStyle = {
  div: {
    [themes.DEFAULT]: 'bg-neutral-15',
    [themes.DARK]: 'bg-neutral-20',
    [themes.LIGHT]: 'bg-neutral-0',
  },
  text: {
    [themes.DEFAULT]: 'text-neutral-90 hover:bg-primary-90 hover:text-neutral-0',
    [themes.DARK]: 'text-neutral-90 hover:bg-neutral-90 hover:text-neutral-0',
    [themes.LIGHT]: 'text-neutral-90 hover:bg-neutral-15',
  },
  circleDefault: {
    [themes.DEFAULT]: 'border bg-primary-90',
    [themes.DARK]: 'border bg-primary-90',
    [themes.LIGHT]: 'bg-primary-90',
  },
  circleDark: {
    [themes.DEFAULT]: 'border bg-neutral-90',
    [themes.DARK]: 'border bg-neutral-90',
    [themes.LIGHT]: 'bg-neutral-90',
  },
  circleDeLight: {
    [themes.DEFAULT]: 'border border-neutral-90 bg-neutral-0',
    [themes.DARK]: 'border border-neutral-90 bg-neutral-0',
    [themes.LIGHT]: 'border border-neutral-90  bg-neutral-0',
  },
};

const styles = {
  default: defaultStyle,
  inverse: {
    ...defaultStyle,
    div: {
      [themes.DEFAULT]: 'bg-neutral-10',
      [themes.DARK]: 'bg-neutral-0',
      [themes.LIGHT]: 'bg-neutral-90',
    },
    text: {
      [themes.DEFAULT]: 'text-primary-90 hover:bg-primary-40',
      [themes.DARK]: 'text-neutral-90 hover:bg-neutral-15',
      [themes.LIGHT]: 'text-neutral-0 hover:bg-neutral-15 hover:text-neutral-90',
    },
    circleDefault: {
      [themes.DEFAULT]: 'bg-primary-90',
      [themes.DARK]: 'bg-primary-90',
      [themes.LIGHT]: 'border bg-primary-90',
    },
    circleDark: {
      [themes.DEFAULT]: 'bg-neutral-90',
      [themes.DARK]: 'bg-neutral-90',
      [themes.LIGHT]: 'border bg-neutral-90',
    },
  },
};

const ButtonContrastMenu = ({ onChange, variant = 'default' }) => {
  const { theme } = useTheme();
  const style = styles[variant];
  const handleChange = (theme) => () => {
    onChange(theme);
  };

  return (
    <div
      className={twMerge(
        'ml-1 absolute right-0 z-10 w-56 mt-4 border rounded-md ',
        style.div[theme],
      )}
    >
      <button
        className={twMerge(
          'flex items-center border-b-neutral-30 h-[38px] w-full p-4',
          style.text[theme],
        )}
        onClick={handleChange(themes.DEFAULT)}
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
        className={twMerge('flex items-center h-[38px] p-4 w-full', style.text[theme])}
        onClick={handleChange(themes.DARK)}
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
        className={twMerge('flex items-center h-[38px] p-4  w-full', style.text[theme])}
        onClick={handleChange(themes.LIGHT)}
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
  );
};

export { ButtonContrastMenu };
