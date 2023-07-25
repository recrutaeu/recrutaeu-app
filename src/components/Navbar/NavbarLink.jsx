import Link from 'next/link';
import { themes, withTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    div: {
      [themes.DEFAULT]: 'bg-neutral-15 text-primary-90 hover:bg-primary-40',
      [themes.DARK]: 'bg-neutral-0 text-primary-15 hover:bg-neutral-15',
      [themes.LIGHT]: 'bg-neutral-90 text-neutral-15 hover:bg-neutral-15 hover:text-neutral-90',
    },
  },
  inverse: {
    div: {
      [themes.DEFAULT]: 'bg-neutral-15 text-primary-90 hover:bg-primary-90 hover:text-neutral-10',
      [themes.DARK]: 'bg-neutral-15 text-neutral-90 hover:bg-neutral-90 hover:text-neutral-0',
      [themes.LIGHT]: 'bg-neutral-15 text-neutral-90 hover:bg-neutral-0',
    },
  },
};

const NavbarLink = withTheme(({ children, link, theme, variant = 'default' }) => {
  const style = styles[variant];

  return (
    <div className={`${style.div[theme]} py-2 px-4 w-full font-semibold text-lg`}>
      <Link href={link} className="flex w-full justify-center">
        {children}
      </Link>
    </div>
  );
});

export { NavbarLink };
