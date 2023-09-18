import { ButtonLink } from '@/components/shared/ButtonLink';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { Input } from '@/components/shared/Input';
import { InputPassword } from '@/components/shared/InputPassword';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { admin } from '@/locales';
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

const SigninForm = ({ variant = 'default' }) => {
  const { theme } = useTheme();
  const style = styles['default'];

  return (
    <form className="w-full flex flex-col gap-6 items-center">
      <>
        <p className={twMerge('lg:hidden w-full text-base text-center', style.description[theme])}>
          {admin.signin.form.description}
        </p>
        <Input.Root variant={variant}>
          <Input.Field type="email" label="email" id="email" required />
        </Input.Root>
        <InputPassword variant={variant} label="senha" />
        <div className="w-full">
          <ButtonLink variant={variant} className="flex justify-end text-sm lg:text-base">
            {admin.signin.form.forgotPassword.label}
          </ButtonLink>
        </div>

        <ButtonPrimary type="button" className="mt-5" variant={variant}>
          {admin.signin.form.button.label}
        </ButtonPrimary>
      </>
    </form>
  );
};

export { SigninForm };
