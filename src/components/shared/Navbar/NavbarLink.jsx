import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    div: {
      [themes.DEFAULT]: 'bg-neutral-15 text-primary-90 hover:bg-primary-90 hover:text-neutral-10',
      [themes.DARK]: 'bg-neutral-15 text-neutral-90 hover:bg-neutral-90 hover:text-neutral-0',
      [themes.LIGHT]: 'bg-neutral-0 text-neutral-90 hover:bg-neutral-15',
    },
    active: {
      [themes.DEFAULT]: 'bg-primary-90 text-neutral-10',
      [themes.DARK]: 'bg-neutral-90 text-neutral-0',
      [themes.LIGHT]: 'bg-neutral-15',
    },
  },
  inverse: {
    div: {
      [themes.DEFAULT]: 'bg-neutral-10 text-primary-90 hover:bg-primary-40',
      [themes.DARK]: 'bg-neutral-0 text-primary-15 hover:bg-neutral-15',
      [themes.LIGHT]: 'bg-neutral-90 text-neutral-0 hover:bg-neutral-15 hover:text-neutral-90',
    },
    active: {
      [themes.DEFAULT]: 'bg-primary-40',
      [themes.DARK]: 'bg-neutral-15',
      [themes.LIGHT]: 'bg-neutral-15 text-neutral-90',
    },
  },
};

const NavbarLink = ({
  children,
  className,
  active = false,
  href = '',
  variant = 'default',
  ...props
}) => {
  const { theme } = useTheme();
  const style = styles[variant];

  return (
    <div
      className={twMerge(
        'py-2 px-4 w-full font-semibold text-lg',
        style.div[theme],
        className,
        active && style.active[theme],
      )}
      {...props}
    >
      <Link href={href} className="flex w-full justify-center">
        {children}
      </Link>
    </div>
  );
};

export { NavbarLink };
