import { twMerge } from 'tailwind-merge';
import { themes, withTheme } from '@/contexts/ThemeContext';
import { AuthNavbar } from '../AuthNavbar';

const styles = {
  default: {
    div: {
      [themes.DEFAULT]: 'bg-primary-90',
      [themes.DARK]: 'bg-neutral-90',
      [themes.LIGHT]: 'bg-neutral-0',
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

const Popup = withTheme(({ children, className, theme, onSave, variant = 'default', ...props }) => {
  const style = styles[variant];

  return (
    <div
      className={twMerge('w-full h-full px-6 py-7 lg:rounded-3xl', style.div[theme], className)}
      {...props}
    >
        <div className="block lg:hidden">
            <AuthNavbar variant='inverse'/>
        </div>
      {children}

    </div>
  );
});

export { Popup };
