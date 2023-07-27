import { twMerge } from 'tailwind-merge';
import { themes, withTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    div: {
      [themes.DEFAULT]: 'bg-neutral-0',
      [themes.DARK]: 'bg-neutral-90',
      [themes.LIGHT]: 'bg-neutral-0',
    },
  },
  inverse: {
    div: {
      [themes.DEFAULT]: 'bg-neutral-10',
      [themes.DARK]: 'bg-neutral-0',
      [themes.LIGHT]: 'bg-neutral-90',
    },
  },
};

const Card = withTheme(({ children, className, theme, variant = 'default', ...props }) => {
  const style = styles[variant];

  return (
    <div
      className={twMerge('w-full rounded-3xl px-6 py-7', style.div[theme], className)}
      {...props}
    >
      {children}
    </div>
  );
});

export { Card };
