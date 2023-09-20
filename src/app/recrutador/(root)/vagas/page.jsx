'use client';
import { MdAddBox } from 'react-icons/md';
import { PiTrashSimpleFill } from 'react-icons/pi';
import { twMerge } from 'tailwind-merge';
import { JobTable } from './JobTable';
import { ButtonIcon } from '@/components/shared/ButtonIcon';
import { InputSearch } from '@/components/shared/InputSearch';
import { Title } from '@/components/shared/Title';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { recruiter } from '@/locales';

const jobs = [
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

  return (
    <>
      <div className="w-full">
        <Title className="text-3xl" variant="inverse">
          {recruiter.jobs.title}
        </Title>
        <p className={twMerge('mt-2 w-full', style.description[theme])}>
          {recruiter.jobs.description}
        </p>

        <div className="flex mt-4 mb-7 lg:w-1/2 w-full">
          <InputSearch variant="inverseSecundary" size={24} />
          <div className="ml-4 gap-3 flex">
            <ButtonIcon>
              <MdAddBox size={30} />
            </ButtonIcon>
            <ButtonIcon disabled={true}>
              <PiTrashSimpleFill size={30} />
            </ButtonIcon>
          </div>
        </div>
      </div>
      <JobTable jobs={jobs} />
    </>
  );
};

export default Jobs;
