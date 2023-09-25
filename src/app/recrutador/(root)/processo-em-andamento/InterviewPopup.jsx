import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { DataPicker } from '@/components/shared/DataPicker';
import { InputLabel } from '@/components/shared/InputLabel';
import { Poup } from '@/components/shared/Poup';

const InterviewPopup = ({ isOpen, setIsOpen }) => {
  return (
    <Poup isOpen={isOpen} setIsOpen={setIsOpen} title="Interview" variant="inverseForm">
      <div className="h-full overflow-hidden">
        <div className="h-full overflow-auto flex flex-col">
          <form className="flex flex-col gap-5 py-5">
            <InputLabel label="Responsável:" variant="inverseSecundary" />
            <InputLabel label="Link:" variant="inverseTertiary" />
            <InputLabel label="Endereço:" variant="inverseTertiary" />
            <InputLabel type="time" label="Horário:" variant="inverseTertiary" />
            <DataPicker label="Prazo" />
            <div className="w-full flex items-center justify-center">
              <ButtonPrimary type="submit" variant="inverse">
                salvar
              </ButtonPrimary>
            </div>
          </form>
        </div>
      </div>
    </Poup>
  );
};

export default InterviewPopup;
