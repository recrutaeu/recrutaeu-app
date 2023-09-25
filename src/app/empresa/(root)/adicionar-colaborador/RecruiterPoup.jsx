'use client';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { DataPicker } from '@/components/shared/DataPicker';
import { InputLabel } from '@/components/shared/InputLabel';
import { Poup } from '@/components/shared/Poup';
import { Select } from '@/components/shared/Select';
import { TextArea } from '@/components/shared/TextArea';
import { commons } from '@/locales';

const RecruiterPoup = ({ isOpen, setIsOpen }) => {
  return (
    <Poup
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Cadastar novo colaborador"
      variant="inverseSecundary"
    >
      <form className="w-full h-full flex flex-col">
        <div className="w-full flex flex-col grow gap-3 lg:gap-5">
          <InputLabel placeholder="ex: Fulano de tal" label="Nome Completo:" />
          <InputLabel placeholder="ex: fulano@gmail.com" label="Email:" />

          <div className="w-full flex justify-center items-center pb-5 lg:pb-7">
            <ButtonPrimary type="submit" variant="inverseSecundary">
              {commons.tableJobs.button.label}
            </ButtonPrimary>
          </div>
        </div>
      </form>
    </Poup>
  );
};

export { RecruiterPoup };
