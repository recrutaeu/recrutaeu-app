'use client';
import { MdTextDecrease, MdTextIncrease } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    [themes.DEFAULT]: 'text-primary-90 ',
    [themes.DARK]: 'text-neutral-90',
    [themes.LIGHT]: 'text-neutral-0',
  },
  inverse: {
    [themes.DEFAULT]: 'text-primary-40',
    [themes.DARK]: 'text-neutral-0',
    [themes.LIGHT]: 'text-neutral-90',
  },
};

const ButtonFontZoom = ({ variant = 'default', className, ...props }) => {
  const { theme } = useTheme();
  const style = styles[variant];

  return (
    <div className="flex">
      <button className={twMerge('mr-1', style[theme], className)} {...props}>
        <MdTextIncrease size={24} />
      </button>
      <button className={twMerge('text-primary-90', style[theme], className)} {...props}>
        <MdTextDecrease size={24} />
      </button>
    </div>
  );
};

export { ButtonFontZoom };
