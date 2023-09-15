import { twMerge } from 'tailwind-merge';
import { withTheme } from '@/contexts/ThemeContext';

const MenuLinkGroup = withTheme(({ children, theme, className, variant = 'default', ...props }) => {
  return (
    <div className={twMerge('flex flex-col grow gap-6', className)} {...props}>
      {children}
    </div>
  );
});

export { MenuLinkGroup };
