import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { Menu } from '../Menu';

const MenuMobile = ({ links, className }) => {
  const pathname = usePathname();

  return (
    <Menu.Root className={twMerge('w-full h-auto md:hidden', className)}>
      <Menu.LinkGroup className={twMerge('w-full flex-row justify-between', className)}>
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
