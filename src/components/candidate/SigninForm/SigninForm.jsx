import { ButtonLink } from '@/components/shared/ButtonLink';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { Input } from '@/components/shared/Input';
import { InputPassword } from '@/components/shared/InputPassword';
import { candidate } from '@/locales/candidate';

const PersonalForm = ({ variant }) => {
  return (
    <form className="w-full flex flex-col gap-6 items-center">
      <>
        <Input.Root variant={variant}>
          <Input.Field type="email" label="email" id="email" required />
        </Input.Root>
        <InputPassword variant={variant} label="password" id="password" />
        <div className="w-full">
          <ButtonLink variant={variant} className="flex justify-end text-sm lg:text-base">
            {candidate.signin.form.forgotPassword.label}
          </ButtonLink>
        </div>

        <ButtonPrimary type="button" className="mt-5" variant={variant}>
          {candidate.signin.form.button.label}
        </ButtonPrimary>
      </>
    </form>
  );
};

export { PersonalForm };
