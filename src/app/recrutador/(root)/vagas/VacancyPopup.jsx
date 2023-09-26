'use client';
import { useState } from 'react';
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
  const [error, setError] = useState(undefined);
  const { user } = useAuthContext();

  const formSchema = z.object({
    title: z.string().min(1, 'O nome da vaga é obrigatória'),
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
  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      ...vacancy,
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
      setError(e.message);
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

  const handleFormError = (errors) => {
    setError(Object.values(errors).find((error) => error.message)?.message);
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
        onSubmit={handleSubmit(handleForm, handleFormError)}
      >
        <div className="w-full flex flex-col grow gap-3 lg:gap-5">
          <InputLabel
            placeholder="ex: programador front-end"
            label="Vaga:"
            id="title"
            register={register('title')}
          />
          <Controller
            control={control}
            name="sector"
            render={({ field: { onChange, value } }) => {
              return (
                <Select
                  titleLabel="Setor:"
                  label="---"
                  options={sectorOptions}
                  onChange={onChange}
                  value={value}
                />
              );
            }}
          />
          <Controller
            control={control}
            name="contractType"
            render={({ field: { onChange, value } }) => {
              return (
                <Select
                  titleLabel="Contrato:"
                  label="---"
                  options={contractOptions}
                  onChange={onChange}
                  value={value}
                />
              );
            }}
          />

          <div className="w-full flex justify-between gap-5">
            <InputLabel
              label="Cidade:"
              className="w-full"
              id="city"
              placeholder="---"
              register={register('city')}
            />
            <InputLabel label="Estado:" id="state" placeholder="---" register={register('state')} />
          </div>
          <InputLabel
            placeholder="ex: R$ 3.500 a R$ 5.000"
            label="Faixa Salarial:"
            id="salaryRange"
            register={register('salaryRange')}
          />
          <InputLabel
            placeholder="ex: curso de dws"
            label="Beneficios:"
            id="benefits"
            register={register('benefits')}
          />
          <DataPicker
            label="Prazo"
            variant="inverseSecundary"
            registerStart={register('startAt')}
            registerEnd={register('endAt')}
          />
          <InputLabel
            placeholder="ex: 10"
            id="quantity"
            label="N° de vagas:"
            register={register('quantity')}
          />

          <TextArea
            label="Descrição:"
            id="description"
            rows={14}
            register={register('description')}
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
