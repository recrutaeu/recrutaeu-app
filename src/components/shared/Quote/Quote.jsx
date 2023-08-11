import { twMerge } from 'tailwind-merge';
import { themes, withTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    div: {
      [themes.DEFAULT]: 'border-primary-90',
      [themes.DARK]: 'border-neutral-0',
      [themes.LIGHT]: 'border-neutral-90',
    },
  },
};

const Quote = withTheme(({ children, theme, className, variant = 'default', ...props }) => {
  const style = styles[variant];

  return (
    <div
      className={twMerge('border-l-4 border-solid w-full pl-4', style.div[theme], className)}
      {...props}
    >
      {children}
    </div>
  );
});

export { Quote };