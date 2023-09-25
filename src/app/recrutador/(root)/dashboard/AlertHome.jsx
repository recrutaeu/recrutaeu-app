'use client';

import { LuAlertTriangle } from 'react-icons/lu';
import { twMerge } from 'tailwind-merge';
import { Title } from '@/components/shared/Title';
import { withTheme, themes } from '@/contexts/ThemeContext';

const AlertHome = withTheme(({ theme, variant = 'default', title }) => {
  const styles = {
    default: {
      text: {
        [themes.DEFAULT]: 'text-neutral-0 md:text-neutral-0',
        [themes.DARK]: 'text-neutral-90 md:text-neutral-0',
        [themes.LIGHT]: 'text-neutral-0 md:text-neutral-90',
      },
      title: {
        [themes.DEFAULT]: 'text-primary-40',
        [themes.DARK]: 'text-neutral-90 md:text-neutral-0',
        [themes.LIGHT]: 'text-neutral-0 md:text-neutral-90',
      },
    },
  };

  const style = styles[variant];

  return (
    <div className="flex flex-col justify-center h-full">
      <Title
        variant="inverseFormSecondary"
        className={twMerge('text-xl flex gap-2 mb-3', style.title[theme])}
      >
        {' '}
        <LuAlertTriangle size={26} />
        {title}
      </Title>
      <p className={twMerge(style.text[theme])}>
        Você tem uma entrevista marca, para segunda-feira 08/05/2023 as 10:00 horas da manhã com o candidato Pedro Fernandes. Acesse o link http://fiap.com.br/
      </p>
    </div>
  );
});

export { AlertHome };
