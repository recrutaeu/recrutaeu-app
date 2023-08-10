import { withTheme } from '@/contexts/ThemeContext';
import { twMerge } from 'tailwind-merge';


const SideMenuBottom = withTheme(({ children, theme, className, variant = 'default', ...props }) => {
    return (
        <div className={twMerge('justify-self-end', className)}  {...props}>
            {children}
        </div>
    );
});

export { SideMenuBottom };