'use client';

import { twMerge } from 'tailwind-merge';
import { Quote } from '@/components/shared/Quote';
import { Title } from '@/components/shared/Title';
import { LuPencil } from 'react-icons/lu';
import { withTheme, themes } from '@/contexts/ThemeContext';
import { ButtonLink } from '@/components/shared/ButtonLink';
import PopupContext from './PopupContext';
import { useContext } from 'react';

const ProfileQuotes = withTheme(({ items, theme, variant='default' }) => {
  const { togglePopup } = useContext(PopupContext)
  const styles = {
    default: {
      text: {
        [themes.DEFAULT]: 'text-neutral-90',
        [themes.DARK]: 'text-neutral-0',
        [themes.LIGHT]: 'text-neutral-90',
      },
      icon: {
        [themes.DEFAULT]: 'text-primary-90',
        [themes.DARK]: 'text-neutral-0',
        [themes.LIGHT]: 'text-neutral-90',
      }
    },
  };
    
  const style = styles[variant];

  if (items.length < 1)
    return (
      <p className={twMerge('text-sm mb-3 mt-1', style.text[theme])}>Dados não informados</p>
    );

  return items.map((i) => (
    <Quote className="mb-8 mt-3">

      <div className="flex justify-between">
        <Title variant="inverse2" className="text-sm"> {i.title} </Title>
        <ButtonLink onClick={togglePopup}> <LuPencil size={20} className={style.icon[theme]} /> </ButtonLink>
      </div>

      <p className={twMerge('text-sm', style.text[theme])}> {i.subtitle} </p>
      <p className={twMerge('my-3 text-sm', style.text[theme])}> {i.description} </p>
      <p className={twMerge('text-sm', style.text[theme])}> {i.start} a {i.end} </p>
            
    </Quote>
  ));
})

export { ProfileQuotes }