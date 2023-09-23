'use client';
import { Layout } from '@/components/shared/Layout';
import { MenuMobile } from '@/components/shared/MenuApp';
import { LuBriefcase, LuCalendarDays, LuHourglass, LuLayoutDashboard, LuSettings } from 'react-icons/lu';
import { RiUserSearchLine } from 'react-icons/ri';

const links = [
  {
    href: '/recrutador/dashboard',
    icon: <LuLayoutDashboard className="md:w-7 md:h-7 w-6 h-6" />,
  },
  { href: '/recrutador/vagas', icon: <LuBriefcase className="md:w-7 md:h-7 w-6 h-6" /> },
  {
    href: '/recrutador/buscar-candidato',
    icon: <RiUserSearchLine className="md:w-7 md:h-7 w-6 h-6" />,
  },
  {
    href: '/recrutador/processo-em-andamento',
    icon: <LuHourglass className="md:w-7 md:h-7 w-6 h-6" />,
  },
  {
    href: '/recrutador/programacao-da-semana',
    icon: <LuCalendarDays className="md:w-7 md:h-7 w-6 h-6" />,
  },
  { href: '/recrutador/configuracoes', icon: <LuSettings className="md:w-7 md:h-7 w-6 h-6" /> },
];

const RootLayout = ({ children }) => {
  return (
    <div>
      <Layout.Root>{children}</Layout.Root>
      <MenuMobile links={links} />
    </div>
  );
};

export default RootLayout;
