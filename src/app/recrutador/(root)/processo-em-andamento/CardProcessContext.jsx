'use client';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import CardProcess from './CardProcess';
import InterviewPopup from './InterviewPopup';
import { ButtonLabel } from '@/components/shared/ButtonLabel';
import { DataPicker } from '@/components/shared/DataPicker';
import { Select } from '@/components/shared/Select';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    cardDescription: {
      [themes.DEFAULT]: 'text-neutral-90 ',
      [themes.DARK]: 'text-neutral-90 ',
      [themes.LIGHT]: 'text-neutral-0 ',
    },
  },
};

const CardProcessContext = ({}) => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const style = styles['default'];

  return (
    <>
      <InterviewPopup isOpen={isOpen} setIsOpen={setIsOpen} />

      <CardProcess title="Inscrição">
        <div className="flex gap-2 text-sm leading-7">
          <p className={twMerge('font-medium', style.cardDescription[theme])}>Candidatura:</p>
          <p className={twMerge('font-ligth', style.cardDescription[theme])}>20/10/2012</p>
        </div>
      </CardProcess>
      <CardProcess title="Teste">
        <ButtonLabel
          className="mt-1 text-sm"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Adicionar informações
        </ButtonLabel>
      </CardProcess>
      <CardProcess title="Teste" onEdit className="flex flex-col gap-3">
        <div className="flex gap-2 text-sm leading-7 w-full">
          <p className={twMerge('font-medium', style.cardDescription[theme])}>Link:</p>
          <p className={twMerge('font-ligth', style.cardDescription[theme])}>
            https://www.fiap.com.br/
          </p>
        </div>
        <div className="flex gap-2 text-sm pb-3">
          <DataPicker label="Prazo:" variant="inverseTertiary" className="lg:text-sm font-medium" />
        </div>
        <Select
          options={[
            { value: 'asdasdasd', label: 'Aprovado' },
            { value: 'asdasdasd', label: 'Reprovado' },
          ]}
          titleLabel="Status:"
          onChange={console.log}
          variant="inverse"
        />
      </CardProcess>
      <CardProcess title="Entrevista">
        <ButtonLabel className="mt-1 text-sm">adicionar informações</ButtonLabel>
      </CardProcess>
      <CardProcess title="Entrevista" onEdit>
        <div className="flex gap-2 text-sm leading-7">
          <p className={twMerge('font-medium', style.cardDescription[theme])}>Responsável:</p>
          <p className={twMerge('font-ligth', style.cardDescription[theme])}>Suelen Martins</p>
        </div>
        <div className="flex gap-2 text-sm leading-7">
          <p className={twMerge('font-medium', style.cardDescription[theme])}>Link:</p>
          <p className={twMerge('font-ligth', style.cardDescription[theme])}>
            https://www.fiap.com.br/
          </p>
        </div>
        <DataPicker label="Prazo" variant="inverseTertiary" className="lg:text-sm font-medium" />
        <Select
          options={[
            { value: 'asdasdasd', label: 'Aprovado' },
            { value: 'asdasdasd', label: 'Reprovado' },
          ]}
          titleLabel="Status:"
          onChange={console.log}
          variant="inverse"
          className="pt-3"
        />
      </CardProcess>
      <CardProcess title="Feedback">
        <ButtonLabel className="mt-1 text-sm">adicionar informações</ButtonLabel>
      </CardProcess>
      <CardProcess title="Feedback" onEdit>
        <p className={twMerge('py-3', style.cardDescription[theme])}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </CardProcess>
    </>
  );
};

export default CardProcessContext;
