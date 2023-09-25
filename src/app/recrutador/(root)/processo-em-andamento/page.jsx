'use client';
import { useState } from 'react';
import { GoAlertFill } from 'react-icons/go';
import { twMerge } from 'tailwind-merge';
import CardProcessContext from './CardProcessContext';
import ProcessPopup from './ProcessPopup';
import { ButtonLabel } from '@/components/shared/ButtonLabel';
import { Card } from '@/components/shared/Card';
import { NumberPages } from '@/components/shared/NumberPages';
import { Title } from '@/components/shared/Title';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { commons } from '@/locales';

const processJobs = [
  {
    candidate: 'Isabela da Silva',
    job: 'Desenvolvedor front-end',
    status: 'Teste',
  },
  {
    candidate: 'Isabela da Silva',
    job: 'Desenvolvedor front-end',
    status: 'Teste',
  },
  {
    candidate: 'Isabela da Silva',
    job: 'Desenvolvedor front-end',
    status: 'Teste',
  },
  {
    candidate: 'Isabela da Silva',
    job: 'Desenvolvedor front-end',
    status: 'Teste',
  },
  {
    candidate: 'Isabela da Silva',
    job: 'Desenvolvedor front-end',
    status: 'Teste',
  },
  {
    candidate: 'Isabela da Silva',
    job: 'Desenvolvedor front-end',
    status: 'Teste',
  },
  {
    candidate: 'Isabela da Silva',
    job: 'Desenvolvedor front-end',
    status: 'Teste',
  },
];

const styles = {
  default: {
    title: {
      [themes.DEFAULT]: 'text-neutral-90 font-semibold capitalize text-sm leading-6 lg:text-base ',
      [themes.DARK]: 'text-neutral-90 font-semibold capitalize text-sm leading-6 lg:text-base',
      [themes.LIGHT]: 'text-neutral-90 font-semibold capitalize text-sm leading-6 lg:text-base',
    },
    description: {
      [themes.DEFAULT]: 'text-neutral-90 font-ligth capitalize text-sm leading-6 lg:text-base',
      [themes.DARK]: 'text-neutral-90 font-ligth capitalize text-sm leading-6 lg:text-base',
      [themes.LIGHT]: 'text-neutral-90 font-ligth capitalize text-sm leading-6 lg:text-base',
    },
    card: {
      [themes.DEFAULT]: 'bg-neutral-0  ',
      [themes.DARK]: 'bg-neutral-0 border border-neutral-90',
      [themes.LIGHT]: 'bg-neutral-0 ',
    },
    backgroundAlert: {
      [themes.DEFAULT]: 'bg-primary-90 ',
      [themes.DARK]: 'bg-neutral-90',
      [themes.LIGHT]: 'bg-neutral-90 ',
    },
    contextAlert: {
      [themes.DEFAULT]: 'text-primary-40',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-0 ',
    },
  },
};

const JobProcess = () => {
  const { theme } = useTheme();
  const style = styles['default'];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ProcessPopup isOpen={isOpen} setIsOpen={setIsOpen} />

      <Title className="text-xl lg:text-3xl px-5 lg:px-7" variant="inverse">
        {commons.process.title}
      </Title>

      <div className="h-full overflow-hidden flex">
        <div className="h-full overflow-auto no-scrollbar w-full flex flex-col lg:gap-8 lg:w-1/2 lg:px-7 px-5 py-5 gap-5">
          {processJobs.map((item, id) => (
            <div
              key={id}
              className={twMerge(
                'w-full px-5 py-3 rounded-md flex flex-col gap-[0.5px]',
                style.card[theme],
              )}
            >
              <div className="flex gap-1 items-center">
                <p className={style.title[theme]}>candidato:</p>
                <p className={style.description[theme]}>{item.candidate}</p>
              </div>
              <div className="flex gap-1 items-center">
                <p className={style.title[theme]}>vaga:</p>
                <p className={style.description[theme]}>{item.candidate}</p>
              </div>
              <div className="flex gap-1 items-center">
                <p className={style.title[theme]}>Status da candidatura:</p>
                <p className={style.description[theme]}>{item.status}</p>
              </div>
              <div
                className={twMerge(
                  'flex gap-2 items-center   py-1 rounded-sm px-2',
                  style.backgroundAlert[theme],
                )}
              >
                <GoAlertFill className={style.contextAlert[theme]} />
                <p className={twMerge('text-sm', style.contextAlert[theme])}>
                  existe pendencias no processo
                </p>
              </div>
              <div className="w-full flex justify-star mt-2">
                <ButtonLabel
                  type="button"
                  className="text-sm"
                  variant="inverseSecundary"
                  onClick={() => {
                    setIsOpen(true);
                  }}
                >
                  visualizar candidatura
                </ButtonLabel>
              </div>
            </div>
          ))}
          <div className="w-full flex justify-center items-center pb-5">
            <NumberPages currentPage={1} totalPage={1} variant="inverse" />
          </div>
        </div>
        <div className="w-1/2 p-5 lg:flex h-full flex-col hidden">
          <Card className="h-full flex flex-col gap-4 ">
            <Title variant="inverseSecundary" className="text-xl lg:text-2xl">
              Etapas do Processo
            </Title>
            <div className="h-full w-full overflow-auto no-scrollbar flex flex-col gap-5">
              <CardProcessContext />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};
export default JobProcess;