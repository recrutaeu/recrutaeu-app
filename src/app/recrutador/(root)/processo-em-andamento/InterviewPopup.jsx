import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { DataPicker } from '@/components/shared/DataPicker';
import { InputLabel } from '@/components/shared/InputLabel';
import { Poup } from '@/components/shared/Poup';
import { useAuthContext } from '@/contexts/AuthContext';
import {
  useCreateOrUpdateApplication,
  useCreateOrUpdateInterview,
} from '@/firebase/firestore/mutations';
import { uuid } from '@/firebase/uuid';

const InterviewPopup = ({ isOpen, setIsOpen, application }) => {
  const [error, setError] = useState(undefined);

  const interview = application?.steps?.find((item) => item.type === 'interview');

  const { user } = useAuthContext();

  const formSchema = z.object({
    employee: z.string().min(1, 'O Responsavel é obrigatório'),
    link: z.string().min(1, 'O link é obrigatório'),
    address: z.string(),
    date: z.string().min(1, 'Data e horario são obrigatória'),
  });

  const { register, handleSubmit } = useForm({
    defaultValues: {
      employee: interview?.data?.employee,
      link: interview?.data?.link,
      address: interview?.data?.address,
      date: interview?.data?.date.toDate().toISOString().split('T')[0],
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

  const { mutate: createOrUpdateInterview } = useCreateOrUpdateInterview();

  const handleForm = async (formData) => {
    const interview = application.steps.find((item) => item.type === 'interview');
    const data = {
      ...formData,
      id: interview?.data?.id || uuid(),
      date: new Date(formData.date),
    };
    const newInterview = {
      ...interview,
      data,
    };

    const steps = application.steps.map((item) =>
      item.type === 'interview' ? newInterview : item,
    );

    createOrUpdateApplication({
      id: application.id,
      steps,
    });
    createOrUpdateInterview({
      id: newInterview?.data?.id,
      ...data,
      userId: application.vacancy.userId,
      companyId: user.companyId,
      candidate: application.candidate,
      vacancy: application.vacancy,
    });
  };

  const handleFormError = (errors) => {
    setError(Object.values(errors).find((error) => error.message)?.message);
  };

  return (
    <Poup isOpen={isOpen} setIsOpen={setIsOpen} title="Entrevista" variant="inverseForm">
      <div className="h-full overflow-hidden">
        <div className="h-full overflow-auto flex flex-col">
          <form
            className="flex flex-col gap-5 py-5"
            onSubmit={handleSubmit(handleForm, handleFormError)}
          >
            <InputLabel
              label="Responsável:"
              variant="inverseSecundary"
              register={register('employee')}
            />
            <InputLabel label="Link:" variant="inverseTertiary" register={register('link')} />
            <InputLabel
              label="Endereço:"
              variant="inverseTertiary"
              register={register('address')}
            />
            <InputLabel
              type="datetime-local"
              label="Data:"
              variant="inverseTertiary"
              register={register('date')}
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

export default InterviewPopup;
