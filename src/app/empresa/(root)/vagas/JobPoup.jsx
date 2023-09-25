'use client';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { DataPicker } from '@/components/shared/DataPicker';
import { InputLabel } from '@/components/shared/InputLabel';
import { Poup } from '@/components/shared/Poup';
import { Select } from '@/components/shared/Select';
import { TextArea } from '@/components/shared/TextArea';
import { commons } from '@/locales';

const JobPoup = ({ isOpen, setIsOpen }) => {
  return (
    <Poup
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Cadastar nova vaga"
      variant="inverseSecundary"
    >
      <form className="w-full h-full flex flex-col">
        <div className="w-full flex flex-col grow gap-3 lg:gap-5">
          <InputLabel placeholder="ex: programador front-end" label="Vagas:" className="" />
          <Select
            titleLabel="Setor:"
            label="---"
            options={[
              { value: 'asdasdasd', label: 'tecnologia' },
              { value: 'asdasdasd', label: 'RH' },
              { value: 'asdasdasd', label: 'tbasasas' },
              { value: 'asdasdasd', label: 'sSASAD' },
              { value: 'asdasdasd', label: 'Salvador' },
              { value: 'asdasdasd', label: 'temporário' },
              { value: 'asdasdasd', label: 'hibrido' },
              { value: 'asdasdasd', label: 'Salvador' },
            ]}
            onChange={console.log}
          />
          <Select
            titleLabel="Contrato:"
            label="---"
            options={[
              { value: 'asdasdasd', label: 'clt' },
              { value: 'asdasdasd', label: 'pj' },
              { value: 'asdasdasd', label: 'temporário' },
              { value: 'asdasdasd', label: 'hibrido' },
              { value: 'asdasdasd', label: 'Salvador' },
              { value: 'asdasdasd', label: 'temporário' },
              { value: 'asdasdasd', label: 'hibrido' },
              { value: 'asdasdasd', label: 'Salvador' },
            ]}
            onChange={console.log}
          />

          <div className="w-full flex justify-between gap-5">
            <Select
              titleLabel="Cidade:"
              label="---"
              options={[
                { value: 'asdasdasd', label: 'São Paulo' },
                { value: 'asdasdasd', label: 'Rio de Janeiro' },
                { value: 'asdasdasd', label: 'Salvador' },
                { value: 'asdasdasd', label: 'Pernambuco' },
                { value: 'asdasdasd', label: 'Bahia' },
                { value: 'asdasdasd', label: 'Esperito Santo' },
              ]}
              onChange={console.log}
            />

            <Select
              titleLabel="Estado:"
              label="---"
              options={[
                { value: 'asdasdasd', label: 'São Paulo' },
                { value: 'asdasdasd', label: 'Rio de Janeiro' },
                { value: 'asdasdasd', label: 'Salvador' },
                { value: 'asdasdasd', label: 'Pernambuco' },
                { value: 'asdasdasd', label: 'Bahia' },
                { value: 'asdasdasd', label: 'Esperito Santo' },
                { value: 'asdasdasd', label: 'Salvador' },
              ]}
              onChange={console.log}
            />
          </div>
          <InputLabel placeholder="ex: R$ 3.500 a R$ 5.000" label="Faixa Salarial:" />
          <InputLabel placeholder="ex: curso de dws" label="Beneficios:" />
          <DataPicker label="Prazo" variant="inverseSecundary" />

          <InputLabel placeholder="ex: 10" label="N° de vagas:" />

          <TextArea label="Descrição:" rows={14} />

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

export { JobPoup };
