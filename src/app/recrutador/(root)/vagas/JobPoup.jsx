'use client';
import { InputLabel } from '@/components/shared/InputLabel';
import { Poup } from '@/components/shared/Poup';
import { Select } from '@/components/shared/Select';
import { TextArea } from '@/components/shared/TextArea';
import { Title } from '@/components/shared/Title';

const JobPoup = ({ isOpen }) => {
  return (
    <Poup isOpen={isOpen}>
      <div className="mt-5 w-full">
        <Title variant="inverse" className=" text-2xl lg:text-3xl">
          Cadastar nova vaga
        </Title>
        <form className="w-full mt-6 flex flex-col gap-4">
          <div className="w-full">
            <InputLabel placeholder="ex: programador front-end" label="Vagas:" />
            <InputLabel placeholder="ex: R$ 3.500 a R$ 5.000" label="Faixa Salarial:" />
            <InputLabel placeholder="ex: curso de dws" label="Deferencial:" />
            <InputLabel placeholder="ex: 10" label="N° de vagas:" />

            <Select
              label="Contrato"
              options={[
                { value: 'asdasdasd', label: 'asdsadasdas' },
                { value: 'asdasdasd', label: 'São Paulo' },
                { value: 'asdasdasd', label: 'Rio de Janeiro' },
                { value: 'asdasdasd', label: 'Bahia' },
                { value: 'asdasdasd', label: 'Salvador' },
                { value: 'asdasdasd', label: 'Pernambuco' },
                { value: 'Recife', label: 'Ceará' },
                { value: 'asdasdasd', label: 'asdsadasdas' },
                { value: 'asdasdasd', label: 'asdsadasdas' },
                { value: 'asdasdasd', label: 'asdsadasdas' },
                { value: 'asdasdasd', label: 'asdsadasdas' },
              ]}
              onChange={console.log}
            />

            <TextArea label="Descriação" rows={10} />
          </div>
        </form>
      </div>
    </Poup>
  );
};

export { JobPoup };
