import { twMerge } from 'tailwind-merge';

const TableCells = ({ children, className }) => {
  return (
    <td className={twMerge('text-left first:rounded-md last:rounded-md py-2', className)}>
      {children}
    </td>
  );
};

export { TableCells };
