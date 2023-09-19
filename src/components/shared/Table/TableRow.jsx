'use client';
import { twMerge } from 'tailwind-merge';

const TableRow = ({ children, className }) => {
  <tr className={twMerge('w-full flex', className)}>{children}</tr>;
};

export { TableRow };
