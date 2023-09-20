import { twMerge } from 'tailwind-merge';

const TableRow = ({ children, className }) => {
  return <tr className={twMerge('border', className)}>{children}</tr>;
};

export { TableRow };
