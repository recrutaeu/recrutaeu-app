import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { Input } from '@/components/shared/Input';
import { InputPassword } from '@/components/shared/InputPassword';
import { themes, withTheme } from '@/contexts/ThemeContext';
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

const SignupForm = withTheme(({ theme, variant = 'default' }) => {
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
            {recruiter.signup.form.description}
          </p>
          <Input.Root>
            <Input.Field type="text" label="empresa" id="company" />
          </Input.Root>
          <Input.Root>
            <Input.Field type="text" label="nome" id="name" />
          </Input.Root>
          <Input.Root type="emial" label="email" id="emial">
            <Input.Field label="email" />
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
          <InputPassword label="senha" id="password" />

          <InputPassword label="repetir senha" id="password" />

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
});

export { SignupForm };
