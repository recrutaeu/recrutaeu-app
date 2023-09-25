import { twMerge } from 'tailwind-merge';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    description: {
      [themes.DEFAULT]: 'text-neutral-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-90',
    },
  },
};
const ProgressBar = ({ className, ...props }) => {
  const { theme } = useTheme();
  const style = styles['default'];
  const { bgcolor, completed, label } = props;

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: '8px',
  };

  return (
    <div className={twMerge('flex flex-col gap-1 w-full', className)}>
      <p className={twMerge('w-full text-sm font-ligth lg:text-base', style.description[theme])}>
        {label}
      </p>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span className="text-xs lg:text-sm text-neutral-90 font-medium">{`${completed}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
