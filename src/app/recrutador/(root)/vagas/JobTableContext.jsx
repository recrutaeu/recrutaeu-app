'use client';
import { useEffect, useState } from 'react';
import { MdFiberManualRecord } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';
import { Table } from '@/components/shared/Table';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    background: {
      [themes.DEFAULT]: 'bg-neutral-0',
      [themes.DARK]: 'border-2 border-neutral-90 bg-neutral-0',
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

const JobTableContext = ({ job, expiresAt, publishedAt, quantity, sector, checkAll }) => {
  const { theme } = useTheme();
  const style = styles['default'];
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(checkAll);
  }, [checkAll]);

  return (
    <>
      <Table.Row
        className={twMerge(
          'flex justify-between rounded-md mt-2 py-2 lg:px-6',
          style.background[theme],
        )}
      >
        <Table.Cells className="w-fit justify-center lg:flex items-center">
          <input
            type="checkbox"
            name=""
            id="checkbox"
            checked={checked}
            onClick={() => setChecked(!checked)}
            className={twMerge('cursor-pointer', style.checkbox[theme])}
          />
        </Table.Cells>
        <Table.Cells className="w-[calc(100% / 2] lg:w-[calc(100% / 6] lg:flex">{job}</Table.Cells>
        <Table.Cells className="w-[calc(100% / 2] lg:w-[calc(100% / 6] lg:flex ">
          {sector}
        </Table.Cells>
        <Table.Cells className="w-[calc(100% / 6] hidden lg:flex justify-center text-center">
          {quantity}
        </Table.Cells>
        <Table.Cells className="w-[calc(100% / 6] hidden  justify-center lg:flex text-center ">
          {publishedAt}
        </Table.Cells>
        <Table.Cells className="w-[calc(100% / 6] hidden lg:flex justify-center text-center">
          {expiresAt}
        </Table.Cells>

        <Table.Cells className={'flex'}>
          <button className="w-full flex justify-center cursor-pointer">
            <MdFiberManualRecord size={12} className={style.details[theme]} />
            <MdFiberManualRecord size={12} className={style.details[theme]} />
            <MdFiberManualRecord size={12} className={style.details[theme]} />
          </button>
        </Table.Cells>
      </Table.Row>
    </>
  );
};

export { JobTableContext };
