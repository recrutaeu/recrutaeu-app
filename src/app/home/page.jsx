'use client';
import { twMerge } from 'tailwind-merge';
import { LogoDesk, LogoMobile } from './Logo';
import { Midle, MidleDescription } from './Midle';
import { NavbarDesk, NavbarMobile } from './Navbar';
import { PhotoHome } from './PhotoHome';
import { Container } from '@/components/shared/Container';
import { themes, useTheme } from '@/contexts/ThemeContext';

const Home = ({ variant = 'default' }) => {
  const styles = {
    default: {
      logo: {
        [themes.DEFAULT]: 'logo_recrutaeu_green',
        [themes.DARK]: 'logo_recrutaeu_white',
        [themes.LIGHT]: 'logo_recrutaeu_black',
      },
      background: {
        [themes.DEFAULT]: 'bg-primary-90',
        [themes.DARK]: 'bg-neutral-90',
        [themes.LIGHT]: 'bg-neutral-0',
      },
    },
  };

  const { theme } = useTheme();
  const style = styles[variant];

  return (
    <div
      className={twMerge(
        'overflow-auto w-screen h-[calc(100dvh)] px-8 py-10 items-center justify-between md:justify-normal md:px-12 md:py-12 flex flex-col',
        style.background[theme],
      )}
    >
      <Container className="relative">
        <div className="grow flex w-full flex-col items-center lg:items-start lg:gap-3">
          <div className="w-full flex justify-between">
            <LogoDesk />
            <div className="w-full flex flex-col items-end">
              <NavbarDesk />
            </div>
          </div>

          <LogoMobile />

          <MidleDescription />

          <NavbarMobile />
        </div>
        <div className="hidden lg:flex lg:absolute z-10 top-[60%] left-0 flex-col w-full gap-3 ">
          <Midle />
        </div>
        <PhotoHome />
      </Container>
    </div>
  );
};

export default Home;
