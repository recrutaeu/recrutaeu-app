'use client';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { DataPicker } from '@/components/shared/DataPicker';
import { InputLabel } from '@/components/shared/InputLabel';
import { Poup } from '@/components/shared/Poup';
import { Select } from '@/components/shared/Select';
import { TextArea } from '@/components/shared/TextArea';
import { useAuthContext } from '@/contexts/AuthContext';
import { useCreateOrUpdateVacancy } from '@/firebase/firestore/mutations';
import { uuid } from '@/firebase/uuid';
import { commons } from '@/locales';
import { useToast } from '@/contexts/ToastContext';

const sectorOptions = [
  { value: 'tecnologia', label: 'tecnologia' },
  { value: 'RH', label: 'RH' },
];

const contractOptions = [
  { value: 'CLT', label: 'CLT' },
  { value: 'PJ', label: 'PJ' },
  { value: 'temporário', label: 'temporário' },
];

const VacancyPopup = ({ isOpen, setIsOpen, vacancy }) => {
  const { user } = useAuthContext();
  const { setToast } = useToast();

  const formSchema = z.object({
    title: z.string().min(1, 'O nome da vaga é obrigatório'),
    sector: z.string().min(1, 'O setor é obrigatório'),
    contractType: z.string().min(1, 'O contrato é obrigatório'),
    city: z.string().min(1, 'A cidade é obrigatória'),
    state: z.string().min(1, 'O estado é obrigatório'),
    salaryRange: z.string().min(1, 'O faixa salarial é obrigatório'),
    benefits: z.string().min(1, 'Os benefícios é obrigatório'),
    startAt: z.string().min(1, 'A data de inicio do prazo é obrigatório'),
    endAt: z.string().min(1, 'A data de termino do prazo é obrigatório'),
    quantity: z.string().min(1, 'A quantidade de vagas é obrigatória'),
    description: z.string().min(200, 'A descrição da vaga é obrigatória'),
  });

  const { 
    handleSubmit,
    formState: { errors }, 
    control, 
    reset 
  } = useForm({
    defaultValues: {
      // ...vacancy,
      title: '',
      sector: '',
      city: '',
      state: '',
      contractType: '',
      salaryRange: '',
      benefits: '',
      quantity: '',
      startAt: vacancy?.startAt.toDate().toISOString().split('T')[0],
      endAt: vacancy?.endAt.toDate().toISOString().split('T')[0],
    },
    resolver: zodResolver(formSchema),
  });

  const { mutate: createVacancy } = useCreateOrUpdateVacancy({
    onSuccess: () => {
      reset();
      setIsOpen(false);
    },
    onError: (e) => {
      setToast(e.message);
    },
  });

  const handleForm = async (formData) => {
    const data = {
      ...formData,
      id: vacancy?.id || uuid(),
      userId: user.id,
      startAt: new Date(formData.startAt),
      endAt: new Date(formData.endAt),
    };

    createVacancy(data);
  };

  return (
    <Poup
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Cadastrar nova vaga"
      variant="inverseSecundary"
    >
      <form
        className="w-full h-full flex flex-col"
        onSubmit={handleSubmit(handleForm, console.log)}
      >
        <div className="w-full flex flex-col grow gap-3 lg:gap-5">

            <Controller
              name="title"
              control={control}
              render={({ field: { onChange, value } }) => {
                return (
                  <InputLabel
                    variant='inverseSecundary'
                    type="text"
                    placeholder="ex: programador front-end"
                    label="Vaga:"
                    onChange={onChange}
                    value={value}
                    error={errors?.['title']?.message}
                  />
                );
              }}
            />
              <Controller
                name="sector"
                control={control}
                render={({ field: { onChange, value } }) => {
                  return (
                    <Select
                      titleLabel="Setor:"
                      label="---"
                      options={sectorOptions}
                      onChange={onChange}
                      value={value}
                      error={errors?.['sector']?.message}
                    />
                  );
                }}
              />
              <Controller
                name="contractType"
                control={control}
                render={({ field: { onChange, value } }) => {
                  return (
                    <Select
                      titleLabel="Contrato:"
                      label="---"
                      options={contractOptions}
                      onChange={onChange}
                      value={value}
                      error={errors?.['contractType']?.message}
                    />
                  );
                }}
              />

              <div className="w-full flex justify-between gap-5">
                <Controller
                  name="city"
                  control={control}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <InputLabel
                        variant='inverseSecundary'
                        type="text"
                        label="Cidade:"
                        className="w-full"
                        id="city"
                        placeholder="---"
                        onChange={onChange}
                        value={value}
                        error={errors?.['city']?.message}
                      />
                    );
                  }}
                />    

                <Controller
                  name="state"
                  control={control}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <InputLabel
                        variant='inverseSecundary'
                        type="text"
                        label="Estado:"
                        className="w-full"
                        id="state"
                        placeholder="---"
                        onChange={onChange}
                        value={value}
                        error={errors?.['state']?.message}
                      />
                    );
                  }}
                />            
              </div> 

            <Controller
              name="salaryRange"
              control={control}
              render={({ field: { onChange, value } }) => {
                return (
                  <InputLabel
                    variant='inverseSecundary'
                    type="text"
                    placeholder="ex: R$ 3.500 a R$ 5.000"
                    label="Faixa Salarial:"
                    onChange={onChange}
                    value={value}
                    error={errors?.['salaryRange']?.message}
                  />
                );
              }}
            />

            <Controller
              name="benefits"
              control={control}
              render={({ field: { onChange, value } }) => {
                return (
                  <InputLabel
                    variant='inverseSecundary'
                    type="text"
                    placeholder="ex: curso de dws"
                    label="Beneficios:"
                    onChange={onChange}
                    value={value}
                    error={errors?.['benefits']?.message}
                  />
                );
              }}
            />

              {/* <DataPicker
                label="Prazo"
                variant="inverseSecundary"
                registerStart={register('startAt')}
                registerEnd={register('endAt')}
              /> */}

            <Controller
              name="quantity"
              control={control}
              render={({ field: { onChange, value } }) => {
                return (
                  <InputLabel
                    variant='inverseSecundary'
                    type="number"
                    placeholder="ex: 10"
                    label="N° de vagas:"
                    onChange={onChange}
                    value={value}
                    error={errors?.['quantity']?.message}
                  />
                );
              }}
            />

            <Controller
              name="description"
              control={control}
              render={({ field: { onChange, value } }) => {
                return (
                  <TextArea
                    label="Descrição:"
                    onChange={onChange}
                    value={value}
                    rows={14}                
                    error={errors?.['quantity']?.message}
                  />
                );
              }}
            />

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

export { VacancyPopup };
