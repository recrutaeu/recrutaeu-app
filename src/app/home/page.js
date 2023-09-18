'use client';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { AuthNavbar } from '@/components/shared/AuthNavbar';
import { Container } from '@/components/shared/Container';
import { themes, withTheme } from '@/contexts/ThemeContext';
import { commons } from '@/locales';
import { AppNavbar } from '@/components/shared/AppNavbar';

const Home = withTheme(({ theme, variant = 'default' }) => {
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
      text: {
        [themes.DEFAULT]: 'text-neutral-10',
        [themes.DARK]: 'text-neutral-10',
        [themes.LIGHT]: 'text-neutral-90',
      },
      middleText: {
        [themes.DEFAULT]: 'text-primary-40',
        [themes.DARK]: 'text-neutral-60',
        [themes.LIGHT]: 'text-neutral-90',
      },
      image: {
        [themes.DEFAULT]: 'grayscale-0',
        [themes.DARK]: 'grayscale',
        [themes.LIGHT]: 'grayscale',
      },
    },
  };

  const style = styles[variant];

  return (
    <div
      className={twMerge(
        'overflow-auto w-screen h-screen px-8 py-10 items-center justify-between md:justify-normal md:px-12 md:py-12 flex flex-col',
        style.background[theme],
      )}
    >
      <Container className="relative lg:min-h-[900px]">
        <div className="grow flex w-full flex-col items-center lg:items-start lg:gap-3">
          <div className="w-full flex justify-between">
            <Image
              src={`/assets/images/${style.logo[theme]}.png`}
              width={140}
              height={140}
              alt="logo recrutaeu"
              className="hidden lg:block"
            />
            <div className="w-full flex flex-col items-end">
              <AuthNavbar variant="inverse" className="lg:w-[50%] w-full" />
            </div>
          </div>

          <Image
            src={`/assets/images/${style.logo[theme]}.png`}
            width={162}
            height={162}
            alt="logo recrutaeu"
            className="lg:hidden mt-10"
          />

          <div
            className={twMerge(
              'text-center mt-11 grow lg:text-left lg:w-1/2 lg:absolute lg:top-[20%]',
              style.text[theme],
            )}
          >
            <p className="text-xl">
              <strong>Seja bem-vindo</strong> a plataforma
              <strong className={twMerge(style.middleText[theme], 'leading-10')}>
                {' '}
                recrutaeu.{' '}
              </strong>
            </p>
            <p className="leading-10 text-xl">{commons.home.description.partTwo}</p>
          </div>

          <AppNavbar variant="inverse" className="lg:hidden"/>
        </div>
        <div className="hidden lg:flex lg:absolute z-10 top-[60%] left-0 flex-col w-full gap-3 ">
          <p className={twMerge('uppercase text-[92px] font-bold leading-none', style.text[theme])}>
            {commons.home.authenticity}
          </p>
          <p
            className={twMerge(
              'uppercase text-[92px] font-bold leading-none ml-[40%] mr-10',
              style.middleText[theme],
            )}
          >
            {commons.home.ease}
          </p>
          <p
            className={twMerge(
              'uppercase text-[92px] font-bold leading-none ml-[5%]',
              style.text[theme],
            )}
          >
            {commons.home.employability}
          </p>
        </div>
        <Image
          className={twMerge(
            'hidden lg:block rounded-tl-[100px] absolute top-1/4 right-0',
            style.image[theme],
          )}
          src={'/assets/images/photo_home.jpg'}
          width={350}
          height={350}
          alt="logo recrutaeu"
        />
      </Container>
    </div>
  );
});

export default withTheme(Home);
