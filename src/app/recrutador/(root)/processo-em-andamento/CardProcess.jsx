import { MdEdit } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';
import { ButtonIcon } from '@/components/shared/ButtonIcon';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    div: {
      [themes.DEFAULT]: 'bg-neutral-10',
      [themes.DARK]: 'bg-neutral-0',
      [themes.LIGHT]: 'bg-neutral-90',
    },
    icon: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-0',
    },
    title: {
      [themes.DEFAULT]: 'text-neutral-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-0',
    },
  },
};

const CardProcess = ({ title, children, onEdit, onClick, className }) => {
  const { theme } = useTheme();
  const style = styles['default'];

  return (
    <div className={twMerge('w-full px-5 py-3 rounded-md', style.div[theme], className)}>
      <div>
        <div className="flex items-center justify-between">
          <p className={twMerge('text-sm lg:text-base font-semibold', style.title[theme])}>
            {title}
          </p>
          {onEdit && (
            <ButtonIcon onClick={onClick} className={style.icon[theme]}>
              <MdEdit size={20} />
            </ButtonIcon>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default CardProcess;
