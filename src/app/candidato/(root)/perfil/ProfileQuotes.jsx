'use client';

import { LuPencil } from 'react-icons/lu';
import { twMerge } from 'tailwind-merge';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { Quote } from '@/components/shared/Quote';
import { Title } from '@/components/shared/Title';
import { withTheme, themes } from '@/contexts/ThemeContext';

const ProfileQuotes = withTheme(({ items, theme, onEdit, variant = 'default' }) => {
  const styles = {
    default: {
      text: {
        [themes.DEFAULT]: 'text-neutral-90',
        [themes.DARK]: 'text-neutral-90 md:text-neutral-0',
        [themes.LIGHT]: 'text-neutral-0 md:text-neutral-90',
      },
      icon: {
        [themes.DEFAULT]: 'text-primary-90',
        [themes.DARK]: 'text-neutral-90 md:text-neutral-0',
        [themes.LIGHT]: 'text-neutral-0 md:text-neutral-90',
      },
    },
  };

  const style = styles[variant];

  if (items.length < 1)
    return <p className={twMerge('text-sm mb-3 mt-1', style.text[theme])}>Dados não informados</p>;


  
  return items.map((i) => (
    <Quote key={i} variant="bgTransform">
      <div className="flex justify-between">

        <Title variant="bgTransform" className="text-sm">
          {i.nome}
        </Title>
        <ButtonLink onClick={onEdit}>
          <LuPencil size={20} className={style.icon[theme]} />
        </ButtonLink>
      </div>

      <p className={twMerge('text-sm', style.text[theme])}> {i.cargo || i.curso} </p>
      <p className={twMerge('my-3 text-sm', style.text[theme])}> {i.descricao} </p>
      <p className={twMerge('text-sm', style.text[theme])}>
        {i.dataInicial} a {i.dataFinal}
      </p>
    </Quote>
  ));
});

export { ProfileQuotes };
