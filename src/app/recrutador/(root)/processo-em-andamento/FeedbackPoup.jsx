'use client';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { Poup } from '@/components/shared/Poup';
import { TextArea } from '@/components/shared/TextArea';
import { useCreateOrUpdateApplication } from '@/firebase/firestore/mutations';

const FeedbackPopup = ({ isOpen, setIsOpen, application }) => {
  const [error, setError] = useState(undefined);
  const feedback = application?.steps?.find((item) => item.type === 'feedback');

  const formSchema = z.object({
    feedback: z.string().min(1, 'A descrição é obrigatória'),
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      feedback: feedback?.data?.feedback,
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
    const feedback = application.steps.find((item) => item.type === 'feedback');
    const newFeedback = {
      ...feedback,
      data: { ...formData },
    };

    const steps = application.steps.map((item) => (item.type === 'feedback' ? newFeedback : item));

    createOrUpdateApplication({
      id: application.id,
      steps,
    });
  };

  return (
    <Poup isOpen={isOpen} setIsOpen={setIsOpen} title="Feedback" variant="inverseForm">
      <div className="h-full overflow-hidden">
        <div className="h-full overflow-auto flex flex-col">
          <form className="flex flex-col gap-5 py-5" onSubmit={handleSubmit(handleForm)}>
            <Controller
              name="feedback"
              control={control}
              render={({ field: { onChange, value } }) => {
                return (
                  <TextArea
                    label="Descrição"
                    rows={20}
                    variant="inverse"
                    className="lg:text-xl"
                    onChange={onChange}
                    value={value}
                    error={errors?.['feedback']?.message}
                  />
                );
              }}
            />
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
