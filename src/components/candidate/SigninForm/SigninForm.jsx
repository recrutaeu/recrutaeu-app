import { ButtonLink } from '@/components/shared/ButtonLink';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { Input } from '@/components/shared/Input';
import { InputPassword } from '@/components/shared/InputPassword';
import signIn from '@/firebase/auth/signin';
import { candidate } from '@/locales/candidate';
import { useRouter } from 'next/navigation';
import React from 'react';

const PersonalForm = ({ variant }) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [mensagem, setMensagem] = React.useState(false)
  const [mensagemErro, setMensagemErro] = React.useState('')
  const router = useRouter()

  const handleForm = async (event) => {
    console.log("aqui")
    event.preventDefault()

    const { result, error } = await signIn(email, password);

    if (error) {
      setMensagem(true)
      setMensagemErro(error)
      return console.log(error)
    }

    // else successful
    console.log(result)
    return router.push("/candidato/profile")
}


  return (
    <form className="w-full flex flex-col gap-6 items-center" onSubmit={handleForm}>
      <>
        <Input.Root variant={variant}>
          <Input.Field type="email" label="email" id="email" required setInputValue={setEmail}/>
        </Input.Root>

        
        <InputPassword variant={variant} label="password" id="password" setInputPassword={setPassword}/>
        {mensagem? <p>{mensagemErro}</p> : null}
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
