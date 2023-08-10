import { themes, withTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    input: {
      [themes.DEFAULT]: 'bg-neutral-15',
      [themes.DARK]: 'bg-neutral-20',
      [themes.LIGHT]: 'bg-neutral-0',
    },
  },
  inverse: {
    input: {
      [themes.DEFAULT]: 'bg-neutral-10',
    },
  },
};

const InputRoot = withTheme(({ children, theme, variant = 'default' }) => {
  const style = styles[variant];

  return (
    <div
      className={`flex items-center rounded-md justify-between px-4 gap-4 ${style.input[theme]}`}
    >
      {children}
    </div>
  );
});

export { InputRoot };
