import { twMerge } from 'tailwind-merge';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    div: {
      [themes.DEFAULT]: 'bg-neutral-15',
      [themes.DARK]: 'bg-neutral-0',
      [themes.LIGHT]: 'bg-neutral-15',
    },
  },
  inverse: {
    div: {
      [themes.DEFAULT]: 'bg-neutral-10',
      [themes.DARK]: 'bg-neutral-0',
      [themes.LIGHT]: 'bg-neutral-90',
    },
  },
};

const Divider = ({ variant = 'default', className }) => {
  const { theme } = useTheme();
  const style = styles[variant];

  return <div className={twMerge(style.div[theme], className, 'h-[1.5px] w-full')}></div>;
};

export { Divider };
