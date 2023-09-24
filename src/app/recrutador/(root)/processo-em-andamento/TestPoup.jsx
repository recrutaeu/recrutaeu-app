import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { DataPicker } from '@/components/shared/DataPicker';
import { InputLabel } from '@/components/shared/InputLabel';
import { Poup } from '@/components/shared/Poup';

const TestPopup = ({ isOpen, setIsOpen }) => {
  return (
    <Poup isOpen={isOpen} setIsOpen={setIsOpen} title="Teste" variant="inverseForm">
      <div className="h-full overflow-hidden">
        <div className="h-full overflow-auto flex flex-col">
          <form className="flex flex-col gap-5 py-5">
            <InputLabel label="Link:" variant="inverseTertiary" />
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

export default TestPopup;
