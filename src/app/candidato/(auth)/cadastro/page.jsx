'use client';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { PersonalForm } from '@/components/candidate/SignupForm';
import { AuthNavbar } from '@/components/shared/AuthNavbar';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { Layout } from '@/components/shared/Layout';
import { Title } from '@/components/shared/Title';
import { themes, withTheme } from '@/contexts/ThemeContext';
import { commons } from '@/locales';

const styles = {
  default: {
    logo: {
      [themes.DEFAULT]: 'logo_recrutaeu_green',
      [themes.DARK]: 'logo_recrutaeu_white',
      [themes.LIGHT]: 'logo_recrutaeu_black',
    },
    text: {
      [themes.DEFAULT]: 'text-neutral-0',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
    description: {
      [themes.DEFAULT]: 'text-neutral-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-0',
    },
  },
};

const SignUp = withTheme(({ theme, variant = 'default' }) => {
  const style = styles[variant];

  return (
    <>
      <Layout.Left className="hidden lg:flex flex-col">
        <div className="mb-40">
          <Image
            src={`/assets/images/${style.logo[theme]}.png`}
            width={120}
            height={120}
            alt="logo recrutaeu"
          />
        </div>
        <div className="flex flex-col  gap-4">
          <Title>{commons.signup.title}</Title>
          <p className={twMerge('text-xl', style.text[theme])}>
            {commons.signup.candidate.description}
          </p>
        </div>
      </Layout.Left>

      <Layout.Right className="flex flex-col items-center ">
        <AuthNavbar />
        <div className="w-full grow flex flex-col items-center justify-center gap-8">
          <Title variant="inverse">{commons.signup.form.title}</Title>
          <p
            className={twMerge('lg:hidden w-full text-base text-center', style.description[theme])}
          >
            {commons.signup.form.description}
          </p>
          <PersonalForm />
        </div>
        <div className="w-full flex justify-center gap-2">
          <p className={twMerge('text-lg', style.description[theme])}>
            {commons.signup.buttonLink.description}
          </p>
          <ButtonLink className="text-lg">{commons.signup.buttonLink.label}</ButtonLink>
        </div>
      </Layout.Right>
    </>
  );
});

export default SignUp;
