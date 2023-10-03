'use client';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { InputLabel } from '@/components/shared/InputLabel';
import { Poup } from '@/components/shared/Poup';
import { useAuthContext } from '@/contexts/AuthContext';
import { useToast } from '@/contexts/ToastContext';
import resetPassword from '@/firebase/auth/password-reset';
import { signUpWithoutLogin } from '@/firebase/auth/signup';
import { useCreateOrUpdateUser } from '@/firebase/firestore/mutations';
import { uuid } from '@/firebase/uuid';
import { commons } from '@/locales';

const RecruiterPoup = ({ isOpen, setIsOpen }) => {
  const { setToast } = useToast();

  const { user } = useAuthContext();

  const formSchema = z.object({
    name: z.string().min(1, 'A nome é obrigatória'),
    email: z.string().email('email invalido').min(1, 'O email é obrigatorio'),
  });

  const { control, handleSubmit } = useForm({
    defaultValues: {},
    resolver: zodResolver(formSchema),
  });

  const { mutate: createOrUpdateUser } = useCreateOrUpdateUser({
    onSuccess: () => {
      setIsOpen(false);
    },
    onError: (e) => {
      setToast({ message: e.message, type: 'error' });
    },
  });

  const handleForm = async (formData) => {
    const { email } = formData;
    const { response, error } = await signUpWithoutLogin(email, 'recruta123');

    if (error) {
      setToast({ message: error, type: 'error' });
      return;
    }

    const { error: resetPasswordError } = await resetPassword(email);

    if (resetPasswordError) {
      setToast({ message: resetPasswordError, type: 'error' });
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

  return (
    <Poup
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Cadastar novo colaborador"
      variant="inverseSecundary"
    >
      <form
        className="w-full h-full flex flex-col"
        onSubmit={handleSubmit(handleForm, console.log)}
      >
        <div className="w-full flex flex-col grow gap-3 lg:gap-5">
          <Controller
            name="name"
            control={control}
            render={({ field: { value, onChange } }) => {
              return (
                <InputLabel
                  placeholder="ex: Fulano de tal"
                  label="Nome Completo:"
                  value={value}
                  onChange={onChange}
                />
              );
            }}
          />

          <Controller
            name="email"
            control={control}
            render={({ field: { value, onChange } }) => {
              return (
                <InputLabel
                  placeholder="ex: fulano@gmail.com"
                  label="Email:"
                  onChange={onChange}
                  value={value}
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

export { RecruiterPoup };
