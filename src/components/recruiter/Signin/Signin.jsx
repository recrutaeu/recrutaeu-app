import React from 'react';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
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
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [mensagem, setMensagem] = React.useState(false);
  const [mensagemErro, setMensagemErro] = React.useState('');

  const router = useRouter();

  const { theme } = useTheme();
  const style = styles['default'];

  const handleForm = async (event) => {
    console.log('aqui');
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      setMensagem(true);
      setMensagemErro(error);
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push('/recrutador/perfil');
  };

  return (
    <form className="w-full flex flex-col gap-6 items-center" onSubmit={handleForm}>
      <>
        <p className={twMerge('lg:hidden w-full text-base text-center', style.description[theme])}>
          {recruiter.signin.form.description}
        </p>
        <Input.Root variant={variant}>
          <Input.Field type="email" label="email" id="email" required setInputValue={setEmail} />
        </Input.Root>
        <InputPassword variant={variant} label="senha" setInputPassword={setPassword} />
        {mensagem ? (
          <p className={twMerge('w-full pl-4', style.description[theme])}>{mensagemErro}</p>
        ) : null}
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
