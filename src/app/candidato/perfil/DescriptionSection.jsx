'use client';

import { twMerge } from 'tailwind-merge';
import { Title } from '@/components/shared/Title';
import { withTheme, themes } from '@/contexts/ThemeContext';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { LuPencil } from 'react-icons/lu';
import { useContext } from 'react';
import PopupContext from './PopupContext';

const DescriptionSection = withTheme(({ userData, theme, variant='default' }) => {
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

    return (
        <section className="my-6 self-start">
            <div className="flex justify-between">
              <Title variant="inverse2" className="text-base mb-2">
                  Descrição
              </Title>
              <ButtonLink onClick={togglePopup}>
                  <LuPencil size={20} className={style.icon[theme]} />
              </ButtonLink>
            </div>

            <p className={twMerge('text-sm', style.text[theme])}>
            {userData.summary ? userData.summary : 'Adicione uma descrição'}
            </p>
      </section>
    );

})

export { DescriptionSection }