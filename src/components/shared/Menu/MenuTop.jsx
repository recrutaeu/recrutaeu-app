import { twMerge } from 'tailwind-merge';
import { themes, withTheme } from '@/contexts/ThemeContext';

const MenuTop = withTheme(({ children, theme, className, variant = 'default', ...props }) => {
  return (
    <div className={twMerge('mb-20', className)} {...props}>
      {children}
    </div>
  );
});

export { MenuTop };
