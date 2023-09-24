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
import { useAuthContext } from '@/contexts/AuthContext';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { useFindAllVacanciesByUserId } from '@/firebase/firestore/getData';
import { recruiter } from '@/locales';

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
  const [vacancy, setSelectVacancy] = useState(undefined);
  const { user } = useAuthContext();

  const { data: vacancies } = useFindAllVacanciesByUserId({ userId: user.id });

  return (
    <div className="h-full lg:px-7 px-5 py-5">
      <JobPoup isOpen={isOpen} setIsOpen={setIsOpen} />
      <JobDetails isOpen={isOpenDetails} setIsOpen={setIsOpenDetails} vacancy={vacancy} />

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
        vacancies={vacancies}
        onDetails={(vacancy) => {
          setIsOpenDetails(true);
          setSelectVacancy(vacancy);
        }}
      />
      <div className="w-full flex justify-center items-center">
        <NumberPages currentPage={1} totalPage={10} variant="inverse" />
      </div>
    </div>
  );
};

export default Jobs;
