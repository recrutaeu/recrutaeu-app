'use client';

import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { LuAlertTriangle } from 'react-icons/lu';
import { twMerge } from 'tailwind-merge';
import { Title } from '@/components/shared/Title';
import { themes, withTheme } from '@/contexts/ThemeContext';
import { useFindAllInterviews } from '@/firebase/firestore/queries';

const AlertHome = withTheme(({ user = {}, theme, variant = 'default', title }) => {
  const [interviewsSearched, setInterviewsSearched] = useState([]);
  const [nextInterview, setNextInterview] = useState(null);

  const { data: interviews } = useFindAllInterviews({});

  useEffect(() => {
    if (interviews) {
      setInterviewsSearched(interviews);
    }
  }, [interviews]);

  useEffect(() => {
    if (interviewsSearched.length > 1) {
      const upcomingInterviews = interviewsSearched.filter((interview) => {
        return interview.candidate.id === user.id;
      });

      upcomingInterviews.sort((a, b) => a.date - b.date);

      if (upcomingInterviews.length > 0) {
        setNextInterview(upcomingInterviews[0]);
      } else {
        setNextInterview(null);
      }
    }
  }, [interviewsSearched, user.id]);

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
        {nextInterview
          ? `Você tem uma entrevista marcada, para dia ${format(
              nextInterview.date.toDate(),
              'dd/MM/yyyy HH:mm',
            )} com
        ${nextInterview.employee} para a vaga de ${nextInterview.vacancy.title}. Acesse o link ${
          nextInterview.link
        }`
          : 'Você ainda não possui entrevistas marcadas.'}
      </p>
    </div>
  );
});

export { AlertHome };
