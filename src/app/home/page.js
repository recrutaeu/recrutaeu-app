'use client';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { ButtonContrast } from '@/components/shared/ButtonContrast';
import { Navbar } from '@/components/shared/Navbar';
import { themes, withTheme } from '@/contexts/ThemeContext';
import { commons } from '@/locales';

const Home = withTheme(({ theme, variant = 'default' }) => {
  const styles = {
    default: {
      logo: {
        [themes.DEFAULT]: 'logo_default',
        [themes.DARK]: 'logo_white',
        [themes.LIGHT]: 'logo_black',
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
        'w-screen h-screen px-8 py-10 items-center justify-between md:justify-normal md:px-12 md:py-8 flex flex-col',
        style.background[theme],
      )}
    >
      <section className="flex justify-center lg:justify-between w-[100%]">
        <Image
          src={`assets/images/${style.logo[theme]}.svg`}
          width={142}
          height={142}
          alt="logo recrutaeu"
          className="self-start"
        />

        <div className="flex justify-between content-center items-center self-start">
          <div className="hidden lg:block lg:w-[520px] lg:mr-7 lg:self-start lg:relative lg:bottom-0 lg:px-0">
            <Navbar.Root>
              <Navbar.Link variant="inverse" link="/">
                {commons.navbar.home}
              </Navbar.Link>
              <Navbar.Link variant="inverse" link="/">
                {commons.navbar.candidate}
              </Navbar.Link>
              <Navbar.Link variant="inverse" link="/">
                {commons.navbar.company}
              </Navbar.Link>
            </Navbar.Root>
          </div>
          <div className="absolute right-5 lg:relative lg:right-0">
            <ButtonContrast variant="inverse"></ButtonContrast>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-between lg:justify-between lg:flex-row relative h-full">
        <p
          className={twMerge(
            'text-center mt-16 text-2xl lg:text-left md:text-2xl lg:mt-16',
            style.text[theme],
          )}
        >
          <b>Seja bem-vindo</b> a plataforma <b className={style.middleText[theme]}>recrutaeu. </b>
          Onde você candidato, consegue se candidatar a vagas exclusivas e direcionadas ao seu
          perfil. E você empresa, consegue gerenciar seus recrutadores, cadastrar vagas e passar
          feedbacks das candidaturas e muito mais.
        </p>

        <Image
          className={twMerge('hidden lg:block ml-16', style.image[theme])}
          src={'/assets/images/image_home.png'}
          width={320}
          height={200}
          alt="logo recrutaeu"
        />

        <div className="hidden lg:flex absolute bottom-0 flex-col w-[100%]">
          <p className={twMerge('uppercase text-[92px] font-bold leading-none', style.text[theme])}>
            AUTENTICIDADE
          </p>
          <p
            className={twMerge(
              'uppercase text-[92px] font-bold leading-none ml-[40%] mr-10',
              style.middleText[theme],
            )}
          >
            FACILIDADE
          </p>
          <p
            className={twMerge(
              'uppercase text-[92px] font-bold leading-none ml-[5%]',
              style.text[theme],
            )}
          >
            empregabilidade
          </p>
        </div>

        <div className="lg:hidden">
          <Navbar.Root>
            <Navbar.Link variant="inverse" link="/">
              {commons.navbar.home}
            </Navbar.Link>
            <Navbar.Link variant="inverse" link="/">
              {commons.navbar.candidate}
            </Navbar.Link>
            <Navbar.Link variant="inverse" link="/">
              {commons.navbar.company}
            </Navbar.Link>
          </Navbar.Root>
        </div>
      </section>
    </div>
  );
});

export default withTheme(Home);
