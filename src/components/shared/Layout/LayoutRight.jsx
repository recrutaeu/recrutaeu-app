import { twMerge } from 'tailwind-merge';
import { themes, withTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    [themes.DEFAULT]: 'bg-neutral-10 ',
    [themes.DARK]: 'bg-neutral-0',
    [themes.LIGHT]: 'bg-neutral-90',
  },
  inverse: {
    [themes.DEFAULT]: 'bg-primary-90',
    [themes.DARK]: 'bg-neutral-90',
    [themes.LIGHT]: 'bg-neutral-0',
  },
};

const LayoutRight = withTheme(({ children, className, theme, variant = 'default', ...props }) => {
  const style = styles[variant];

  return (
    <div
      className={twMerge('w-full lg:pl-40 lg:pr-20 lg:py-12 px-7 py-8', style[theme], className)}
      {...props}
    >
      {children}
    </div>
  );
});

export { LayoutRight };
