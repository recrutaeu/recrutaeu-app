'use client';
import { AppNavbar } from '@/components/shared/AppNavbar';
import { AuthNavbar } from '@/components/shared/AuthNavbar';

const NavbarDesk = () => {
  return <AuthNavbar variant="inverse" className="lg:w-[50%] w-full" />;
};

const NavbarMobile = () => {
  return <AppNavbar variant="inverse" className="lg:hidden" />;
};

export { NavbarDesk, NavbarMobile };
