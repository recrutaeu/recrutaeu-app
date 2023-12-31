'use client';

import { LuPencil } from 'react-icons/lu';
import { twMerge } from 'tailwind-merge';
import { ButtonIcon } from '@/components/shared/ButtonIcon';
import { Title } from '@/components/shared/Title';
import { themes, withTheme } from '@/contexts/ThemeContext';

const DescriptionSection = withTheme(({ userData, theme, variant = 'default', onEdit }) => {
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

  return (
    <section className="my-6 self-start">
      <div className="flex justify-between">
        <Title variant="bgTransform" className="text-base  mb-2">
          Descrição
        </Title>
        <ButtonIcon onClick={onEdit}>
          <LuPencil size={20} className={style.icon[theme]} />
        </ButtonIcon>
      </div>

      <p className={twMerge('text-sm first-letter:Capitalize', style.text[theme])}>
        {userData?.summary || 'Adicione uma descrição'}
      </p>
    </section>
  );
});

export { DescriptionSection };
