'use client';
import { ButtonLabel } from '@/components/shared/ButtonLabel';
import { Card } from '@/components/shared/Card';
import { NumberPages } from '@/components/shared/NumberPages';
import { Title } from '@/components/shared/Title';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { commons } from '@/locales';
import { GoAlertFill } from 'react-icons/go';
import { MdEdit } from 'react-icons/md';
import CardProcess from './CardProcess';
import { Select } from '@/components/shared/Select';

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
    candidateTitle: {
      [themes.DEFAULT]: 'text-neutral-90 font-semibold capitalize text-sm leading-6 lg:text-base ',
      [themes.DARK]: 'text-neutral-90 font-bold  text-base',
      [themes.LIGHT]: 'text-neutral-0 font-bold  text-base',
    },
    title: {
      [themes.DEFAULT]: 'text-neutral-90 font-semibold capitalize text-sm leading-6 lg:text-base ',
      [themes.DARK]: 'text-neutral-90 font-bold  text-base',
      [themes.LIGHT]: 'text-neutral-0 font-bold  text-base',
    },
    description: {
      [themes.DEFAULT]: 'text-neutral-90 font-ligth capitalize text-sm leading-6 lg:text-base',
      [themes.DARK]: 'text-neutral-90 font-ligth capitalize text-sm leading-6 lg:text-base',
      [themes.LIGHT]: 'text-neutral-0 font-ligth capitalize text-sm leading-6 lg:text-base',
    },
  },
};

const JobProcess = () => {
  const { theme } = useTheme();
  const style = styles['default'];

  return (
    <>
      <Title className="text-xl lg:text-3xl px-5 lg:px-7" variant="inverse">
        {commons.process.title}
      </Title>

      <div className="h-full overflow-hidden flex">
        <div className="h-full overflow-auto no-scrollbar flex flex-col lg:gap-8 lg:w-1/2 lg:px-7 px-5 py-5 gap-5">
          {processJobs.map((item) => (
            <div className="w-full bg-neutral-0 px-5 py-3 rounded-md flex flex-col gap-[0.5px] ">
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
              <div className="flex gap-2 items-center bg-primary-90 py-1 rounded-sm px-2">
                <GoAlertFill className="text-primary-40" />
                <p className="text-sm text-primary-40">existe pendencias no processo</p>
              </div>
              <div className="w-full flex justify-star mt-2">
                <ButtonLabel className="text-sm">visualizar candidatura</ButtonLabel>
              </div>
            </div>
          ))}
          <div className="w-full flex justify-center items-center pb-5">
            <NumberPages currentPage={1} totalPage={1} variant="inverse" />
          </div>
        </div>
        <div className="w-1/2 p-5 lg:flex h-full flex-col hidden">
          <Card className="h-full flex flex-col gap-4 bg-neutral-10 border-2 border-neutral-0">
            <Title variant="inverse" className="text-xl lg:text-2xl">
              Etapas do Processo
            </Title>
            <div className="h-full w-full overflow-auto no-scrollbar flex flex-col gap-5">
              <CardProcess title="Inscrição">
                <div className="flex gap-2 text-sm">
                  <p className="font-medium">Candidatura:</p>
                  <p className="font-ligth">20/10/2012</p>
                </div>
              </CardProcess>
              <CardProcess title="Teste">
                <ButtonLabel className="mt-1 text-sm">Adicionar informações</ButtonLabel>
              </CardProcess>
              <CardProcess title="Teste" onEdit className=" gap-5">
                <div className="flex gap-2 text-sm">
                  <p className="font-medium">Link:</p>
                  <p className="font-ligth">https://www.fiap.com.br/</p>
                </div>
                <div className="flex gap-2 text-sm">
                  <p className="font-medium">Data:</p>
                  <input type="date" className="outline-none cursor-pointer" />
                </div>
                <div className="flex gap-2 text-sm">
                  <p className="font-medium">Status:</p>
                  <Select
                    options={[
                      { value: 'asdasdasd', label: 'Aprovado' },
                      { value: 'asdasdasd', label: 'Reprovado' },
                    ]}
                    titleLabel="status"
                    onChange={console.log}
                    variant="inverse"
                  />
                </div>
              </CardProcess>
              <CardProcess title="Entrevista">
                <ButtonLabel className="mt-1 text-sm">adicionar informações</ButtonLabel>
              </CardProcess>
              <CardProcess title="Entrevista" onEdit>
                <div className="flex gap-2 text-sm">
                  <p className="font-medium">Responsável:</p>
                  <p className="font-ligth">Suelen Martins</p>
                </div>
                <div className="flex gap-2 text-sm">
                  <p className="font-medium">Link:</p>
                  <p className="font-ligth">https://www.fiap.com.br/</p>
                </div>
                <div className="flex gap-2 text-sm">
                  <p className="font-medium">Data:</p>
                  <input type="date" />
                </div>
                <div className="flex gap-2 text-sm">
                  <p className="font-medium">Status:</p>
                  <Select
                    options={[
                      { value: 'asdasdasd', label: 'Aprovado' },
                      { value: 'asdasdasd', label: 'Reprovado' },
                    ]}
                  />
                </div>
              </CardProcess>
              <CardProcess title="Feedback">
                <ButtonLabel className="mt-1 text-sm">adicionar informações</ButtonLabel>
              </CardProcess>
              <CardProcess title="Feedback" onEdit>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut
                  commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat
                </p>
              </CardProcess>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};
export default JobProcess;
