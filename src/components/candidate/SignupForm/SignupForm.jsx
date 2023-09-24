import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { Input } from '@/components/shared/Input';
import { InputPassword } from '@/components/shared/InputPassword';
import { themes, useTheme } from '@/contexts/ThemeContext';
import signUp from '@/firebase/auth/signup';
import { createOrUpdateUser } from '@/firebase/firestore/addData';
import { candidate } from '@/locales';
const styles = {
  default: {
    description: {
      [themes.DEFAULT]: 'text-neutral-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-0',
    },
  },
};

const PersonalForm = ({ variant = 'default' }) => {
  const { theme } = useTheme();
  const style = styles[variant];
  const router = useRouter();
  const [formStep, setFormStep] = useState(formSteps.profile);
  const [error, setError] = React.useState(undefined);

  const formSchema = z
    .object({
      email: z.string().email('Email invalido').min(1, 'o email é obrigatório'),
      password: z
        .string()
        .min(1, 'A senha é  obrigatória')
        .min(6, 'A senha precisa ter pelo menos 6 caracteres'),
      confirmPassword: z.string().min(1, 'Confirmação de senha é obrigatório'),
      document: z.string().min(1, 'O CPF é obrigatório'),
      name: z.string().min(1, 'O nome é obrigatório'),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ['confirmPassword'],
      message: 'As senhas não iguais',
    });

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      document: '',
    },
    resolver: zodResolver(formSchema),
  });

  const handleForm = async (formData) => {
    const { email, password } = formData;
    const { response, error } = await signUp(email, password);
    if (error) {
      setError(error);
      return;
    }

    const userId = result.user.uid;
    const data = {
      userId,
      document: formData.document,
      name: formData.name,
      roles: ['candidate'],
      email: formData.email,
    };
    const { error: createError } = await createOrUpdateUser(userId, data);
    if (createError) {
      setError(createError.message);
      return;
    }

    router.push('/candidato/dashboard');
  };

  const handleFormError = (errors) => {
    setError(Object.values(errors).find((error) => error.message)?.message);
  };

  const formSteps = {
    profile: 'profile',
    password: 'password',
  };

  return (
    <form
      className="w-full flex flex-col gap-6 items-center"
      onSubmit={handleSubmit(handleForm, handleFormError)}
    >
      {formStep === formSteps.profile && (
        <>
          <p
            className={twMerge('lg:hidden w-full text-base text-center', style.description[theme])}
          >
            {candidate.signup.form.description}
          </p>
          <Input.Root>
            <Input.Field label="nome" type="text" register={register('name')} />
          </Input.Root>
          <Input.Root>
            <Input.Field label="cpf" type="text" register={register('document')} />
          </Input.Root>
          <Input.Root>
            <Input.Field label="email" register={register('email')} />
          </Input.Root>

          <ButtonPrimary
            type="button"
            className="mt-5"
            onClick={() => setFormStep(formSteps.password)}
          >
            {candidate.signup.form.buttonContinue.label}
          </ButtonPrimary>
        </>
      )}

      {formStep === formSteps.password && (
        <>
          <p
            className={twMerge('lg:hidden w-full text-base text-center', style.description[theme])}
          >
            {candidate.signup.form.descriptionPassword}
          </p>
          <InputPassword label="senha" register={register('password')} />

          <InputPassword label="repetir senha" register={register('confirmPassword')} />
          {error && <p className={twMerge('w-full pl-4', style.description[theme])}>{error}</p>}

          <ButtonPrimary type="submit" className="mt-5">
            {candidate.signup.form.buttonSubmit.label}
          </ButtonPrimary>
          <ButtonLink onClick={() => setFormStep(formSteps.profile)}>
            {candidate.signup.form.buttonBack.label}
          </ButtonLink>
        </>
      )}
    </form>
  );
};

export { PersonalForm };
