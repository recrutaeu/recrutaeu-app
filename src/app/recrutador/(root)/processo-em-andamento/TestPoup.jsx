import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { DataPicker } from '@/components/shared/DataPicker';
import { InputLabel } from '@/components/shared/InputLabel';
import { Poup } from '@/components/shared/Poup';
import { useCreateOrUpdateApplication } from '@/firebase/firestore/mutations';

const TestPopup = ({ isOpen, setIsOpen, application }) => {
  const [error, setError] = useState(undefined);

  const test = application?.steps?.find((item) => item.type === 'test');

  const formSchema = z.object({
    link: z.string().min(1, 'O link é obrigatório'),
    startAt: z.string().min(1, 'Data inicial é obrigatória'),
    endAt: z.string().min(1, 'Data final é  obrigatória'),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    reset({
      link: test?.data?.link,
      startAt: test?.data?.startAt.toDate().toISOString().split('T')[0],
      endAt: test?.data?.endAt.toDate().toISOString().split('T')[0],
    });
  }, [application]);

  const { mutate: createOrUpdateApplication } = useCreateOrUpdateApplication({
    onSuccess: () => {
      setIsOpen(false);
    },
    onError: (e) => {
      setError(e.message);
    },
  });

  const handleForm = async (formData) => {
    const test = application.steps.find((item) => item.type === 'test');
    const newTest = {
      ...test,
      data: {
        ...formData,
        startAt: new Date(formData.startAt),
        endAt: new Date(formData.endAt),
      },
    };

    const steps = application.steps.map((item) => (item.type === 'test' ? newTest : item));

    createOrUpdateApplication({
      id: application.id,
      steps,
    });
  };

  const handleFormError = (errors) => {
    setError(Object.values(errors).find((error) => error.message)?.message);
  };

  return (
    <Poup isOpen={isOpen} setIsOpen={setIsOpen} title="Teste" variant="inverseForm">
      <div className="h-full overflow-hidden">
        <div className="h-full overflow-auto flex flex-col">
          <form
            className="flex flex-col gap-5 py-5"
            onSubmit={handleSubmit(handleForm, handleFormError)}
          >
            <Controller
              name="link"
              control={control}
              render={({ field: { onChange, value } }) => {
                return (
                  <InputLabel
                    label="Link:"
                    variant="inverseTertiary"
                    onChange={onChange}
                    value={value}
                    error={errors?.['link']?.message}
                  />
                );
              }}
            />

            <DataPicker
              label="Prazo"
              startName="startAt"
              endName="endAt"
              control={control}
              error={errors?.['startAt']?.message || errors?.['endAt']?.message}
            />
            {error && <p>{error}</p>}
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
