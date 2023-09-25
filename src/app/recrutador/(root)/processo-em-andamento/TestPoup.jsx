import { useState } from 'react';
import { useForm } from 'react-hook-form';
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

  const { register, handleSubmit } = useForm({
    defaultValues: {
      link: test?.data?.link,
      startAt: test?.data?.startAt.split('T')[0],
      endAt: test?.data?.endAt.split('T')[0],
    },
    resolver: zodResolver(formSchema),
  });

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
        startAt: new Date(formData.startAt).toISOString(),
        endAt: new Date(formData.endAt).toISOString(),
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
            <InputLabel label="Link:" variant="inverseTertiary" register={register('link')} />
            <DataPicker
              label="Prazo"
              registerStart={register('startAt')}
              registerEnd={register('endAt')}
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
