'use client';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { InputSearch } from '@/components/shared/InputSearch';
import { NumberPages } from '@/components/shared/NumberPages';
import { Quote } from '@/components/shared/Quote';
import { Title } from '@/components/shared/Title';
import { useAuthContext } from '@/contexts/AuthContext';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { useFindAllInterviewsByCompanyId } from '@/firebase/firestore/queries';
import { commons } from '@/locales';

const weeks = [
  {
    candidate: 'Isabela',
    area: 'Tecnologia',
    sector: 'Tecnologia',
    date: '15/10/2023',
    hour: '10:00',
  },
  {
    candidate: 'Isabela',
    area: 'Tecnologia',
    sector: 'Tecnologia',
    date: '15/10/2023',
    hour: '10:00',
  },
  {
    candidate: 'Isabela',
    area: 'Tecnologia',
    sector: 'Tecnologia',
    date: '15/10/2023',
    hour: '10:00',
  },
];

const styles = {
  default: {
    title: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-0',
    },
    text: {
      [themes.DEFAULT]: 'text-neutral-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-0',
    },
  },
};

const WeeksSchedule = ({}) => {
  const { theme } = useTheme();
  const style = styles['default'];
  const [search, setSearch] = useState('');

  const { user } = useAuthContext();

  const { data: interviews } = useFindAllInterviewsByCompanyId({ id: user.id });

  const filteredScheduledInterviews =
    search !== ''
      ? interviews?.filter(
          (interview) =>
            interview.vacancy.title.toLowerCase().includes(search.toLowerCase()) ||
            interview.employee.toLowerCase().includes(search.toLowerCase()) ||
            interview.candidate.name.toLowerCase().includes(search.toLowerCase()),
        )
      : interviews;

  return (
    <div className="lg:px-7 h-full flex flex-col gap-7 overflow-auto">
      <div className="w-full flex flex-col gap-3 px-5">
        <Title className="text-xl lg:text-3xl" variant="inverse">
          {commons.weeksSchedule.title}
        </Title>

        <div className="flex lg:w-1/2 gap-1 mt-3">
          <InputSearch
            variant="inverseSecundary"
            placeholder="pesquisar por entrevista"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
      </div>

      <div className="h-full">
        <div className="h-full px-5 pb-5 flex flex-col gap-5 lg:gap-8 lg:w-1/2">
          {filteredScheduledInterviews?.length > 0 ? (
            <>
              {filteredScheduledInterviews?.map((item, id) => (
                <Quote key={id} variant="inverse">
                  <p className={twMerge('font-semibold text-base capitalize', style.title[theme])}>
                    {commons.weeksSchedule.description.title}
                  </p>
                  <div className="flex items-center gap-1">
                    <p
                      className={twMerge(
                        'font-semibold text-sm capitalize leading-6',
                        style.text[theme],
                      )}
                    >
                      {commons.weeksSchedule.description.candidate}
                    </p>
                    <p
                      className={twMerge(
                        'font-light text-sm capitalize leading-6',
                        style.text[theme],
                      )}
                    >
                      {item.candidate.name}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <p
                      className={twMerge(
                        'font-semibold text-sm capitalize leading-6',
                        style.text[theme],
                      )}
                    >
                      {commons.weeksSchedule.description.area}
                    </p>
                    <p
                      className={twMerge(
                        'font-light text-sm capitalize leading-6',
                        style.text[theme],
                      )}
                    >
                      {item.vacancy.title}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <p
                      className={twMerge(
                        'font-semibold text-sm first-letter:capitalize leading-6',
                        style.text[theme],
                      )}
                    >
                      Entrevista agenda com:
                    </p>
                    <p
                      className={twMerge(
                        'font-light text-sm capitalize leading-6',
                        style.text[theme],
                      )}
                    >
                      {item.employee}
                    </p>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex items-center gap-1">
                      <p
                        className={twMerge(
                          'font-semibold text-sm capitalize leading-6',
                          style.text[theme],
                        )}
                      >
                        {commons.weeksSchedule.description.date}
                      </p>
                      <p
                        className={twMerge(
                          'font-light text-sm capitalize leading-6',
                          style.text[theme],
                        )}
                      >
                        {item.date.toDate().toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <p
                        className={twMerge(
                          'font-semibold text-sm capitalize leading-6',
                          style.text[theme],
                        )}
                      >
                        {commons.weeksSchedule.description.hour}
                      </p>
                      <p
                        className={twMerge(
                          'font-light text-sm capitalize leading-6',
                          style.text[theme],
                        )}
                      >
                        {item.date.toDate().toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </Quote>
              ))}
              <div className="w-full flex justify-center items-center pb-5">
                <NumberPages currentPage={1} totalPage={1} variant="inverse" />
              </div>
            </>
          ) : (
            <p className={twMerge('text-center', style.text[theme])}>
              não foi encontrado nenhuma entrevista com esses parametros
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeeksSchedule;
