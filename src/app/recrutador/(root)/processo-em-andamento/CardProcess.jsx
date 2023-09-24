import { ButtonIcon } from '@/components/shared/ButtonIcon';
import { MdEdit } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';

const CardProcess = ({ title, children, onEdit, onClick, className }) => {
  return (
    <div className={twMerge('bg-neutral-0 w-full px-5 py-3 rounded-md', className)}>
      <div>
        <div className="flex items-center justify-between">
          <p className="text-base font-semibold">{title}</p>
          {onEdit && (
            <ButtonIcon onClick={onClick}>
              <MdEdit />
            </ButtonIcon>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default CardProcess;
