import { usePathname } from 'next/navigation';
import { Menu } from '../Menu';
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

const MenuMobile = withTheme(({ links, variant = 'default', className, theme }) => {
  const pathname = usePathname();
  const style = styles[variant];

  return (
    <Menu.Root className="w-full h-auto md:hidden ">
      <Menu.LinkGroup className="w-full px-10 flex-row justify-between">
        {links.map((link) => {
          return (
            <Menu.Link
              key={link.href}
              href={link.href}
              icon={link.icon}
              active={pathname.includes(link.href)}
            />
          );
        })}
      </Menu.LinkGroup>
    </Menu.Root>
  );
});

export { MenuMobile };
