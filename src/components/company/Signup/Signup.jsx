import React,{ useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { Input } from '@/components/shared/Input';
import { InputPassword } from '@/components/shared/InputPassword';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { company } from '@/locales';
import { useRouter } from 'next/navigation';
import signUp from '@/firebase/auth/signup';
import addData from '@/firebase/firestore/addData';


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

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [empresa, setEmpresa] = useState()
  const [nomeFantasia, setNomeFantasia] = useState()
  const [cnpj, setCnpj] = useState()

  const [mensagem, setMensagem] = React.useState(false)
  const [mensagemErro, setMensagemErro] = React.useState('')

  const router = useRouter()

  const formSteps = {
    profile: 'profile',
    password: 'password',
  };

  const [formStep, setFormStep] = useState(formSteps.profile);

  const handleForm = async (event) => {
    event.preventDefault()
    const { result, error } = await signUp(email, password);

    if (error) {
      setMensagem(true)
      setMensagemErro(error)
      return console.log("ERRO -------- \n"+error)
    }

    handleFormFirestore(result.user.uid)
  }

  const handleFormFirestore = async (uid) => {
    const data = {
      cnpj: cnpj,
      empresa: empresa,
      nomeFantasia: nomeFantasia,
      tipo: 2
    }
    const { result, error } = await addData('users', uid, data)

    if (error) {
      return console.log(error)
    }
    return router.push('/home')
  }




  return (
    <form className="w-full flex flex-col gap-6 items-center"onSubmit={handleForm}>
      {formStep === formSteps.profile && (
        <>
          <p
            className={twMerge('lg:hidden w-full text-base text-center', style.description[theme])}
          >
            {company.signup.form.description}
          </p>
          <Input.Root>
            <Input.Field type="text" label="empresa" id="company" setInputValue={setEmpresa}/>
          </Input.Root>
          <Input.Root>
            <Input.Field type="text" label="nome fantasia" id="companyFantasy" setInputValue={setNomeFantasia} />
          </Input.Root>
          <Input.Root>
            <Input.Field type="text" label="cnpj" id="cnpj" setInputValue={setCnpj}/>
          </Input.Root>
          <Input.Root type="emial" label="email" id="emial">
            <Input.Field label="email" setInputValue={setEmail}/>
          </Input.Root>

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
          <InputPassword label="senha" id="password" setInputPassword={setPassword} />

          <InputPassword label="repetir senha" id="password" />
          {mensagem? <p>{mensagemErro}</p> : null}

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
