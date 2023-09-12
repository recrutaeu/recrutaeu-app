'use client';

import { CandidateSideMenu } from '@/components/candidate/Menu';
import { AccessibilityNavbar } from '@/components/shared/AccessibilityNavbar';
import { Card } from '@/components/shared/Card';
import { InputSearch } from '@/components/shared/InputSearch';
import { NumberPages } from '@/components/shared/NumberPages';
import { Title } from '@/components/shared/Title';
import { themes, withTheme } from '@/contexts/ThemeContext';
import { Fragment } from 'react';
import { LuSearch } from 'react-icons/lu';
import { MdOutlineFilterList } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';
import { InformationJob } from './InformationJob';
import { Job } from './Job';

const Jobs = withTheme(({ theme, variant = 'default' }) => {
  const styles = {
    default: {
      logo: {
        [themes.DEFAULT]: 'logo_default',
        [themes.DARK]: 'logo_white',
        [themes.LIGHT]: 'logo_black',
      },
      background: {
        [themes.DEFAULT]: 'bg-primary-90',
        [themes.DARK]: 'bg-neutral-90',
        [themes.LIGHT]: 'bg-neutral-0',
      },
      text: {
        [themes.DEFAULT]: 'text-neutral-10',
        [themes.DARK]: 'text-neutral-10',
        [themes.LIGHT]: 'text-neutral-90',
      },
      middleText: {
        [themes.DEFAULT]: 'text-primary-40',
        [themes.DARK]: 'text-neutral-60',
        [themes.LIGHT]: 'text-neutral-90',
      },
      image: {
        [themes.DEFAULT]: 'grayscale-0',
        [themes.DARK]: 'grayscale',
        [themes.LIGHT]: 'grayscale',
      },
    },
  };

  // const style = styles[variant];

  const repeatedJob = Array.from({ length: 4 }, () => (
    <Job
      title="Fiap"
      profession="design"
      city="São Paulo"
      state="SP"
      remuneration={5000}
      contract="clt"
    />
  ));

  return (
    <div className={twMerge('w-full h-screen flex bg-neutral-10')}>
      <CandidateSideMenu />
      <div className="w-full flex flex-col px-7">
        <AccessibilityNavbar className="w-full flex items-center justify-end py-4" />
        <Title className="text-3xl" variant="inverse">
          Vagas
        </Title>
        <div className="flex flex-col my-10 lg:flex-row gap-4 w-full h-full lg:justify-center overflow-hidden">
          <Card className="flex flex-col lg:w-1/3 lg:min-w-[500px] h-full">
            <div className="flex">
              <InputSearch
                type="text"
                id="search"
                placeholder="pesquisar por vagas"
                className="w-full"
              >
                <LuSearch size={20} className="text-primary-90" />
              </InputSearch>
              <MdOutlineFilterList size={40} className="text-primary-90 ml-2" />
            </div>
            <p className="text-primary-90 text-sm font-medium mt-3">
              Foram encontradas 10 vagas nessa categoria
            </p>

            <div className="overflow-auto my-4 h-full">
              {repeatedJob?.map((div, index) => (
                <Fragment key={index}>{div}</Fragment>
              ))}
            </div>

            <NumberPages currentPage={3} totalPage={10} />
          </Card>
          <Card className="lg:flex flex-col p-8 lg:w-2/3 hidden overflow-auto">
            <InformationJob />
          </Card>
        </div>
      </div>
    </div>
  );
});

export default Jobs;
