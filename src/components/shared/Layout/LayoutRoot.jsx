import { twMerge } from 'tailwind-merge';

const LayoutRoot = ({ children, className, ...props }) => {
  return (
    <div className={twMerge('flex w-full h-[calc(100dvh)]', className)} {...props}>
      {children}
    </div>
  );
};

export { LayoutRoot };
