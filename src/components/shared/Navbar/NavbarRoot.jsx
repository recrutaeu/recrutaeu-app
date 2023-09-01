import { twMerge } from 'tailwind-merge';
import { withTheme } from '@/contexts/ThemeContext';

const NavbarRoot = withTheme(({ children, className }) => {
  return (
    <nav className={twMerge('w-full rounded-lg flex justify-between overflow-hidden', className)}>
      {children}
    </nav>
  );
});

export { NavbarRoot };
