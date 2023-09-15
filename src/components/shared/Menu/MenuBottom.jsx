import { twMerge } from 'tailwind-merge';
import { withTheme } from '@/contexts/ThemeContext';

const MenuBottom = withTheme(({ children, theme, className, variant = 'default', ...props }) => {
  return (
    <div className={twMerge('justify-self-end', className)} {...props}>
      {children}
    </div>
  );
});

export { MenuBottom };
