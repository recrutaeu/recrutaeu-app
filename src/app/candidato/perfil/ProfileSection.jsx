'use client';

import { Title } from '@/components/shared/Title';
import { withTheme, themes } from '@/contexts/ThemeContext';
import { ProfileQuotes } from './ProfileQuotes';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { useContext } from 'react';
import PopupContext from './PopupContext';

const ProfileSection = withTheme(({ title, content }) => {
  const { togglePopup } = useContext(PopupContext)

    return (
        <section className="mb-10 flex flex-col">
          <Title variant="inverse2" className="text-base">
            {title}
          </Title>
          <ProfileQuotes items={content}/>
          <ButtonLink className="self-center" onClick={togglePopup}> Adicionar </ButtonLink>
        </section>
      );
})

export { ProfileSection }