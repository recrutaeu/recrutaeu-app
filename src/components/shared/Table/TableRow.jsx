import { twMerge } from 'tailwind-merge';

const TableRow = ({ children, className }) => {
  return <tr className={twMerge('w-full flex', className)}>{children}</tr>;
};

export { TableRow };
