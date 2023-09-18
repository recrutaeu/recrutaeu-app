'use client';
import { SignupForm } from '@/components/recruiter/Signup';
import { AuthNavbar } from '@/components/shared/AuthNavbar';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { Layout } from '@/components/shared/Layout';
import { Title } from '@/components/shared/Title';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { recruiter } from '@/locales';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

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

const SignUp = ({ variant = 'default' }) => {
  const { theme } = useTheme();
  const style = styles[variant];
  const route = useRouter();

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
          <Title>{recruiter.signup.title}</Title>
          <p className={twMerge('text-xl', style.text[theme])}>{recruiter.signup.description}</p>
        </div>
      </Layout.Left>

      <Layout.Right className="flex flex-col items-center ">
        <AuthNavbar
          onBack={() => {
            route.push('/recrutador/login');
          }}
        />
        <div className="w-full grow flex flex-col items-center justify-center gap-8">
          <Title variant="inverse" className="text-5xl">
            {recruiter.signup.form.title}
          </Title>

          <SignupForm />
        </div>
        <div className="w-full flex justify-center gap-2">
          <p className={twMerge('text-lg', style.description[theme])}>
            {recruiter.signup.buttonLink.description}
          </p>
          <ButtonLink href="/recrutador/login" className="text-lg">
            {recruiter.signup.buttonLink.label}
          </ButtonLink>
        </div>
      </Layout.Right>
    </>
  );
};

export default SignUp;
