import { twMerge } from 'tailwind-merge';
import { themes, withTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    [themes.DEFAULT]: 'bg-primary-90',
    [themes.DARK]: 'bg-neutral-90',
    [themes.LIGHT]: 'bg-neutral-0',
  },
};

const SideMenuRoot = withTheme(({ children, theme, className, variant = 'default', ...props }) => {
  const style = styles[variant];

  return (
    <nav
      className={twMerge(
        'p-[25px] w-[100px] h-screen flex flex-col items-center',
        style[theme],
        className,
      )}
      {...props}
    >
      {children}
    </nav>
  );
});

export { SideMenuRoot };
