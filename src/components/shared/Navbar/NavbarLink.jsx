import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { themes, withTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    div: {
      [themes.DEFAULT]: 'bg-neutral-15 text-primary-90 hover:bg-primary-90 hover:text-neutral-10',
      [themes.DARK]: 'bg-neutral-15 text-neutral-90 hover:bg-neutral-90 hover:text-neutral-0',
      [themes.LIGHT]: 'bg-neutral-15 text-neutral-90 hover:bg-neutral-0',
    },
  },
  inverse: {
    div: {
      [themes.DEFAULT]: 'bg-neutral-10 text-primary-90 hover:bg-primary-40',
      [themes.DARK]: 'bg-neutral-0 text-primary-15 hover:bg-neutral-15',
      [themes.LIGHT]: 'bg-neutral-90 text-neutral-15 hover:bg-neutral-15 hover:text-neutral-90',
    },
  },
};

const NavbarLink = withTheme(
  ({ children, className, href = '', theme, variant = 'default', ...props }) => {
    const style = styles[variant];

    return (
      <div
        className={twMerge('py-2 px-4 w-full font-semibold text-lg', style.div[theme], className)}
        {...props}
      >
        <Link href={href} className="flex w-full justify-center">
          {children}
        </Link>
      </div>
    );
  },
);

export { NavbarLink };
