'use client';
import { twMerge } from 'tailwind-merge';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    background: {
      [themes.DEFAULT]: 'bg-primary-90 ',
      [themes.DARK]: 'bg-neutral-90',
      [themes.LIGHT]: 'bg-neutral-90',
    },
  },
};

const SkillPill = ({ text }) => {
  const { theme } = useTheme();
  const style = styles['default'];

  return (
    <div
      className={twMerge(
        ' w-full rounded-3xl py-1.5 px-5 text-center flex items-center justify-center',
        style.background[theme],
      )}
    >
      <p className=" text-neutral-0 lowercase text-sm lg:text-base w-full">{text}</p>
    </div>
  );
};

export { SkillPill };
