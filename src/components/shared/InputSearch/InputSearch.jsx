import { twMerge } from 'tailwind-merge';
import { themes, withTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    input: {
      [themes.DEFAULT]: 'bg-neutral-10',
      [themes.DARK]: 'bg-neutral-0',
      [themes.LIGHT]: 'bg-neutral-20',
    },
  },
  inverse: {
    input: {
      [themes.DEFAULT]: 'bg-neutral-0',
      [themes.DARK]: 'bg-neutral-0',
      [themes.LIGHT]: 'bg-transparent border border-neutral-90',
    },
  },
};

const InputSearch = withTheme(({ theme, type, id, children, placeholder, className, ...props }) => {
  const style = styles[theme];

  return (
    <>
      <div className="relative w-full">
        <div
          className={twMerge(
            'absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none',
          )}
        >
          {children}
        </div>
        <input
          type={type}
          id={id}
          className={twMerge(
            'p-3 pl-12 w-full outline-none rounded-md',
            className,
            style.input[theme],
          )}
          placeholder={placeholder}
          required
          {...props}
        />
      </div>
    </>
  );
});

export { InputSearch };
