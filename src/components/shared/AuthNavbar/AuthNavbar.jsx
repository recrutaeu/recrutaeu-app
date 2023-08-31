import { ButtonArrow } from '../ButtonArrow';
import { ButtonContrast } from '../ButtonContrast';
import { ButtonFontZoom } from '../ButtonFontZoom';
import { Navbar } from '../Navbar';
import { commons } from '@/locales';

const AuthNavbar = ({ variant }) => {
  return (
    <div className="flex w-full">
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
      <div className="w-7 lg:hidden">
        <ButtonArrow variant={variant} />
      </div>
      <div className="flex w-full justify-end items-center gap-4 lg:w-40">
        <ButtonContrast variant={variant} />
        <ButtonFontZoom variant={variant} />
      </div>
    </div>
  );
};

export { AuthNavbar };
