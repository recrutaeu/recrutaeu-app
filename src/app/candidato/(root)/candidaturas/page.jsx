'use client';

import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Application } from './Application';
import { InformationApplication } from './InformationApplication';
import { Card } from '@/components/shared/Card';
import { NumberPages } from '@/components/shared/NumberPages';
import { Popup } from '@/components/shared/Popup';
import { Title } from '@/components/shared/Title';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { commons } from '@/locales';

const styles = {
  default: {
    card: {
      [themes.DEFAULT]: 'sm:bg-neutral-0',
      [themes.DARK]: 'sm:bg-neutral-90',
      [themes.LIGHT]: 'sm:bg-neutral-0',
    },
  },
};

const appli = {
  titulo: 'Teste',
  vaga: 'TESTE',
  cidade: 'São',
  estado: 'Testezih',
  remuneracao: '545454',
  contrato: 'clt',
};

const Applications = ({ variant = 'default' }) => {
  const { theme } = useTheme();
  const style = styles[variant];

  const [isApplicationOpen, setisApplicationOpen] = useState(false);
  const [selectedApplication, setselectedApplication] = useState(undefined);

  return (
    <>
      <Title className="text-2xl sm:text-3xl px-5" variant="inverse">
        {commons.applications.titlePage}
      </Title>
      <div className="flex flex-col my-5 sm:my-10 lg:flex-row gap-4 w-full max-h-auto h-[calc(100dvh)] lg:justify-center overflow-auto px-5">
        <Card
          className={twMerge(
            'flex flex-col lg:w-1/3 lg:min-w-[500px] h-full bg-neutral-120 p-0 sm:p-7',
            style.card[theme],
          )}
        >
          <div className="sm:overflow-auto no-scrollbar h-auto">
            {/* {vacancies.map((vacancy) => (
              <Job
                key={vacancy.id}
                vacancy={vacancy}
                onClick={(vacancy) => {
                  setselectedApplication(vacancy);
                  setisApplicationOpen(true);
                }}
              />
            ))} */}
            <Application
              key={1}
              application={appli}
              onClick={(appli) => {
                setselectedApplication(appli);
                setisApplicationOpen(true);
              }}
            />
          </div>

          <NumberPages currentPage={1} totalPage={1} />
        </Card>

        <Card className="lg:flex flex-col p-8 lg:w-2/3 hidden">
          <InformationApplication application={selectedApplication} />
        </Card>
      </div>
      <Popup
        isOpen={isApplicationOpen}
        setIsOpen={setisApplicationOpen}
        className="lg:hidden"
        title={commons.jobs.informationJob.title}
      >
        <InformationApplication application={selectedApplication} />
      </Popup>
    </>
  );
};

export default Applications;
