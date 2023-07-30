import { themes, withTheme } from '@/contexts/ThemeContext';
import { LayoutDashboard, User2, Briefcase, ClipboardSignature, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';

const styles = {
  default: {
    div: {
      [themes.DEFAULT]: 'bg-primary-90',
      [themes.DARK]: 'bg-neutral-90',
      [themes.LIGHT]: 'bg-neutral-0',
    },
    icon: {
      [themes.DEFAULT]: 'text-neutral-0 hover:text-primary-40',
      [themes.DARK]: 'text-neutral-0 hover:text-neutral-40',
      [themes.LIGHT]: 'text-neutral-90 hover:text-neutral-40',
    }
  }
};

const menuIconSize = 32

const menu = {
  options: [
    {name: 'home', icon: <LayoutDashboard size={menuIconSize} />},
    {name: 'profile', icon: <User2 size={menuIconSize} />},
    {name: 'jobs', icon: <Briefcase size={menuIconSize} />},
    {name: 'applications', icon: <ClipboardSignature size={menuIconSize} />},
    {name: 'settings', icon: <Settings size={menuIconSize} />},
  ],
}

const Sidemenu = withTheme(({ theme, variant = 'default' }) => {
  const style = styles[variant];

  return (
    <nav className={`${style.div[theme]} p-[25px] w-[100px] h-screen flex flex-col items-center`}>
        <div className='pb-10'>logo</div>
        {menu.options.map((menu, key) => 
          <Link key={key} className={`${style.icon[theme]} mb-6`} href={menu}> {menu.icon} </Link>
        )}
        <button className='mt-auto'><LogOut size={menuIconSize} className={`${style.icon[theme]}`}/></button>
    </nav>
  );
});

export { Sidemenu };
