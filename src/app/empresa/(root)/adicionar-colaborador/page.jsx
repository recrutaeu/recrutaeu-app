'use client';
import { useState } from 'react';
import { MdAddBox } from 'react-icons/md';
import { PiTrashSimpleFill } from 'react-icons/pi';
import { twMerge } from 'tailwind-merge';
import RecruiterDetails from './RecruiterDetails';
import { RecruiterPoup } from './RecruiterPoup';
import { JobTable, RecruiterTable } from './RecruiterTable';
import { ButtonIcon } from '@/components/shared/ButtonIcon';
import { InputSearch } from '@/components/shared/InputSearch';
import { NumberPages } from '@/components/shared/NumberPages';
import { Title } from '@/components/shared/Title';
import { useAuthContext } from '@/contexts/AuthContext';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { useFindAllUsersByCompanyId } from '@/firebase/firestore/queries';
import { company } from '@/locales';

const styles = {
  default: {
    description: {
      [themes.DEFAULT]: 'text-neutral-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-0',
    },
  },
};

const Recruiters = ({}) => {
  const { theme } = useTheme();
  const style = styles['default'];
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDetails, setIsOpenDetails] = useState(false);
  const [selectRecruiter, setSelectRecruiter] = useState(undefined);
  const { user } = useAuthContext();
  const { data: recruiters } = useFindAllUsersByCompanyId({ id: user.id });

  return (
    <div className="h-full lg:px-7 px-5 py-5">
      <RecruiterPoup isOpen={isOpen} setIsOpen={setIsOpen} />

      <div>
        <Title className="text-xl lg:text-3xl" variant="inverse">
          {company.recruiters.title}
        </Title>
        <p
          className={twMerge(
            'w-full text-sm font-light mt-2 lg:text-base',
            style.description[theme],
          )}
        >
          {company.recruiters.description}
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
      <RecruiterTable
        recruiters={recruiters}
        onDetails={(recruiter) => {
          setIsOpenDetails(true);
          setSelectRecruiter(recruiter);
        }}
      />
      <div className="w-full flex justify-center items-center">
        <NumberPages currentPage={1} totalPage={10} variant="inverse" />
      </div>
    </div>
  );
};

export default Recruiters;
