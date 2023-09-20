'use client';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    icon: {
      [themes.DEFAULT]: 'text-primary-90 disabled:text-neutral-60',
      [themes.DARK]: 'text-neutral-90 disabled:text-neutral-60',
      [themes.LIGHT]: 'text-neutral-0 disabled:text-neutral-60',
    },
  },
};

const ButtonIcon = ({ children, disabled = false, type }) => {
  const { theme } = useTheme();
  const style = styles['default'];

  return (
    <button className={style.icon[theme]} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export { ButtonIcon };
