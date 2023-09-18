'use client';

import { Fragment } from 'react';
import { twMerge } from 'tailwind-merge';
import { InformationJob } from './InformationJob';
import { Job } from './Job';
import { Card } from '@/components/shared/Card';
import { Filter } from '@/components/shared/Filter';
import { InputSearch } from '@/components/shared/InputSearch';
import { NumberPages } from '@/components/shared/NumberPages';
import { Title } from '@/components/shared/Title';
import { themes, useTheme } from '@/contexts/ThemeContext';
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

  const repeatedJob = Array.from({ length: 4 }, (index) => (
    <Job
      key={index}
      title="Fiap"
      profession="design"
      city="São Paulo"
      state="SP"
      remuneration={5000}
      contract="clt"
    />
  ));

  return (
    <>
      <Title className="text-3xl" variant="inverse">
        {commons.jobs.titlePage}
      </Title>
      <div className="flex flex-col my-10 lg:flex-row gap-4 w-full h-full lg:justify-center overflow-hidden">
        <Card className="flex flex-col lg:w-1/3 lg:min-w-[500px] h-full">
          <div className="flex">
            <InputSearch
              type="text"
              id="search"
              placeholder="pesquisar por vagas"
              className="w-full"
            />
            <Filter />
          </div>
          <p
            className={twMerge(
              'md:text-sm text-xs font-medium mt-3',
              style.descriptionFilter[theme],
            )}
          >
            {commons.jobs.numberJobs}
          </p>

          <div className="overflow-auto no-scrollbar my-4 h-full">
            {repeatedJob?.map((div, index) => (
              <Fragment key={index}>{div}</Fragment>
            ))}
          </div>

          <NumberPages currentPage={3} totalPage={10} />
        </Card>

        <Card className="lg:flex flex-col p-8 lg:w-2/3 hidden">
          <InformationJob
            company="Fiap Ltda"
            job="design"
            city="São Paulo"
            state="SP"
            remuneration={5000}
            contract="clt"
            differential="Excel, Javascript, Java, React"
            descriptionJob="Mussum Ipsum, cacilds vidis litro abertis.  Cevadis im ampola pa arma uma pindureta. Quem manda na minha terra sou euzis! Ô gente finis, pode baixar uma ampolis que hoje é sexta-feris! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Mussum Ipsum, cacilds vidis litro abertis.  Cevadis im ampola pa arma uma pindureta. Quem manda na minha terra sou euzis! Ô gente finis, pode baixar uma ampolis que hoje é sexta-feris! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Mussum Ipsum, cacilds vidis litro abertis.  Cevadis im ampola pa arma uma pindureta. Quem manda na minha terra sou euzis! Ô gente finis, pode baixar uma ampolis que hoje é sexta-feris! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Mussum Ipsum, cacilds vidis litro abertis.  Cevadis im ampola pa arma uma pindureta. Quem manda na minha terra sou euzis! Ô gente finis, pode baixar uma ampolis que hoje é sexta-feris! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Mussum Ipsum, cacilds vidis litro abertis.  Cevadis im ampola pa arma uma pindureta. Quem manda na minha terra sou euzis! Ô gente finis, pode baixar uma ampolis que hoje é sexta-feris! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Mussum Ipsum, cacilds vidis litro abertis.  Cevadis im ampola pa arma uma pindureta. Quem manda na minha terra sou euzis! Ô gente finis, pode baixar uma ampolis que hoje é sexta-feris! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Mussum Ipsum, cacilds vidis litro abertis.  Cevadis im ampola pa arma uma pindureta. Quem manda na minha terra sou euzis! Ô gente finis, pode baixar uma ampolis que hoje é sexta-feris! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Mussum Ipsum, cacilds vidis litro abertis.  Cevadis im ampola pa arma uma pindureta. Quem manda na minha terra sou euzis! Ô gente finis, pode baixar uma ampolis que hoje é sexta-feris! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Mussum Ipsum, cacilds vidis litro abertis.  Cevadis im ampola pa arma uma pindureta. Quem manda na minha terra sou euzis! Ô gente finis, pode baixar uma ampolis que hoje é sexta-feris! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per."
          />
        </Card>
      </div>
    </>
  );
};

export default Jobs;
