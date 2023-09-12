import { twMerge } from 'tailwind-merge';
import { AccessibilityNavbar } from '../AccessibilityNavbar';
import { Navbar } from '../Navbar';
import { withTheme } from '@/contexts/ThemeContext';
import { commons } from '@/locales';

const AuthNavbar = withTheme(({ variant, className }) => {
  return (
    <div className={twMerge('flex w-full', className)}>
      <div className="hidden lg:flex w-full justify-center">
        <Navbar.Root className="mr-7">
          <Navbar.Link variant={variant} link="/">
            {commons.navbar.home}
          </Navbar.Link>
          <Navbar.Link variant={variant} link="/">
            {commons.navbar.candidate}
          </Navbar.Link>
          <Navbar.Link variant={variant} link="/">
            {commons.navbar.company}
          </Navbar.Link>
        </Navbar.Root>
      </div>
      <AccessibilityNavbar variant={variant} />
    </div>
  );
});

export { AuthNavbar };
