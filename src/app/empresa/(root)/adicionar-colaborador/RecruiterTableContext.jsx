'use client';
import { useEffect, useState } from 'react';
import { PiTrashSimpleFill } from 'react-icons/pi';
import { twMerge } from 'tailwind-merge';
import { ButtonIcon } from '@/components/shared/ButtonIcon';
import { Table } from '@/components/shared/Table';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    background: {
      [themes.DEFAULT]: 'bg-neutral-0',
      [themes.DARK]: 'border-neutral-90 bg-neutral-0',
      [themes.LIGHT]: 'bg-neutral-0',
    },
    details: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-90',
    },
    checkbox: {
      [themes.DEFAULT]: 'accent-primary-90',
      [themes.DARK]: 'accent-neutral-90',
      [themes.LIGHT]: 'accent-neutral-90',
    },
  },
};

const RecruiterTableContext = ({ recruiter, onDelete, checkAll }) => {
  const { theme } = useTheme();
  const style = styles['default'];
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(checkAll);
  }, [checkAll]);

  const CustomCell = ({ children, className }) => (
    <Table.Cells className={twMerge('pl-2 lg:pl-5', style.background[theme], className)}>
      {children}
    </Table.Cells>
  );

  return (
    <tbody>
      <Table.Row>
        <CustomCell className="text-xs font-light lg:text-sm">{recruiter.name}</CustomCell>
        <CustomCell className="text-xs font-light lg:text-sm">{recruiter.email}</CustomCell>
        <CustomCell>
          <ButtonIcon onClick={() => onDelete(recruiter)}>
            <PiTrashSimpleFill className="w-5 h-5 lg:w-6 lg:h-6" />
          </ButtonIcon>
        </CustomCell>
      </Table.Row>
    </tbody>
  );
};

export { RecruiterTableContext };
