'use client';
import { useState } from 'react';
import { MdAddBox } from 'react-icons/md';
import { PiTrashSimpleFill } from 'react-icons/pi';
import { twMerge } from 'tailwind-merge';
import { VacancyDetails } from './VacancyDetails';
import { VacancyPopup } from './VacancyPopup';
import { VacancyTable } from './VacancyTable';
import { ButtonIcon } from '@/components/shared/ButtonIcon';
import { InputSearch } from '@/components/shared/InputSearch';
import { NumberPages } from '@/components/shared/NumberPages';
import { Title } from '@/components/shared/Title';
import { useAuthContext } from '@/contexts/AuthContext';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { useDeleteVacancyByIds } from '@/firebase/firestore/mutations';
import { useFindAllVacanciesByUserId } from '@/firebase/firestore/queries';
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

const Vacancy = ({}) => {
  const { theme } = useTheme();
  const style = styles['default'];
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDetails, setIsOpenDetails] = useState(false);
  const [vacancy, setSelectVacancy] = useState(undefined);
  const { user } = useAuthContext();
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [search, setSearch] = useState('');

  const { data: vacancies } = useFindAllVacanciesByUserId({ userId: user.id });
  const { mutate: deleteSelectedVacancies } = useDeleteVacancyByIds();

  const filteredVacancies =
    search !== ''
      ? vacancies?.filter(
          (vacancy) =>
            vacancy.title.toLowerCase().includes(search.toLowerCase()) ||
            vacancy.sector.toLowerCase().includes(search.toLowerCase()),
        )
      : vacancies;

  return (
    <div className="h-full lg:px-7 px-5 py-5">
      <VacancyPopup isOpen={isOpen} setIsOpen={setIsOpen} />
      <VacancyDetails isOpen={isOpenDetails} setIsOpen={setIsOpenDetails} vacancy={vacancy} />

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
          <InputSearch
            variant="inverseSecundary"
            id="search"
            placeholder="pesquisar por vagas"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <div className="ml-4 gap-2 flex">
            <ButtonIcon
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <MdAddBox className="w-6 h-6 lg:w-7 lg:h-7" />
            </ButtonIcon>
            <ButtonIcon
              disabled={selectedRows.size === 0}
              onClick={() => {
                deleteSelectedVacancies([...selectedRows]);
                setSelectedRows(new Set());
              }}
            >
              <PiTrashSimpleFill className="w-6 h-6 lg:w-7 lg:h-7" />
            </ButtonIcon>
          </div>
        </div>
      </div>

      <VacancyTable
        vacancies={filteredVacancies}
        onDetails={(vacancy) => {
          setIsOpenDetails(true);
          setSelectVacancy(vacancy);
        }}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
      />

      <div className="w-full flex justify-center items-center">
        <NumberPages currentPage={1} totalPage={1} variant="inverse" />
      </div>
    </div>
  );
};

export default Vacancy;
