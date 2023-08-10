import Link from 'next/link';
import { themes, withTheme } from '@/contexts/ThemeContext';
import { twMerge } from 'tailwind-merge';
import { icons } from 'lucide-react';

const styles = {
    default: {
        icon: {
            [themes.DEFAULT]: 'text-neutral-0 hover:text-primary-40',
            [themes.DARK]: 'text-neutral-0 hover:text-neutral-40',
            [themes.LIGHT]: 'text-neutral-90 hover:text-neutral-40',
        },
    },
};

const SideMenuLink = withTheme(({ href, icon, className, theme, variant = 'default' }) => {
    const style = styles[variant];
    const Icon = icons[icon]
    return (
        <Link className={twMerge(style.icon[theme], className)} href={href}>
            <Icon size={36} />
        </Link>
    );
});

export { SideMenuLink };
