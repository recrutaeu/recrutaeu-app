import { themes, withTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    div: {
      [themes.DEFAULT]: 'bg-primary-90 text-neutral-0 hover:bg-primary-100',
      [themes.DARK]: 'bg-neutral-90 text-neutral-0 hover:bg-neutral-15 hover:text-neutral-90',
      [themes.LIGHT]: 'bg-neutral-0 text-neutral-90 hover:bg-neutral-15 hover:text-neutral-90',
    },
  },
  inverse: {
    div: {
      [themes.DEFAULT]: 'bg-primary-40 text-primary-90 hover:bg-primary-90 hover:text-neutral-10',
      [themes.DARK]: 'bg-neutral-90 text-neutral-0 hover:bg-neutral-15 hover:text-neutral-90',
      [themes.LIGHT]: 'bg-neutral-0 text-neutral-90 hover:bg-neutral-15 hover:text-neutral-90',
    },
  },
};

const ButtonPrimary = withTheme(({ children, onClick, theme, variant = 'default' }) => {
  const style = styles[variant];

  return (
    <button
      className={`${style.div[theme]} min-w-[150px] px-6 py-3 rounded-lg font-bold text-md`}
      onClick={onClick}
    >
      {children}
    </button>
  );
});

export { ButtonPrimary };
