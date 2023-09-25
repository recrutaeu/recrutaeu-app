import { twMerge } from 'tailwind-merge';
import { SkillPercent } from '@/components/shared/SkillPercent';
import { SkillPill } from '@/components/shared/SkillPill/SkillPill';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    background: {
      [themes.DEFAULT]: 'bg-neutral-0',
      [themes.DARK]: 'border-2 border-neutral-90',
      [themes.LIGHT]: 'bg-neutral-0',
    },
  },
};

const CardSearchCandidate = ({ onClick }) => {
  const { theme } = useTheme();
  const style = styles['default'];

  return (
    <div
      onClick={onClick}
      className={twMerge(
        'p-3 rounded-md flex flex-col justify-between gap-3 w-full lg:flex-row lg:p-3 lg:gap-10 cursor-pointer',
        style.background[theme],
      )}
    >
      <div className="flex w-full items-center gap-2">
        <div className="flex flex-col w-full justify-between">
          <p className="font-semibold leading-5 text-sm lg:text-base">Isabela da silva</p>
          <p className="font-light  text-sm lg:text-bas">Front end</p>
        </div>
        <div className="flex w-full lg:w-3/4">
          <SkillPill text="desenvolvedor" />
        </div>
      </div>
      <div className="w-full flex justify-end">
        <SkillPercent />
      </div>
    </div>
  );
};

export default CardSearchCandidate;
