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
      <button className={twMerge('text-3xl mr-2', style[theme], className)} {...props}>
        <MdTextIncrease />
      </button>
      <button className={twMerge('text-primary-90 text-3xl', style[theme], className)} {...props}>
        <MdTextDecrease />
      </button>
    </div>
  );
};

export { ButtonFontZoom };
