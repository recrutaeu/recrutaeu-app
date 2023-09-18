import { twMerge } from 'tailwind-merge';

const MenuBottom = ({ children, className, ...props }) => {
  return (
    <div className={twMerge('justify-self-end', className)} {...props}>
      {children}
    </div>
  );
};

export { MenuBottom };
