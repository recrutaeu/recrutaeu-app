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

const JobTableContext = ({ job, onDetails, checkAll }) => {
  const { theme } = useTheme();
  const style = styles['default'];
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(checkAll);
  }, [checkAll]);

  const CustomCell = ({ children, className }) => (
    <Table.Cells className={twMerge(style.background[theme], className)}>{children}</Table.Cells>
  );

  return (
    <tbody>
      <Table.Row>
        <CustomCell>
          <div className="flex items-center justify-center">
            <input
              type="checkbox"
              name=""
              id="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
              className={twMerge('cursor-pointer', style.checkbox[theme])}
            />
          </div>
        </CustomCell>
        <CustomCell className="text-xs font-light lg:text-sm">{job.job}</CustomCell>
        <CustomCell className="text-xs font-light lg:text-sm">{job.sector}</CustomCell>
        <CustomCell className="hidden text-center text-xs font-light lg:text-sm lg:table-cell">
          {job.quantity}
        </CustomCell>
        <CustomCell className="hidden text-center text-xs font-light lg:text-sm lg:table-cell">
          {job.publishedAt}
        </CustomCell>
        <CustomCell className="hidden text-center text-xs font-light lg:text-sm lg:table-cell">
          {job.expiresAt}
        </CustomCell>

        <CustomCell>
          <button
            type="button"
            className="w-full flex items-center justify-center cursor-pointer"
            onClick={() => onDetails(job)}
          >
            <MdFiberManualRecord size={10} className={style.details[theme]} />
            <MdFiberManualRecord size={10} className={style.details[theme]} />
            <MdFiberManualRecord size={10} className={style.details[theme]} />
          </button>
        </CustomCell>
      </Table.Row>
    </tbody>
  );
};

export { JobTableContext };
