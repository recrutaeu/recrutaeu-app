import { twMerge } from 'tailwind-merge';

const TableRoot = ({ children, className }) => {
  return (
    <table className={twMerge('w-full border-separate border-spacing-y-2', className)}>
      {children}
    </table>
  );
};

export { TableRoot };
