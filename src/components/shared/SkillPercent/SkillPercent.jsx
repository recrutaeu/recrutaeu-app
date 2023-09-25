import { twMerge } from 'tailwind-merge';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    backgroundBack: {
      [themes.DEFAULT]: 'bg-neutral-10',
      [themes.DARK]: 'bg-neutral-20',
      [themes.LIGHT]: 'bg-neutral-20',
    },
    backgroundFront: {
      [themes.DEFAULT]: 'bg-primary-50',
      [themes.DARK]: 'bg-neutral-90',
      [themes.LIGHT]: 'bg-neutral-90',
    },
  },
};

const SkillPercent = () => {
  const { theme } = useTheme();
  const style = styles['default'];

  return (
    <div className="w-full flex items-center gap-2">
      <p className="text-sm lg:text-base font-medium">89%</p>
      <div className={twMerge('w-full rounded-full h-4 lg:h-7', style.backgroundBack[theme])}>
        <div
          className={twMerge('h-4 lg:h-7 rounded-full', style.backgroundFront[theme])}
          style={{ width: '45%' }}
        ></div>
      </div>
    </div>
  );
};

export { SkillPercent };
