import { ButtonLink } from '@/components/shared/ButtonLink';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { Input } from '@/components/shared/Input';
import { InputPassword } from '@/components/shared/InputPassword';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { candidate } from '@/locales';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const styles = {
  default: {
    description: {
      [themes.DEFAULT]: 'text-neutral-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-0',
    },
  },
};

const PersonalForm = ({  variant = 'default' }) => {
  const { theme } = useTheme();
  const style = styles[variant];

  const formSteps = {
    profile: 'profile',
    password: 'password',
  };

  const [formStep, setFormStep] = useState(formSteps.profile);

  return (
    <form className="w-full flex flex-col gap-6 items-center">
      {formStep === formSteps.profile && (
        <>
          <p
            className={twMerge('lg:hidden w-full text-base text-center', style.description[theme])}
          >
            {candidate.signup.form.description}
          </p>
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
          <InputPassword label="senha" id="password" />

          <InputPassword label="repitir senha" id="password" />

          <ButtonPrimary type="submit" className="mt-5" onClick={() => {}}>
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
