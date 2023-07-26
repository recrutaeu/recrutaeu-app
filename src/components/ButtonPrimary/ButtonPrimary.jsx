import { themes, withTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    [themes.DEFAULT]: 'bg-primary-90 text-neutral-0 hover:bg-primary-100',
    [themes.DARK]: 'bg-neutral-90 text-neutral-0 hover:bg-neutral-15 hover:text-neutral-90',
    [themes.LIGHT]: 'bg-neutral-0 text-neutral-90 hover:bg-neutral-15 hover:text-neutral-90',
  },
  inverse: {
    [themes.DEFAULT]: 'bg-primary-40 text-primary-90 hover:bg-primary-90 hover:text-neutral-10',
    [themes.DARK]: 'bg-neutral-90 text-neutral-0 hover:bg-neutral-15 hover:text-neutral-90',
    [themes.LIGHT]: 'bg-neutral-0 text-neutral-90 hover:bg-neutral-15 hover:text-neutral-90',
  },
};

const ButtonPrimary = withTheme(({ children, theme, variant = 'default', ...props }) => {
  const style = styles[variant];

  return (
    <button
      className={`${style[theme]} px-4 py-3 rounded-lg font-bold text-md w-full md:w-40`}
      {...props}
    >
      {children}
    </button>
  );
});

export { ButtonPrimary };
