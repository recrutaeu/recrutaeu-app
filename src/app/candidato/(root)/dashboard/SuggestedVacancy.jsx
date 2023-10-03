'use client';

import { useEffect, useState } from 'react';
import { ShortVacancy } from './ShortVacancy';
import { ButtonLabel } from '@/components/shared/ButtonLabel';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { Title } from '@/components/shared/Title';
import { withTheme } from '@/contexts/ThemeContext';
import { useFindAllApplicationByUserId, useFindAllVacancies } from '@/firebase/firestore/queries';

const SuggestedVacancy = withTheme(({ user = {} }) => {
  const [vacanciesSearched, setVacanciesSearched] = useState([]);
  const [vacanciesTop, setVacanciesTop] = useState([]);

  const { data: vacancies } = useFindAllVacancies({});

  useEffect(() => {
    if (vacancies) {
      setVacanciesSearched(vacancies);
    }
  }, [vacancies]);

  useEffect(() => {
    const top3RecentVacancies = vacanciesSearched.sort((a, b) => b.startAt - a.startAt).slice(0, 3);

    setVacanciesTop(top3RecentVacancies);
  }, [vacanciesSearched]);

  return (
    <div className="flex flex-col px-7 lg:px-0">
      <div>
        <Title variant="bgTransformTertiary" className="text-xl mb-5">
          Vagas sugeridas
        </Title>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {vacanciesTop.map((vac) => {
            return <ShortVacancy vacancy={vac} key={vac.id} />;
          })}
        </div>
        <div className="hidden w-full items-center lg:flex justify-center py-6">
          <ButtonLabel href="/candidato/vagas" type="button">
            veja mais
          </ButtonLabel>
        </div>
        <div className="w-full items-center flex justify-center py-4 lg:hidden">
          <ButtonLabel variant="inverseTertiary" type="button">
            veja mais
          </ButtonLabel>
        </div>
      </div>
    </div>
  );
});

export { SuggestedVacancy };
