import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
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

const ButtonLink = withTheme(
  ({ children, className, href = '', theme, variant = 'default', ...props }) => {
    const style = styles[variant];

    return (
      <Link href={href} className={twMerge('font-bold', style[theme], className)} {...props}>
        {children}
      </Link>
    );
  },
);

export { ButtonLink };
