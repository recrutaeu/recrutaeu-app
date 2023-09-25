import { twMerge } from 'tailwind-merge';

const MenuLinkGroup = ({ children, className, ...props }) => {
  return (
    <div className={twMerge('flex flex-row lg:flex-col grow gap-6', className)} {...props}>
      {children}
    </div>
  );
};

export { MenuLinkGroup };
