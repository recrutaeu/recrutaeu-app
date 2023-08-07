import { themes, withTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    [themes.DEFAULT]: 'text-primary-90',
    [themes.DARK]: 'text-neutral-90',
    [themes.LIGHT]: 'text-neutral-0',
  },
  inverse: {
    [themes.DEFAULT]: 'text-primary-40',
    [themes.DARK]: 'text-neutral-0',
    [themes.LIGHT]: 'text-neutral-90',
  },
};

const ButtonLink = withTheme(({ children, theme, variant = 'default' }) => {
  const style = styles[variant];

  return (
    <a href="/" className={`${style[theme]} font-bold`}>
      {children}
    </a>
  );
});

export { ButtonLink };
