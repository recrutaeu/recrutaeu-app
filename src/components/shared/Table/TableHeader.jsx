'use client'
import { twMerge } from 'tailwind-merge';
import { Filter } from '../Filter';

const TableHeader = ({ children, className }) => {
  return (
    <th className={twMerge('w-full flex items-center', className)}>
      {children}
      <Filter size={20} />
    </th>
  );
};

export { TableHeader };
