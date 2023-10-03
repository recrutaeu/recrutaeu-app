'use client';
import { useRouter } from 'next/navigation';
import {
  LuBriefcase,
  LuCalendarDays,
  LuHourglass,
  LuLayoutDashboard,
  LuSettings,
} from 'react-icons/lu';
import { RiUserSearchLine } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';
import { AccessibilityNavbar } from '@/components/shared/AccessibilityNavbar';
import { MenuDesk, MenuMobile } from '@/components/shared/MenuApp';
import { AuthContextProvider } from '@/contexts/AuthContext';
import { themes, useTheme } from '@/contexts/ThemeContext';

const links = [
  {
    href: '/recrutador/dashboard',
    icon: <LuLayoutDashboard className="md:w-7 md:h-7 w-6 h-6" />,
  },
  { href: '/recrutador/vagas', icon: <LuBriefcase className="md:w-7 md:h-7 w-6 h-6" /> },
  // {
  //   href: '/recrutador/buscar-candidato',
  //   icon: <RiUserSearchLine className="md:w-7 md:h-7 w-6 h-6" />,
  // },
  {
    href: '/recrutador/processo-em-andamento',
    icon: <LuHourglass className="md:w-7 md:h-7 w-6 h-6" />,
  },
  {
    href: '/recrutador/entrevistas-agendadas',
    icon: <LuCalendarDays className="md:w-7 md:h-7 w-6 h-6" />,
  },
  { href: '/recrutador/dados-pessoais', icon: <LuSettings className="md:w-7 md:h-7 w-6 h-6" /> },
];

const styles = {
  default: {
    background: {
      [themes.DEFAULT]: 'bg-neutral-10',
      [themes.DARK]: 'bg-neutral-0',
      [themes.LIGHT]: 'bg-neutral-90',
    },
  },
};

const Layout = ({ children, variant = 'default' }) => {
  const { theme } = useTheme();
  const route = useRouter();
  const style = styles[variant];

  return (
    <AuthContextProvider callbackUrl={'/recrutador/login'} role={'recruiter'}>
      <div className={twMerge('w-full  flex flex-col md:flex-row', style.background[theme])}>
        <MenuDesk className="hidden md:flex" links={links} />
        <div className="h-[calc(100dvh-64px)] md:h-[calc(100dvh)] overflow-hidden w-full grow flex flex-col">
          <AccessibilityNavbar
            onBack={() => {
              route.pop();
            }}
            onLogout={() => {
              route.push('/');
            }}
            className="w-full flex items-center justify-end px-5  lg:pr-12 py-5"
          />
          {children}
        </div>
        <MenuMobile links={links} />
      </div>
    </AuthContextProvider>
  );
};

export default Layout;
