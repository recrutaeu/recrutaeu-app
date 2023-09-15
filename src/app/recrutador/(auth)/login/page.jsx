'use client';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { SigninForm } from '@/components/recruiter/Signin/Signin';
import { AuthNavbar } from '@/components/shared/AuthNavbar';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { Layout } from '@/components/shared/Layout';
import { Title } from '@/components/shared/Title';
import { themes, withTheme } from '@/contexts/ThemeContext';
import { recruiter } from '@/locales';

const styles = {
  default: {
    logo: {
      [themes.DEFAULT]: 'logo_recrutaeu_purple',
      [themes.DARK]: 'logo_recrutaeu_black',
      [themes.LIGHT]: 'logo_recrutaeu_white',
    },
    text: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-0',
    },
    titleForm: {
      [themes.DEFAULT]: 'text-primary-40',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
  },
};

const SignIn = withTheme(({ theme, variant = 'default' }) => {
  const style = styles[variant];

  return (
    <>
      <Layout.Left className="hidden lg:flex flex-col" variant="inverse">
        <div className="mb-40">
          <Image
            src={`/assets/images/${style.logo[theme]}.png`}
            width={120}
            height={120}
            alt="logo recrutaeu"
          />
        </div>
        <div className="flex flex-col  gap-4">
          <Title variant="inverse">{recruiter.signin.title}</Title>
          <p className={twMerge('text-xl', style.text[theme])}>{recruiter.signin.description}</p>
        </div>
      </Layout.Left>

      <Layout.Right className="flex flex-col items-center" variant="inverse">
        <AuthNavbar variant="inverse" />
        <div className="w-full grow flex flex-col items-center justify-center gap-8">
          <Title className={twMerge('text-5xl', style.titleForm[theme])}>
            {recruiter.signin.form.title}
          </Title>

          <SigninForm variant="inverse" />
        </div>
      </Layout.Right>
    </>
  );
});

export default SignIn;
