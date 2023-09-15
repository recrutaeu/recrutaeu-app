import { twMerge } from 'tailwind-merge';
import { themes, withTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    [themes.DEFAULT]: 'text-neutral-0',
    [themes.DARK]: 'text-neutral-0',
    [themes.LIGHT]: 'text-neutral-90',
  },
  inverse: {
    [themes.DEFAULT]: 'text-primary-90',
    [themes.DARK]: 'text-neutral-90',
    [themes.LIGHT]: 'text-neutral-0',
  },
  inverseSecundary: {
    [themes.DEFAULT]: 'text-primary-90',
    [themes.DARK]: 'text-neutral-0',
    [themes.LIGHT]: 'text-neutral-90',
  },
};

const Title = withTheme(({ children, theme, variant = 'default', className, ...props }) => {
  const style = styles[variant];

  return (
    <p className={twMerge('text-4xl font-bold md:text-7Xl', style[theme], className)} {...props}>
      {children}
    </p>
  );
});

export { Title };
