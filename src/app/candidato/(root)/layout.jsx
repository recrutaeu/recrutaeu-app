'use client';
import {
  LuBriefcase,
  LuClipboardSignature,
  LuLayoutDashboard,
  LuSettings,
  LuUser,
} from 'react-icons/lu';
import { twMerge } from 'tailwind-merge';
import { AccessibilityNavbar } from '@/components/shared/AccessibilityNavbar';
import { MenuDesk, MenuMobile } from '@/components/shared/MenuApp';
import { themes, useTheme } from '@/contexts/ThemeContext';

const links = [
  { href: '/candidato/dashboard', icon: <LuLayoutDashboard className="md:w-7 md:h-7 w-6 h-6" /> },
  { href: '/candidato/perfil', icon: <LuUser className="md:w-7 md:h-7 w-6 h-6" /> },
  { href: '/candidato/vagas', icon: <LuBriefcase className="md:w-7 md:h-7 w-6 h-6" /> },
  {
    href: '/candidato/candidaturas',
    icon: <LuClipboardSignature className="md:w-7 md:h-7 w-6 h-6" />,
  },
  { href: '/candidato/configuracoes', icon: <LuSettings className="md:w-7 md:h-7 w-6 h-6" /> },
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
        'w-full h-full md:h-[calc(100dvh)] flex flex-col md:flex-row mb-9 md:mb-0',
        style.background[theme],
      )}
    >
      <MenuDesk className="hidden md:flex" links={links} />
      <div className="w-full grow flex flex-col px-5">
        <AccessibilityNavbar className="w-full flex items-center justify-end py-4" />
        {children}
      </div>
      <MenuMobile links={links} className="px-4" />
    </div>
  );
};

export default Layout;
