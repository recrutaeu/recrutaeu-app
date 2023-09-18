import { twMerge } from 'tailwind-merge';

const Container = ({ children, className, ...props }) => {
  return (
    <div className={twMerge('max-w-[1400px] h-screen w-full flex mx-auto', className)} {...props}>
      {children}
    </div>
  );
};

export { Container };
