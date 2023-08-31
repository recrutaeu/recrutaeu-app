import { twMerge } from 'tailwind-merge';
import { themes, withTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    [themes.DEFAULT]: 'bg-primary-90',
    [themes.DARK]: 'bg-neutral-90',
    [themes.LIGHT]: 'bg-neutral-0',
  },
  inverse: {
    [themes.DEFAULT]: 'bg-neutral-10',
    [themes.DARK]: 'bg-neutral-0',
    [themes.LIGHT]: 'bg-neutral-90',
  },
};

const LayoutLeft = withTheme(({ children, theme, className, variant = 'default', ...props }) => {
  const style = styles[variant];

  return (
    <div className={twMerge('w-full pl-20 pr-40 py-12', style[theme], className)} {...props}>
      {children}
    </div>
  );
});

export { LayoutLeft };
