import { twMerge } from 'tailwind-merge';

const MenuTop = ({ children, className, ...props }) => {
  return (
    <div className={twMerge('mb-20', className)} {...props}>
      {children}
    </div>
  );
};

export { MenuTop };
