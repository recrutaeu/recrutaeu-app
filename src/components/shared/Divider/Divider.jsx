import { themes, withTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    div: {
      [themes.DEFAULT]: 'bg-neutral-15',
      [themes.DARK]: 'bg-neutral-0',
      [themes.LIGHT]: 'bg-neutral-90',
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

const Divider = withTheme(({ theme, variant = 'default' }) => {
  const style = styles[variant];

  return <div className={`${style.div[theme]} h-0.5 w-full`}></div>;
});

export { Divider };
