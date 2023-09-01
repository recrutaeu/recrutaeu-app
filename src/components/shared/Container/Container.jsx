import { twMerge } from 'tailwind-merge';
import { withTheme } from '@/contexts/ThemeContext';

const Container = withTheme(({ children, className, ...props }) => {
  return (
    <div className={twMerge('max-w-[1400px] h-screen w-full flex mx-auto', className)} {...props}>
      {children}
    </div>
  );
});

export { Container };
