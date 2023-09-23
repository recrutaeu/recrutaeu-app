import { twMerge } from 'tailwind-merge';

const Container = ({ children, className, ...props }) => {
  return (
    <div
      className={twMerge('max-w-[1400px] h-[calc(100dvh)] w-full flex mx-auto', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export { Container };
