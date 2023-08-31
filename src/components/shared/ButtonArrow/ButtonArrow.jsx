import { LuArrowLeft } from 'react-icons/lu';
import { twMerge } from 'tailwind-merge';
import { themes, withTheme } from '@/contexts/ThemeContext';

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

const ButtonArrow = withTheme(({ className, theme, variant = 'default', ...props }) => {
  const style = styles[variant];

  return (
    <button {...props}>
      <LuArrowLeft className={twMerge('', className, style[theme])} size={32} />
    </button>
  );
});

export { ButtonArrow };
