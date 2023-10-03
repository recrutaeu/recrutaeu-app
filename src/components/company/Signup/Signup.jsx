'use client';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { isCNPJ } from 'validation-br';
import { z } from 'zod';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { InputLabel } from '@/components/shared/InputLabel';
import { InputMask } from '@/components/shared/InputMask';
import { InputPassword } from '@/components/shared/InputPassword';
import { CNPJ_MASK } from '@/consts/mask';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { useToast } from '@/contexts/ToastContext';
import signUp from '@/firebase/auth/signup';
import { useCreateOrUpdateUser } from '@/firebase/firestore/mutations';
import { uuid } from '@/firebase/uuid';
import { company } from '@/locales';

const styles = {
  default: {
    description: {
      [themes.DEFAULT]: 'text-neutral-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-0',
    },
  },
};

const SignupForm = ({ variant = 'default' }) => {
  const { theme } = useTheme();
  const style = styles[variant];
  const router = useRouter();
  const { setToast } = useToast();

  const formSteps = {
    profile: 'profile',
    password: 'password',
  };

  const [formStep, setFormStep] = useState(formSteps.profile);

  const formSchema = z
    .object({
      email: z.string().min(1, 'O email é obrigatório.').email('Por favor insira um email válido.'),
      password: z
        .string()
        .min(1, 'A senha é  obrigatória')
        .min(6, 'A senha precisa ter pelo menos 6 caracteres'),
      confirmPassword: z.string().min(1, 'Confirmação de senha é obrigatório'),
      document: z
        .string()
        .min(1, 'O CNPJ é obrigatório.')
        .transform((document) => document.replace(/\D/g, ''))
        .refine((document) => isCNPJ(document), 'Insira um CNPJ válido.'),
      name: z.string().min(1, 'A razão social é obrigatória'),
      nickname: z.string().min(1, 'O nome fantasia é obrigatório'),
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
      nickname: '',
      document: '',
    },
    resolver: zodResolver(formSchema),
  });

  const { mutate: createOrUpdateUser } = useCreateOrUpdateUser({
    onSuccess: () => {
      router.push('/empresa/adicionar-colaborador');
    },
    onError: (e) => {
      setToast(e.message);
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
      nickname: formData.nickname,
      roles: ['company'],
      email: formData.email,
    };
    createOrUpdateUser(data);
  };

  return (
    <form className="w-full flex flex-col gap-6 items-center" onSubmit={handleSubmit(handleForm)}>
      {formStep === formSteps.profile && (
        <>
          <p
            className={twMerge('lg:hidden w-full text-base text-center', style.description[theme])}
          >
            {company.signup.form.description}
          </p>
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <InputLabel
                  placeholder="razão social"
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
            name="nickname"
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <InputLabel
                  placeholder="nome fantasia"
                  type="text"
                  variant="inverse"
                  onChange={onChange}
                  value={value}
                  error={errors?.['nickname']?.message}
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
                  variant="inverse"
                  placeholder="cnpj"
                  type="text"
                  mask={CNPJ_MASK}
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
            {company.signup.form.buttonContinue.label}
          </ButtonPrimary>
        </>
      )}

      {formStep === formSteps.password && (
        <>
          <p
            className={twMerge('lg:hidden w-full text-base text-center', style.description[theme])}
          >
            {company.signup.form.descriptionPassword}
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

          <ButtonPrimary type="submit" className="mt-5" onClick={() => {}}>
            {company.signup.form.buttonSubmit.label}
          </ButtonPrimary>
          <ButtonLink onClick={() => setFormStep(formSteps.profile)}>
            {company.signup.form.buttonBack.label}
          </ButtonLink>
        </>
      )}
    </form>
  );
};

export { SignupForm };
