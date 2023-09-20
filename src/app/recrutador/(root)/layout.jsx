'use client';
import {
  LuBriefcase,
  LuHourglass,
  LuLayoutDashboard,
  LuCalendarDays,
  LuSettings,
} from 'react-icons/lu';
import { RiUserSearchLine } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';
import { AccessibilityNavbar } from '@/components/shared/AccessibilityNavbar';
import { MenuDesk, MenuMobile } from '@/components/shared/MenuApp';
import { themes, useTheme } from '@/contexts/ThemeContext';

const links = [
  {
    href: '/recrutador/dashboard',
    icon: <LuLayoutDashboard className="md:w-9 md:h-9 w-7 h-7" />,
  },
  { href: '/recrutador/vagas', icon: <LuBriefcase className="md:w-9 md:h-9 w-7 h-7" /> },
  {
    href: '/recrutador/buscar-candidato',
    icon: <RiUserSearchLine className="md:w-9 md:h-9 w-7 h-7" />,
  },
  {
    href: '/recrutador/processo-em-andamento',
    icon: <LuHourglass className="md:w-9 md:h-9 w-7 h-7" />,
  },
  {
    href: '/recrutador/programacao-da-semana',
    icon: <LuCalendarDays className="md:w-9 md:h-9 w-7 h-7" />,
  },
  { href: '/recrutador/configuracoes', icon: <LuSettings className="md:w-9 md:h-9 w-7 h-7" /> },
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
  const style = styles[variant];

  return (
    <div
      className={twMerge(
        'w-full h-[calc(100vh-80px)] md:h-screen flex flex-col md:flex-row',
        style.background[theme],
      )}
    >
      <MenuDesk className="hidden md:flex" links={links} />
      <div className="w-full grow overflow-auto flex flex-col lg:px-7 px-5">
        <AccessibilityNavbar className="w-full flex items-center justify-end py-4" />
        {children}
      </div>
      <MenuMobile links={links} className="px-3" />
    </div>
  );
};

export default Layout;
