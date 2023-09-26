import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { Navbar } from '../Navbar';
import { commons } from '@/locales';

const AppNavbar = ({ variant, className }) => {
  const pathname = usePathname();

  return (
    <div className={twMerge('flex w-full items-center', className)}>
      <Navbar.Root>
        <Navbar.Link
          active={pathname.includes('/candidato')}
          variant={variant}
          href="/candidato/login"
        >
          {commons.navbar.candidate}
        </Navbar.Link>
        <Navbar.Link active={pathname.includes('/empresa')} variant={variant} href="/empresa/login">
          {commons.navbar.company}
        </Navbar.Link>
        <Navbar.Link
          active={pathname.includes('/recrutador')}
          variant={variant}
          href="/recrutador/login"
        >
          {commons.navbar.recruiter}
        </Navbar.Link>
      </Navbar.Root>
    </div>
  );
};

export { AppNavbar };
