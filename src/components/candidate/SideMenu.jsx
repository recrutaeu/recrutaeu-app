import { SideMenu } from '@/components/shared/SideMenu';
import { themes, withTheme } from '@/contexts/ThemeContext';
import Image from 'next/image';

const CandidateSideMenu = withTheme(({theme,  variant = 'default'}) => {
  const sideMenuLinks =  [
    { href: '/home', icon: 'LayoutDashboard'},
    { href: '/profile', icon: 'User2' },
    { href: '/jobs', icon: 'Briefcase' },
    { href: '/applications', icon: 'ClipboardSignature' },
    { href: '/settings', icon: 'Settings' },
  ];

  const styles = {
    default: {
      icon: {
        [themes.DEFAULT]: 'text-neutral-0 hover:text-primary-40',
        [themes.DARK]: 'text-neutral-0 hover:text-neutral-40',
        [themes.LIGHT]: 'text-neutral-90 hover:text-neutral-40',
      },
      logo: {
        [themes.DEFAULT]: 'logo_default',
        [themes.DARK]: 'logo_white',
        [themes.LIGHT]: 'logo_black',
      },
    },
  };

  const style = styles[variant]

  return (
  <>
    <SideMenu.Root>
      <SideMenu.Top>
        <Image src={`assets/images/${style.logo[theme]}.svg`} width={50} height={50} />
      </SideMenu.Top>
      <SideMenu.LinkGroup>
        {sideMenuLinks.map(({href, icon}) => (
          <SideMenu.Link href={href} icon={icon} />
        ))}
      </SideMenu.LinkGroup>
      <SideMenu.Bottom   >
        <SideMenu.Link href="/logout" icon="LogOut" className="-scale-x-100 block" />
      </SideMenu.Bottom>
    </SideMenu.Root>
  </>
)});

export { CandidateSideMenu };
