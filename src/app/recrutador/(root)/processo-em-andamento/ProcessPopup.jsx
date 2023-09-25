import CardProcessContext from './CardProcessContext';
import { Poup } from '@/components/shared/Poup';

const ProcessPopup = ({ isOpen, setIsOpen, application }) => {
  return (
    <Poup
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Etapas do processo"
      variant="inverseTertiary"
      className="lg:hidden"
    >
      <div className="h-full overflow-hidden">
        <div className="h-full overflow-auto flex flex-col gap-3 ">
          <CardProcessContext application={application} />
        </div>
      </div>
    </Poup>
  );
};

export default ProcessPopup;
