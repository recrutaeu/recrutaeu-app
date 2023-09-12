import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { themes, withTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    icon: {
      [themes.DEFAULT]: 'text-neutral-0 hover:text-primary-40',
      [themes.DARK]: 'text-neutral-0 hover:text-neutral-40',
      [themes.LIGHT]: 'text-neutral-90 hover:text-neutral-40',
    },
  },
};

const SideMenuLink = withTheme(({ href, icon, className, theme, variant = 'default' }) => {
  const style = styles[variant];
  return (
    <Link className={twMerge(style.icon[theme], className)} href={href}>
      {icon}
    </Link>
  );
});

export { SideMenuLink };
