import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { Input } from '@/components/shared/Input';
import { InputPassword } from '@/components/shared/InputPassword';
import { themes, useTheme } from '@/contexts/ThemeContext';
import signUp from '@/firebase/auth/signup';
import addData from '@/firebase/firestore/mutations';
import { recruiter } from '@/locales';

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

  const searchParams = useSearchParams();
  const empresaParam = searchParams.get('empresa');
  const emailParam = searchParams.get('email');
  const nomeParam = searchParams.get('nome');

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [nome, setNome] = useState();
  const [empresa, setEmpresa] = useState();

  const [mensagem, setMensagem] = React.useState(false);
  const [mensagemErro, setMensagemErro] = React.useState('');

  const router = useRouter();

  const formSteps = {
    profile: 'profile',
    password: 'password',
  };

  const handleForm = async (event) => {
    event.preventDefault();
    const { result, error } = await signUp(emailParam, password);

    if (error) {
      setMensagem(true);
      setMensagemErro(error);
      return console.log('ERRO -------- \n' + error);
    }

    handleFormFirestore(result.user.uid);
  };

  const handleFormFirestore = async (uid) => {
    const data = {
      cpf: '',
      nome: nomeParam,
      empresa: empresaParam,
      tipo: 3,
    };
    const { result, error } = await addData('users', uid, data);

    if (error) {
      return console.log(error);
    }
    return router.push('/home');
  };

  const [formStep, setFormStep] = useState(formSteps.profile);

  return (
    <form className="w-full flex flex-col gap-6 items-center" onSubmit={handleForm}>
      {formStep === formSteps.profile && (
        <>
          <p
            className={twMerge('lg:hidden w-full text-base text-center', style.description[theme])}
          >
            {recruiter.signup.form.description}
          </p>
          <Input.Root>
            <Input.Field type="text" label="empresa" id="company" valueInput={empresaParam} />
          </Input.Root>
          <Input.Root>
            <Input.Field type="text" label="nome" id="name" valueInput={nomeParam} />
          </Input.Root>
          <Input.Root type="emial" label="email" id="emial">
            <Input.Field label="email" valueInput={emailParam} />
          </Input.Root>

          <ButtonPrimary
            type="button"
            className="mt-5"
            onClick={() => setFormStep(formSteps.password)}
          >
            {recruiter.signup.form.buttonContinue.label}
          </ButtonPrimary>
        </>
      )}

      {formStep === formSteps.password && (
        <>
          <p
            className={twMerge('lg:hidden w-full text-base text-center', style.description[theme])}
          >
            {recruiter.signup.form.descriptionPassword}
          </p>
          <InputPassword label="senha" id="password" setInputPassword={setPassword} />

          <InputPassword label="repetir senha" id="password" />
          {mensagem ? (
            <p className={twMerge('w-full pl-4', style.description[theme])}>{mensagemErro}</p>
          ) : null}

          <ButtonPrimary type="submit" className="mt-5" onClick={() => {}}>
            {recruiter.signup.form.buttonSubmit.label}
          </ButtonPrimary>
          <ButtonLink onClick={() => setFormStep(formSteps.profile)}>
            {recruiter.signup.form.buttonBack.label}
          </ButtonLink>
        </>
      )}
    </form>
  );
};

export { SignupForm };
