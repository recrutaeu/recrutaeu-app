'use client';
import { twMerge } from 'tailwind-merge';

const TableCells = ({ children, className }) => {
  return <td className={twMerge('w-full flex items-center', className)}>{children}</td>;
};

export { TableCells };
