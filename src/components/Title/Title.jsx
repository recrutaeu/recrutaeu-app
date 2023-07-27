import { themes, withTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    [themes.DEFAULT]: 'text-primary-90',
    [themes.DARK]: 'text-neutral-90',
    [themes.LIGHT]: 'text-neutral-0',
  },
  inverse: {
    [themes.DEFAULT]: 'text-primary-40',
  },
};

const Title = withTheme(({ children, theme, variant = 'default', ...props }) => {
  const style = styles[variant];

  return (
    <p className={`${style[theme]} text-4Xl font-bold md:text-5Xl`} {...props}>
      {children}
    </p>
  );
});

export { Title };
