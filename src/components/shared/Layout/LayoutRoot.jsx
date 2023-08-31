import { twMerge } from 'tailwind-merge';
import { withTheme } from '@/contexts/ThemeContext';

const LayoutRoot = withTheme(({ children, className, ...props }) => {
  return (
    <div className={twMerge('flex w-full h-screen', className)} {...props}>
      {children}
    </div>
  );
});

export { LayoutRoot };
