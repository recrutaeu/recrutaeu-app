import CardProcessContext from './CardProcessContext';
import { Poup } from '@/components/shared/Poup';

const ProcessPopup = ({ isOpen, setIsOpen }) => {
  return (
    <Poup
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Etapas do processo"
      variant="inverseTertiary"
    >
      <div className="h-full overflow-hidden">
        <div className="h-full overflow-auto flex flex-col gap-3 ">
          <CardProcessContext />
        </div>
      </div>
    </Poup>
  );
};

export default ProcessPopup;
