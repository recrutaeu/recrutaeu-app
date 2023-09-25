'use client';
import { useState } from 'react';
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
  const root = document.getElementsByTagName('html')[0];

  const { theme } = useTheme();
  const style = styles[variant];
  const [isZoom, setIsZoom] = useState(root.classList.contains('text-zoom-in'));

  return (
    <div className="flex">
      <button
        className={twMerge('mr-1', style[theme], className)}
        disabled={isZoom}
        {...props}
        onClick={() => {
          if (!root.classList.contains('text-zoom-in')) {
            root.classList.add('text-zoom-in');
            setIsZoom(true);
          }
        }}
      >
        <MdTextIncrease size={24} className={twMerge(isZoom && 'text-neutral-40')} />
      </button>
      <button
        className={twMerge('text-primary-90', style[theme], className)}
        disabled={!isZoom}
        onClick={() => {
          const root = document.getElementsByTagName('html')[0];
          if (root.classList.contains('text-zoom-in')) {
            root.classList.remove('text-zoom-in');
            setIsZoom(false);
          }
        }}
        {...props}
      >
        <MdTextDecrease size={24} className={twMerge(!isZoom && 'text-neutral-40')} />
      </button>
    </div>
  );
};

export { ButtonFontZoom };
