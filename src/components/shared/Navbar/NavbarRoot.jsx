import { twMerge } from 'tailwind-merge';
import { withTheme } from '@/contexts/ThemeContext';

const NavbarRoot = withTheme(({ children, className }) => {
  return (
    <nav className={twMerge('w-[100%] rounded-lg flex justify-between overflow-hidden', className)}>
      {children}
    </nav>
  );
});

export { NavbarRoot };
