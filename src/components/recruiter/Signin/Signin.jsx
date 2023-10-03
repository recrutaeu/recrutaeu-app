'use client';
import { useState } from 'react';
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
import signIn from '@/firebase/auth/signin';
import { recruiter } from '@/locales';

const styles = {
  default: {
    description: {
      [themes.DEFAULT]: 'text-neutral-0',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
  },
};

const SigninForm = ({ variant = 'default' }) => {
  const router = useRouter();
  const { theme } = useTheme();
  const style = styles['default'];

  const [error, setError] = useState(undefined);

  const formSchema = z.object({
    email: z.string().email('Email invalido').min(1, 'o email é obrigatório'),
    password: z
      .string()
      .min(1, 'A senha é  obrigatória')
      .min(6, 'A senha precisa ter pelo menos 6 caracteres'),
  });

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  });

  const handleForm = async (data) => {
    const { email, password } = data;
    const { error } = await signIn(email, password);

    if (error) {
      setError(error.mensagem);
      return;
    }

    return router.push('/recrutador/dashboard');
  };

  const handleFormError = (errors) => {
    setError(Object.values(errors).find((error) => error.message)?.message);
  };

  return (
    <form
      className="w-full flex flex-col gap-6 items-center"
      onSubmit={handleSubmit(handleForm, handleFormError)}
    >
      <>
        <p className={twMerge('lg:hidden w-full text-base text-center', style.description[theme])}>
          {recruiter.signin.form.description}
        </p>
        <Input.Root variant={variant}>
          <Input.Field type="email" label="email" register={register('email')} />
        </Input.Root>
        <InputPassword variant={variant} label="senha" register={register('password')} />
        {error && <p className={twMerge('w-full pl-4', style.description[theme])}>{error}</p>}
        <div className="w-full">
          <ButtonLink variant={variant} className="flex justify-end text-sm lg:text-base">
            {recruiter.signin.form.forgotPassword.label}
          </ButtonLink>
        </div>

        <ButtonPrimary type="submit" className="mt-5" variant={variant}>
          {recruiter.signin.form.button.label}
        </ButtonPrimary>
      </>
    </form>
  );
};

export { SigninForm };
