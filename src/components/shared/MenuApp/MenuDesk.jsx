import { signOut, getAuth } from 'firebase/auth';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { LuLogOut } from 'react-icons/lu';
import { Menu } from '@/components/shared/Menu';
import { themes, useTheme } from '@/contexts/ThemeContext';

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

const MenuDesk = ({ variant = 'default', className, links }) => {
  const { theme } = useTheme();
  const pathname = usePathname();
  const style = styles[variant];

  const router = useRouter();

  async function signOutFunction() {
    const auth = getAuth();
    console.log("foi")
    signOut(auth)
      .then(() => {
        router.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Menu.Root className={className}>
        <Menu.Top>
          <Image
            src={`/assets/images/${style.logo[theme]}.png`}
            width={50}
            height={50}
            alt="logo recrutaeu"
          />
        </Menu.Top>
        <Menu.LinkGroup>
          {links.map(({ href, icon }) => (
            <Menu.Link key={href} href={href} icon={icon} active={pathname.includes(href)} />
          ))}
        </Menu.LinkGroup>
        <Menu.Bottom>
          <Menu.Link
            functionSignOut={signOutFunction}
            href="/candidato/login"
            icon={<LuLogOut size={28} />}
            className="-scale-x-100 block"
          />
        </Menu.Bottom>
      </Menu.Root>
    </>
  );
};

export { MenuDesk };
