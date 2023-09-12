import Image from 'next/image';
import {
  LuBriefcase,
  LuClipboardSignature,
  LuLayoutDashboard,
  LuLogOut,
  LuSettings,
  LuUser,
} from 'react-icons/lu';
import { SideMenu } from '@/components/shared/SideMenu';
import { themes, withTheme } from '@/contexts/ThemeContext';

const CandidateSideMenu = withTheme(({ theme, variant = 'default' }) => {
  const sideMenuLinks = [
    { href: '/home', icon: <LuLayoutDashboard size={36} /> },
    { href: '/profile', icon: <LuUser size={36} /> },
    { href: '/candidato/vagas', icon: <LuBriefcase size={36} /> },
    { href: '/applications', icon: <LuClipboardSignature size={36} /> },
    { href: '/settings', icon: <LuSettings size={36} /> },
  ];

  const styles = {
    default: {
      icon: {
        [themes.DEFAULT]: 'text-neutral-0 hover:text-primary-40',
        [themes.DARK]: 'text-neutral-0 hover:text-neutral-40',
        [themes.LIGHT]: 'text-neutral-90 hover:text-neutral-40',
      },
      logo: {
        [themes.DEFAULT]: 'logo_recrutaeu_green',
        [themes.DARK]: 'logo_recrutaeu_white',
        [themes.LIGHT]: 'logo_recrutaeu_black',
      },
    },
  };

  const style = styles[variant];

  return (
    <>
      <SideMenu.Root>
        <SideMenu.Top>
          <Image
            src={`/assets/images/${style.logo[theme]}.png`}
            width={50}
            height={50}
            alt="logo recrutaeu"
          />
        </SideMenu.Top>
        <SideMenu.LinkGroup>
          {sideMenuLinks.map(({ href, icon }) => (
            <SideMenu.Link key={icon} href={href} icon={icon} />
          ))}
        </SideMenu.LinkGroup>
        <SideMenu.Bottom>
          <SideMenu.Link
            href="/logout"
            icon={<LuLogOut size={36} />}
            className="-scale-x-100 block"
          />
        </SideMenu.Bottom>
      </SideMenu.Root>
    </>
  );
});

export { CandidateSideMenu };
