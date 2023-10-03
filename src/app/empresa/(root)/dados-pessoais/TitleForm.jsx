'use client';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    title: {
      [themes.DEFAULT]: 'text-primary-90 font-bold  text-xl',
      [themes.DARK]: 'text-neutral-90 font-bold  text-xl',
      [themes.LIGHT]: 'text-neutral-0 font-bold  text-xl',
    },
  },
};

const TitleForm = ({ children }) => {
  const { theme } = useTheme();
  const style = styles['default'];
  return <p className={style.title[theme]}>{children}</p>;
};

export { TitleForm };
