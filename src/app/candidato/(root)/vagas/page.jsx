'use client';

import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { InformationJob } from './InformationJob';
import { Job } from './Job';
import { Card } from '@/components/shared/Card';
import { Filter } from '@/components/shared/Filter';
import { InputSearch } from '@/components/shared/InputSearch';
import { NumberPages } from '@/components/shared/NumberPages';
import { Popup } from '@/components/shared/Popup';
import { Title } from '@/components/shared/Title';
import { themes, useTheme } from '@/contexts/ThemeContext';
import getData from '@/firebase/firestore/getData';
import { commons } from '@/locales';

const styles = {
  default: {
    descriptionFilter: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
  },
};

const Jobs = ({ variant = 'default' }) => {
  const { theme } = useTheme();
  const style = styles[variant];

  const [vacancies, setVacancies] = useState([]);
  const [isVacancyOpen, setIsVacancyOpen] = useState(false);
  const [selectedVacancy, setSelectedVacancy] = useState(undefined);

  const fetchVacancies = async () => {
    const { result, error } = await getData('vagas');
    const resultData = result?.docs?.map((doc) => doc.data());
    setVacancies(resultData);
  };

  React.useEffect(() => {
    fetchVacancies().then();
  }, [vacancies]);

  return (
    <>
      <Title className="text-3xl px-5" variant="inverse">
        {commons.jobs.titlePage}
      </Title>
      <div className="flex flex-col my-10 lg:flex-row gap-4 w-full h-full lg:justify-center overflow-auto px-5">
        <Card className="flex flex-col lg:w-1/3 lg:min-w-[500px] grow">
          <div className="flex">
            <InputSearch
              type="text"
              id="search"
              size={20}
              placeholder="pesquisar por vagas"
              className="w-full"
            />
            <Filter size={40} />
          </div>
          <p
            className={twMerge(
              'md:text-sm text-xs font-medium mt-3',
              style.descriptionFilter[theme],
            )}
          >
            {commons.jobs.numberJobs.replace('{amount}', vacancies.length)}
          </p>

          <div className="my-4 h-full">
            {vacancies.map((vacancy) => (
              <Job
                key={vacancy.id}
                vacancy={vacancy}
                onClick={(vacancy) => {
                  setSelectedVacancy(vacancy);
                  setIsVacancyOpen(true);
                }}
              />
            ))}
          </div>

          <NumberPages currentPage={1} totalPage={1} />
        </Card>

        <Card className="lg:flex flex-col p-8 lg:w-2/3 hidden">
          <InformationJob vacancy={selectedVacancy} />
        </Card>
      </div>
      <Popup
        isOpen={isVacancyOpen}
        setIsOpen={setIsVacancyOpen}
        className="lg:hidden"
        title={commons.jobs.informationJob.title}
      >
        <InformationJob vacancy={selectedVacancy} />
      </Popup>
    </>
  );
};

export default Jobs;
