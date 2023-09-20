import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { Input } from '@/components/shared/Input';
import { InputPassword } from '@/components/shared/InputPassword';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { candidate } from '@/locales';
import signUp from '@/firebase/auth/signup';
import { useRouter } from 'next/navigation';
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

const PersonalForm = ({ variant = 'default' }) => {
  const { theme } = useTheme();
  const style = styles[variant];

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [nome, setNome] = useState()
  const [cpf, setCpf] = useState()
  const router = useRouter()
  const formSteps = {
    profile: 'profile',
    password: 'password',
  };

  useEffect(()=>{
    console.log(password)
  }, [password])

  const [formStep, setFormStep] = useState(formSteps.profile);

  const handleForm = async (event) => {
    event.preventDefault()

    const { result, error } = await signUp(email, password);

    
    console.log(email)
    console.log(password)
    console.log("--------- caiu aqui tbm")
    if (error) {
        return console.log("ERRO -------- \n"+error)
    }

    // else successful
    console.log("CERTO -------- \n"+result)
    handleFormFirestore(result.user.uid)
  }

  const handleFormFirestore = async (uid) => {
    const data = {
      cpf: cpf,
      nome: nome,
      tipo: 1
    }
    const { result, error } = await addData('users', uid, data)

    if (error) {
      return console.log(error)
    }
    return router.push('/home')
  }
  

  return (
    <form className="w-full flex flex-col gap-6 items-center" onSubmit={handleForm}>
      {formStep === formSteps.profile && (
        <>
          <p
            className={twMerge('lg:hidden w-full text-base text-center', style.description[theme])}
          >
            {candidate.signup.form.description}
          </p>
          <Input.Root>
            <Input.Field type="text" label="nome" id="name" setInputValue={setNome}/>
          </Input.Root>
          <Input.Root>
            <Input.Field type="text" label="cpf" id="document" setInputValue={setCpf}/>
          </Input.Root>
          <Input.Root type="emial" id="emial" >
            <Input.Field label="email" setInputValue={setEmail} />
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
          <InputPassword label="senha" id="password"/>

          <InputPassword label="repitir senha" id="password" setInputPassword={setPassword}/>

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
