'use client';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { InputLabel } from '@/components/shared/InputLabel';
import { InputPassword } from '@/components/shared/InputPassword';
import { useToast } from '@/contexts/ToastContext';
import signIn from '@/firebase/auth/signin';
import { recruiter } from '@/locales';

const SigninForm = () => {
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
    const { error } = await signIn(email, password);

    if (error) {
      setToast(error);
      return;
    }

    return router.push('/recrutador/dashboard');
  };

  return (
    <form className="w-full flex flex-col gap-6 items-center" onSubmit={handleSubmit(handleForm)}>
      <>
        {/* <p className={twMerge('lg:hidden w-full text-base text-center', style.description[theme])}>
          {recruiter.signin.form.description}
        </p> */}
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <InputLabel
                type="email"
                placeholder="email"
                onChange={onChange}
                value={value}
                error={errors?.['email']?.message}
              />
            );
          }}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <InputPassword
                placeholder="senha"
                onChange={onChange}
                value={value}
                error={errors?.['password']?.message}
              />
            );
          }}
        />
        <div className="w-full">
          <ButtonLink className="flex justify-end text-sm lg:text-base">
            {recruiter.signin.form.forgotPassword.label}
          </ButtonLink>
        </div>

        <ButtonPrimary variant='inverse' type="submit" className="mt-5">
          {recruiter.signin.form.button.label}
        </ButtonPrimary>
      </>
    </form>
  );
};

export { SigninForm };
