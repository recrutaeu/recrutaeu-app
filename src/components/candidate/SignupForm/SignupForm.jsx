import { useState } from 'react';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { Input } from '@/components/shared/Input';
import { commons } from '@/locales';

const PersonalForm = () => {
  const formSteps = {
    profile: 'profile',
    password: 'password',
  };

  const [formStep, setFormStep] = useState(formSteps.profile);
  const [passwordInputType, setPasswordInputType] = useState('password');

  return (
    <form className="w-full flex flex-col gap-6 items-center">
      {formStep === formSteps.profile && (
        <>
          <Input.Root>
            <Input.Field type="text" label="nome" id="name" />
          </Input.Root>
          <Input.Root>
            <Input.Field type="text" label="cpf" id="document" />
          </Input.Root>
          <Input.Root type="emial" id="emial">
            <Input.Field label="email" />
          </Input.Root>

          <ButtonPrimary
            type="button"
            className="mt-5"
            onClick={() => setFormStep(formSteps.password)}
          >
            {commons.signup.form.buttonContinue.label}
          </ButtonPrimary>
        </>
      )}

      {formStep === formSteps.password && (
        <>
          <Input.Root>
            <Input.Field type={passwordInputType} label="senha" id="name" />
          </Input.Root>
          <Input.Root>
            <Input.Field type={passwordInputType} label="confirmar senha" id="document" />
          </Input.Root>

          <ButtonPrimary type="submit" className="mt-5" onClick={() => {}}>
            {commons.signup.form.buttonSubmit.label}
          </ButtonPrimary>
          <ButtonLink onClick={() => setFormStep(formSteps.profile)}>
            {commons.signup.form.buttonBack.label}
          </ButtonLink>
        </>
      )}
    </form>
  );
};

export { PersonalForm };
