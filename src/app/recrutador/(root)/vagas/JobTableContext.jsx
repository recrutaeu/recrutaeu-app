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

const JobTableContext = ({ job, expiresAt, publishedAt, quantity, sector, checkAll }) => {
  const { theme } = useTheme();
  const style = styles['default'];
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(checkAll);
  }, [checkAll]);

  const CustomCell = ({ children }) => (
    <Table.Cells className={style.background[theme]}>{children}</Table.Cells>
  );

  return (
    <>
      <Table.Row>
        <CustomCell>
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
        </CustomCell>
        <CustomCell>{job}</CustomCell>
        <CustomCell>{sector}</CustomCell>
        <CustomCell className="hidden lg:table-cell text-center">{quantity}</CustomCell>
        <CustomCell className="hidden lg:table-cell text-center">{publishedAt}</CustomCell>
        <CustomCell className="hidden lg:table-cell text-center">{expiresAt}</CustomCell>

        <CustomCell>
          <button className="w-full flex items-center justify-center cursor-pointer">
            <MdFiberManualRecord size={12} className={style.details[theme]} />
            <MdFiberManualRecord size={12} className={style.details[theme]} />
            <MdFiberManualRecord size={12} className={style.details[theme]} />
          </button>
        </CustomCell>
      </Table.Row>
    </>
  );
};

export { JobTableContext };
