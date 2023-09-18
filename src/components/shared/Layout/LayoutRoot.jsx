import { twMerge } from 'tailwind-merge';

const LayoutRoot = ({ children, className, ...props }) => {
  return (
    <div className={twMerge('flex w-full h-screen', className)} {...props}>
      {children}
    </div>
  );
};

export { LayoutRoot };
