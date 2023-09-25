'use client';
import { useState } from 'react';
import { MdAddBox } from 'react-icons/md';
import { PiTrashSimpleFill } from 'react-icons/pi';
import { twMerge } from 'tailwind-merge';
import JobDetails from './JobDetails';
import { JobPoup } from './JobPoup';
import { JobTable } from './JobTable';
import { ButtonIcon } from '@/components/shared/ButtonIcon';
import { InputSearch } from '@/components/shared/InputSearch';
import { NumberPages } from '@/components/shared/NumberPages';
import { Title } from '@/components/shared/Title';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { recruiter } from '@/locales';

const jobs = [
  {
    company: 'Fiap',
    job: 'Desenvolvedor',
    sector: 'Tecnologia',
    city: 'São Paulo',
    state: 'São Paulo',
    remuneration: '5.000',
    contract: 'CLT',
    benefits: 'convenio médico',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    quantity: 4,
    publishedAt: '15/12/2023',
    expiresAt: '15/12/2023',
  },
  {
    job: 'nanana',
    sector: 'sadsafsdas',
    quantity: 4,
    publishedAt: '15/12/2023',
    expiresAt: '15/12/2023',
  },
  {
    job: 'nanana',
    sector: 'sadsafsdas',
    quantity: 4,
    publishedAt: '15/12/2023',
    expiresAt: '15/12/2023',
  },
  {
    job: 'nanana',
    sector: 'sadsafsdas',
    quantity: 4,
    publishedAt: '15/12/2023',
    expiresAt: '15/12/2023',
  },
  {
    job: 'nanana',
    sector: 'sadsafsdas',
    quantity: 4,
    publishedAt: '15/12/2023',
    expiresAt: '15/12/2023',
  },
  {
    job: 'nanana',
    sector: 'sadsafsdas',
    quantity: 4,
    publishedAt: '15/12/2023',
    expiresAt: '15/12/2023',
  },
  {
    job: 'nanana',
    sector: 'sadsafsdas',
    quantity: 4,
    publishedAt: '15/12/2023',
    expiresAt: '15/12/2023',
  },
  {
    job: 'nanana',
    sector: 'sadsafsdas',
    quantity: 4,
    publishedAt: '15/12/2023',
    expiresAt: '15/12/2023',
  },
  {
    company: 'Fiap',
    job: 'nanana',
    sector: 'sadsafsdas',
    quantity: 4,
    publishedAt: '15/12/2023',
    expiresAt: '15/12/2023',
  },
  {
    job: 'nanana',
    sector: 'sadsafsdas',
    quantity: 4,
    publishedAt: '15/12/2023',
    expiresAt: '15/12/2023',
  },
  {
    job: 'nanana',
    sector: 'sadsafsdas',
    quantity: 4,
    publishedAt: '15/12/2023',
    expiresAt: '15/12/2023',
  },
  {
    job: 'nanana',
    sector: 'sadsafsdas',
    quantity: 4,
    publishedAt: '15/12/2023',
    expiresAt: '15/12/2023',
  },
];

const styles = {
  default: {
    description: {
      [themes.DEFAULT]: 'text-neutral-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-0',
    },
  },
};

const Jobs = ({}) => {
  const { theme } = useTheme();
  const style = styles['default'];
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDetails, setIsOpenDetails] = useState(false);
  const [selectJob, setSelectJob] = useState(undefined);

  return (
    <div className="h-full lg:px-7 px-5 py-5">
      <JobPoup isOpen={isOpen} setIsOpen={setIsOpen} />
      <JobDetails isOpen={isOpenDetails} setIsOpen={setIsOpenDetails} job={selectJob} />

      <div>
        <Title className="text-xl lg:text-3xl" variant="inverse">
          {recruiter.jobs.title}
        </Title>
        <p
          className={twMerge(
            'w-full text-sm font-light mt-2 lg:text-base',
            style.description[theme],
          )}
        >
          {recruiter.jobs.description}
        </p>

        <div className="flex mt-4 mb-7 lg:w-1/2 w-full">
          <InputSearch variant="inverseSecundary" />
          <div className="ml-4 gap-2 flex">
            <ButtonIcon
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <MdAddBox className="w-6 h-6 lg:w-7 lg:h-7" />
            </ButtonIcon>
            <ButtonIcon disabled={true}>
              <PiTrashSimpleFill className="w-6 h-6 lg:w-7 lg:h-7" />
            </ButtonIcon>
          </div>
        </div>
      </div>
      <JobTable
        jobs={jobs}
        onDetails={(job) => {
          setIsOpenDetails(true);
          setSelectJob(job);
        }}
      />
      <div className="w-full flex justify-center items-center">
        <NumberPages currentPage={1} totalPage={10} variant="inverse" />
      </div>
    </div>
  );
};

export default Jobs;
