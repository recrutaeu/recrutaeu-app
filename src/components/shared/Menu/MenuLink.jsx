import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    icon: {
      [themes.DEFAULT]: 'text-neutral-0 hover:text-primary-40',
      [themes.DARK]: 'text-neutral-0 hover:text-neutral-50',
      [themes.LIGHT]: 'text-neutral-90 hover:text-neutral-50',
    },
    active: {
      [themes.DEFAULT]: 'text-primary-40',
      [themes.DARK]: 'text-neutral-30',
      [themes.LIGHT]: 'text-neutral-30',
    },
  },
};

const MenuLink = ({
  href,
  icon,
  className,
  variant = 'default',
  active = false,
  functionSignOut = null,
}) => {
  const { theme } = useTheme();
  const style = styles[variant];
  return (
    <Link
      onClick={functionSignOut}
      className={twMerge(style.icon[theme], className, active && style.active[theme])}
      href={href}
    >
      {icon}
    </Link>
  );
};

export { MenuLink };
