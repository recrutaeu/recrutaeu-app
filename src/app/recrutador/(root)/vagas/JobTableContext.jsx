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
      <Table.Row className={twMerge('rounded-md', style.background[theme])}>
        <Table.Cells>
          <div className="flex items-center justify-center">
            <input
              type="checkbox"
              name=""
              id="checkbox"
              checked={checked}
              onClick={() => setChecked(!checked)}
              className={twMerge('cursor-pointer', style.checkbox[theme])}
            />
          </div>
        </Table.Cells>
        <Table.Cells>{job}</Table.Cells>
        <Table.Cells>{sector}</Table.Cells>
        <Table.Cells className="hidden lg:table-cell text-center">{quantity}</Table.Cells>
        <Table.Cells className="hidden lg:table-cell text-center">{publishedAt}</Table.Cells>
        <Table.Cells className="hidden lg:table-cell text-center">{expiresAt}</Table.Cells>

        <Table.Cells>
          <button className="w-full flex items-center justify-center cursor-pointer">
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
