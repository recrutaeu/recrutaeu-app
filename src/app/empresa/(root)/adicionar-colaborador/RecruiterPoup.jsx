'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { InputLabel } from '@/components/shared/InputLabel';
import { Poup } from '@/components/shared/Poup';
import { useAuthContext } from '@/contexts/AuthContext';
import { signUpWithoutLogin } from '@/firebase/auth/signup';
import { useCreateOrUpdateUser } from '@/firebase/firestore/mutations';
import { uuid } from '@/firebase/uuid';
import { commons } from '@/locales';

const RecruiterPoup = ({ isOpen, setIsOpen }) => {
  const [error, setError] = useState(undefined);

  const { user } = useAuthContext();

  const formSchema = z.object({
    name: z.string().min(1, 'A nome é obrigatória'),
    email: z.string().email('email invalido').min(1, 'O email é obrigatorio'),
  });

  const { register, handleSubmit } = useForm({
    defaultValues: {},
    resolver: zodResolver(formSchema),
  });

  const { mutate: createOrUpdateUser } = useCreateOrUpdateUser({
    onSuccess: () => {
      setIsOpen(false);
    },
    onError: (e) => {
      setError(e.message);
    },
  });

  const handleForm = async (formData) => {
    const { email } = formData;
    const { response, error } = await signUpWithoutLogin(email, 'recruta123');
    if (error) {
      setError(error);
      return;
    }

    const authId = response.user.uid;

    const data = {
      id: uuid(),
      authId,
      companyId: user.id,
      name: formData.name,
      email: email,
      roles: ['recruiter'],
    };

    createOrUpdateUser(data);
  };

  const handleFormError = (errors) => {
    setError(Object.values(errors).find((error) => error.message)?.message);
  };

  return (
    <Poup
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Cadastar novo colaborador"
      variant="inverseSecundary"
    >
      <form
        className="w-full h-full flex flex-col"
        onSubmit={handleSubmit(handleForm, handleFormError)}
      >
        <div className="w-full flex flex-col grow gap-3 lg:gap-5">
          <InputLabel
            placeholder="ex: Fulano de tal"
            label="Nome Completo:"
            register={register('name')}
          />
          <InputLabel
            placeholder="ex: fulano@gmail.com"
            label="Email:"
            register={register('email')}
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

export { RecruiterPoup };
