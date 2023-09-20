import { twMerge } from 'tailwind-merge';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    [themes.DEFAULT]: 'bg-primary-90',
    [themes.DARK]: 'bg-neutral-90',
    [themes.LIGHT]: 'bg-neutral-0',
  },
};

const MenuRoot = ({ children, className, variant = 'default', ...props }) => {
  const { theme } = useTheme();
  const style = styles[variant];

  return (
    <nav
      className={twMerge(
        'py-6 w-[100px] h-screen flex flex-col items-center',
        style[theme],
        className,
      )}
      {...props}
    >
      {children}
    </nav>
  );
};

export { MenuRoot };
