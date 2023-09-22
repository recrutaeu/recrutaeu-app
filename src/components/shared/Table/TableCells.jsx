import { twMerge } from 'tailwind-merge';

const TableCells = ({ children, className }) => {
  return (
    <td
      className={twMerge(
        'border-t border-b first:border-s last:border-e border-transparent text-left first:rounded-s-md  last:rounded-e-md py-1.5',
        className,
      )}
    >
      {children}
    </td>
  );
};

export { TableCells };
