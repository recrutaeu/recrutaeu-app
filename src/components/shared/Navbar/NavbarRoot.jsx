import { twMerge } from 'tailwind-merge';

const NavbarRoot = ({ children, className }) => {
  return (
    <nav className={twMerge('w-full rounded-lg flex justify-between overflow-hidden', className)}>
      {children}
    </nav>
  );
};

export { NavbarRoot };
