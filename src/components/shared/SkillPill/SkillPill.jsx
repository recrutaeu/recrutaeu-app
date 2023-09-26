'use client';
import { LuX } from 'react-icons/lu';
import { twMerge } from 'tailwind-merge';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { LuX } from 'react-icons/lu';

const styles = {
  default: {
    background: {
      [themes.DEFAULT]: 'bg-primary-90 ',
      [themes.DARK]: 'bg-neutral-90 border border-neutral-0',
      [themes.LIGHT]: 'bg-neutral-90',
    },
    text: {
      [themes.DEFAULT]: 'text-neutral-0',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-0',
    },
  },
  inverse: {
    background: {
      [themes.DEFAULT]: 'bg-primary-40',
      [themes.DARK]: 'bg-neutral-0',
      [themes.LIGHT]: 'bg-neutral-90',
    },
    text: {
      [themes.DEFAULT]: 'text-neutral-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-0',
    },
  },
};

const SkillPill = ({ text, className, onDelete, variant = 'default' }) => {
  const { theme } = useTheme();
  const style = styles[variant];

  return (
    <div
      onClick={() => onDelete()}
      className={twMerge(
        ' w-full rounded-3xl py-1.5 px-5 text-center flex items-center justify-center gap-2 ',
        style.background[theme],
        className,
      )}
    >
      <p
        className={twMerge(
          ' text-neutral-0 lowercase text-sm lg:text-base w-full',
          style.text[theme],
        )}
      >
        {text}
      </p>
      {onDelete && <LuX size={20} className={twMerge('cursor-pointer', style.text[theme])} />}
    </div>
  );
};

export { SkillPill };
