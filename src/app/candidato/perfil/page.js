'use client';

import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { CandidateSideMenu } from '@/components/candidate/Menu';
import { AuthNavbar } from '@/components/shared/AuthNavbar';
import { ButtonContrast } from '@/components/shared/ButtonContrast';
import { ButtonFontZoom } from '@/components/shared/ButtonFontZoom';
import { Card } from '@/components/shared/Card';
import { Quote } from '@/components/shared/Quote';
import { Title } from '@/components/shared/Title';
import { themes, withTheme } from '@/contexts/ThemeContext';

const Profile = withTheme(({ theme, variant = 'default' }) => {
  const styles = {
    default: {
      background: {
        [themes.DEFAULT]: 'bg-neutral-30',
        [themes.DARK]: 'bg-neutral-0',
        [themes.LIGHT]: 'bg-neutral-90',
      },
      text: {
        [themes.DEFAULT]: 'text-neutral-90',
        [themes.DARK]: 'text-neutral-0',
        [themes.LIGHT]: 'text-neutral-90',
      },
      icon: {
        [themes.DEFAULT]: 'text-primary-90',
        [themes.DARK]: 'text-neutral-0',
        [themes.LIGHT]: 'text-neutral-90',
      },
      image: {
        [themes.DEFAULT]: 'grayscale-0 border-primary-90',
        [themes.DARK]: 'grayscale border-neutral-0',
        [themes.LIGHT]: 'grayscale border-neutral-90',
      },
      card: {
        [themes.DEFAULT]: 'lg:bg-neutral-0',
        [themes.DARK]: 'lg:bg-neutral-90',
        [themes.LIGHT]: 'lg:bg-neutral-0',
      },
    },
  };

  const style = styles[variant];

  return (
    <div className="flex flex-row">
      <CandidateSideMenu className="hidden lg:flex" />
      <div
        className={twMerge(
          'w-full h-full p-0 lg:px-7 lg:pb-14 lg:pt-0 lg:h-screen',
          style.background[theme],
        )}
      >
        <div className="hidden lg:flex lg:py-5 justify-end">
          <div className="flex">
            <ButtonContrast className="mr-5" />
            <ButtonFontZoom />
          </div>
        </div>
        <Title variant="inverse" className="hidden mb-3 lg:block lg:text-2xl lg:mb-5">
          Perfil
        </Title>
        <Card
          className={twMerge(
            'h-full rounded-none flex flex-col lg:overflow-auto lg:h-[85%] lg:p-8 lg:grid grid-cols-[1.3fr_1fr] lg:gap-10 grid-rows-none lg:rounded-3xl',
            style.card[theme],
          )}
        >
          <div className="block lg:hidden">
            <div>
              <AuthNavbar variant="inverse" />
            </div>
          </div>

          <div>
            <div className="flex flex-col justify-center items-center my-5 relative lg:flex-row lg:justify-between lg:mt-0">
              <Image
                src={'/assets/images/img_profile.png'}
                width={100}
                height={100}
                alt="profile"
                className={twMerge(
                  'rounded-full border-2 mb-2 lg:w-[150px] lg:mr-5',
                  style.image[theme],
                )}
              />

              {/* <Pencil size={30} className={twMerge('absolute right-0 top-0', style.icon[theme])}/> */}
              <div>
                <div className="flex flex-col items-center lg:items-start">
                  <Title variant="inverse2" className="text-base lg:text-xl">
                    Helena Berlone
                  </Title>
                  <Title variant="inverse2" className="text-sm lg:text-base">
                    UI Design
                  </Title>
                </div>

                <section className="my-6 self-start">
                  <Title variant="inverse2" className="text-base">
                    Descrição
                  </Title>
                  <p className={twMerge('text-sm', style.text[theme])}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut
                    commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec eratLorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut
                    commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat
                  </p>
                </section>
              </div>
            </div>

            <section className="mb-10 order-0">
              <Title variant="inverse2" className="text-base mb-2">
                Últimas Empresas
              </Title>

              <Quote className="mb-8">
                <Title variant="inverse2" className="text-sm">
                  Fiap LTDA
                </Title>
                <p className={twMerge('text-sm', style.text[theme])}>UI Design</p>
                <p className={twMerge('my-3 text-sm', style.text[theme])}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut
                  commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat
                </p>
                <p className={twMerge('text-sm', style.text[theme])}>20/04/2020 a 20/04/22</p>
              </Quote>

              <Quote className="mb-8">
                <Title variant="inverse2" className="text-sm">
                  Fiap LTDA
                </Title>
                <p className={twMerge('text-sm', style.text[theme])}>UI Design</p>
                <p className={twMerge('my-3 text-sm', style.text[theme])}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut
                  commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat
                </p>
                <p className={twMerge('text-sm', style.text[theme])}>20/04/2020 a 20/04/22</p>
              </Quote>
            </section>
          </div>

          <div>
            <section className="mb-10">
              <Title variant="inverse2" className="text-base mb-2">
                Escolaridade
              </Title>

              <Quote className="mb-8">
                <Title variant="inverse2" className="text-sm">
                  Faculdade Belas Artes
                </Title>
                <p className={twMerge('text-sm', style.text[theme])}>Design Gráfico</p>
                <p className={twMerge('my-3 text-sm', style.text[theme])}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut
                  commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat
                </p>
                <p className={twMerge('text-sm', style.text[theme])}>20/04/2020 a 20/04/22</p>
              </Quote>
            </section>

            <section className="mb-10">
              <Title variant="inverse2" className="text-base mb-2">
                Cursos e Idiomas
              </Title>

              <Quote className="mb-8">
                <Title variant="inverse2" className="text-sm">
                  Empodera
                </Title>
                <p className={twMerge('text-sm', style.text[theme])}></p>
                <p className={twMerge('my-3 text-sm', style.text[theme])}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut
                  commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat
                </p>
                <p className={twMerge('text-sm', style.text[theme])}>20/04/2020 a 20/04/22</p>
              </Quote>

              <Quote className="mb-8">
                <Title variant="inverse2" className="text-sm">
                  Cultura Inglesa
                </Title>
                <p className={twMerge('text-sm', style.text[theme])}>Ingles Intermediario</p>
                <p className={twMerge('my-3 text-sm', style.text[theme])}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut
                  commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat
                </p>
                <p className={twMerge('text-sm', style.text[theme])}>20/04/2020 a 20/04/22</p>
              </Quote>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
});

export default withTheme(Profile);
