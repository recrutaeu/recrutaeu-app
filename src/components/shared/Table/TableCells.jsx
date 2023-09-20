import { twMerge } from 'tailwind-merge';

const TableCells = ({ children, className }) => {
  return (
    <td className={twMerge('w-full flex items-center text-left px-5', className)}>{children}</td>
  );
};

export { TableCells };
