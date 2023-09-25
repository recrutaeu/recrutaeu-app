'use client';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { Poup } from '@/components/shared/Poup';
import { TextArea } from '@/components/shared/TextArea';

const FeedbackPopup = ({ isOpen, setIsOpen }) => {
  return (
    <Poup isOpen={isOpen} setIsOpen={setIsOpen} title="Feedback" variant="inverseForm">
      <div className="h-full overflow-hidden">
        <div className="h-full overflow-auto flex flex-col">
          <form className="flex flex-col gap-5 py-5">
            <TextArea label="Descrição" rows={20} variant="inverse" className="lg:text-xl" />
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

export default FeedbackPopup;
