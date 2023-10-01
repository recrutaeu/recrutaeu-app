import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
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
import { candidate } from '@/locales/candidate';

const styles = {
  default: {
    description: {
      [themes.DEFAULT]: 'text-neutral-0',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
  },
};

const PersonalForm = ({ variant }) => {
  const style = styles['default'];
  const { theme } = useTheme();
  const router = useRouter();
  const [error, setError] = useState(undefined);

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
      setError(error.mensagem);
      return;
    }

    return router.push('/candidato/dashboard');
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
