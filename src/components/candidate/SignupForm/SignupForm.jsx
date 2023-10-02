'use client';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CpfValidator } from 'clean-cpf-validator';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { InputLabel } from '@/components/shared/InputLabel';
import { InputMask } from '@/components/shared/InputMask';
import { InputPassword } from '@/components/shared/InputPassword';
import { DOCUMENT_MASK } from '@/consts/mask';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { useToast } from '@/contexts/ToastContext';
import signUp from '@/firebase/auth/signup';
import { useCreateOrUpdateUser } from '@/firebase/firestore/mutations';
import { uuid } from '@/firebase/uuid';
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
  const formSteps = {
    profile: 'profile',
    password: 'password',
  };

  const { theme } = useTheme();
  const style = styles[variant];
  const router = useRouter();
  const [formStep, setFormStep] = useState(formSteps.profile);
  const [error, setError] = React.useState(undefined);
  const { setToast } = useToast();

  const formSchema = z
    .object({
      email: z.string().min(1, 'O email é obrigatório.').email('Por favor insira um email válido.'),
      password: z
        .string()
        .min(1, 'A senha é  obrigatória.')
        .min(6, 'A senha precisa ter pelo menos 6 caracteres.'),
      confirmPassword: z.string().min(1, 'A confirmação de senha é obrigatória.'),
      document: z
        .string()
        .min(1, 'O CPF é obrigatório.')
        .refine((document) => CpfValidator.validate(document), 'Insira um cpf válido.'),
      name: z.string().min(1, 'O nome é obrigatório.'),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ['confirmPassword'],
      message: 'As senhas não iguais',
    });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      document: '',
    },
    resolver: zodResolver(formSchema),
  });

  const { mutate: createOrUpdateUser } = useCreateOrUpdateUser({
    onSuccess: () => {
      router.push('/candidato/dashboard');
    },
    onError: (e) => {
      setError(e.message);
    },
  });

  const handleForm = async (formData) => {
    const { email, password } = formData;
    const { response, error } = await signUp(email, password);
    if (error) {
      setToast(error);
      return;
    }

    const authId = response.user.uid;

    const data = {
      id: uuid(),
      authId,
      document: formData.document,
      name: formData.name,
      roles: ['candidate'],
      email: formData.email,
      contact: '',
      summary: '',
      subtitle: '',
      extras: [],
    };
    createOrUpdateUser(data);
  };

  const handleFormError = (errors) => {
    console.log(errors);
    setError(Object.values(errors).find((error) => error.message)?.message);
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

          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <InputLabel
                  placeholder="nome completo"
                  type="text"
                  variant="inverse"
                  onChange={onChange}
                  value={value}
                  error={errors?.['name']?.message}
                />
              );
            }}
          />

          <Controller
            name="document"
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <InputMask
                  placeholder="cpf"
                  type="text"
                  mask={DOCUMENT_MASK}
                  variant="inverse"
                  onChange={onChange}
                  value={value}
                  error={errors?.['document']?.message}
                />
              );
            }}
          />

          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <InputLabel
                  type="email"
                  placeholder="email"
                  variant="inverse"
                  onChange={onChange}
                  value={value}
                  error={errors?.['email']?.message}
                />
              );
            }}
          />

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
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <InputPassword
                  placeholder="senha"
                  variant="inverse"
                  onChange={onChange}
                  value={value}
                  error={errors?.['password']?.message}
                />
              );
            }}
          />

          <Controller
            name="confirmPassword"
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <InputPassword
                  placeholder="repetir senha"
                  variant="inverse"
                  onChange={onChange}
                  value={value}
                  error={errors?.['confirmPassword']?.message}
                />
              );
            }}
          />

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
