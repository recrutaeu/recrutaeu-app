'use client';

import { LuPencil } from 'react-icons/lu';
import { twMerge } from 'tailwind-merge';
import { ButtonIcon } from '@/components/shared/ButtonIcon';
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

  if (items?.length < 1)
    return <p className={twMerge('text-sm mb-3 mt-1', style.text[theme])}>Dados não informados</p>;

  return items?.map((i) => (
    <Quote key={i} variant="bgTransform">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <Title variant="bgTransform" className="text-base font-medium first-letter:capitalize">
            {i.name}
          </Title>
          <ButtonIcon type="button" onClick={() => onEdit(i)}>
            <LuPencil size={20} className={style.icon[theme]} />
          </ButtonIcon>
        </div>

        <div className="flex flex-col gap-3">
          <p
            className={twMerge(
              'text-sm first-letter:capitalize font-ligth m-0 leading-none',
              style.text[theme],
            )}
          >
            {i.role || i.course || i.name}
          </p>
          <p
            className={twMerge(
              'my-3 text-sm font-ligth first-letter:capitalize m-0 leading-none',
              style.text[theme],
            )}
          >
            {i.description}
          </p>
          <p className={twMerge('text-sm font-ligth m-0 leading-none', style.text[theme])}>
            {i.startDate} a {i.endDate}
          </p>
        </div>
      </div>
    </Quote>
  ));
});

export { ProfileQuotes };
