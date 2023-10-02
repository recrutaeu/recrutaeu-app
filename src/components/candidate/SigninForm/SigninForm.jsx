import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { InputLabel } from '@/components/shared/InputLabel';
import { InputPassword } from '@/components/shared/InputPassword';
import { useToast } from '@/contexts/ToastContext';
import signIn from '@/firebase/auth/signin';
import { candidate } from '@/locales/candidate';
import { Input } from '@/components/shared/Input';

const PersonalForm = ({ variant }) => {
  const router = useRouter();
  const { setToast } = useToast();

  const formSchema = z.object({
    email: z.string().email('Email invalido').min(1, 'o email é obrigatório'),
    password: z
      .string()
      .min(1, 'A senha é  obrigatória')
      .min(6, 'A senha precisa ter pelo menos 6 caracteres'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  });

  const handleForm = async (data) => {
    const { email, password } = data;
    const { result, error } = await signIn(email, password);

    if (error) {
      setToast(error);
      return;
    }

    return router.push('/candidato/dashboard');
  };

  return (
    <form className="w-full flex flex-col gap-6 items-center" onSubmit={handleSubmit(handleForm)}>
      <>
        <Input.Root variant={variant}>
          <Input.Field type="email" label="email" register={register('email')} />
        </Input.Root>

        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <InputPassword
                variant={variant}
                placeholder="senha"
                onChange={onChange}
                value={value}
                error={errors?.['password']?.message}
              />
            );
          }}
        />

        <div className="w-full">
          <ButtonLink variant={variant} className="flex justify-end text-sm lg:text-base">
            {candidate.signin.form.forgotPassword.label}
          </ButtonLink>
        </div>

        <ButtonPrimary type="submit" className="mt-5" variant={variant}>
          {candidate.signin.form.button.label}
        </ButtonPrimary>
      </>
    </form>
  );
};

export { PersonalForm };
