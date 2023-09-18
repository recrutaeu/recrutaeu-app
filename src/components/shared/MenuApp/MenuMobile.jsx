import { usePathname } from 'next/navigation';
import { Menu } from '../Menu';

const MenuMobile = ({ links }) => {
  const pathname = usePathname();

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
};

export { MenuMobile };
