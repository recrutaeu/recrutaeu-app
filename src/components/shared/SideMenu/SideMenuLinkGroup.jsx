import { withTheme } from '@/contexts/ThemeContext';
import { twMerge } from 'tailwind-merge';


const SideMenuLinkGroup = withTheme(({ children, theme, className, variant = 'default', ...props }) => {
    return (
        <div className={twMerge('flex flex-col grow gap-6',className)}  {...props}>
            {children}
        </div>
    );
});

export { SideMenuLinkGroup };