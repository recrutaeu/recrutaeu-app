'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { PersonalForm } from '@/components/candidate/SigninForm/SigninForm';
import { AuthNavbar } from '@/components/shared/AuthNavbar';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { Layout } from '@/components/shared/Layout';
import { Title } from '@/components/shared/Title';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { candidate } from '@/locales/candidate';

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
    description: {
      [themes.DEFAULT]: 'text-neutral-0',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
    titleForm: {
      [themes.DEFAULT]: 'text-primary-40',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
  },
};

const SignIn = ({ variant = 'default' }) => {
  const { theme } = useTheme();
  const style = styles[variant];
  const route = useRouter();

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
        <div className="flex flex-col w-3/4 gap-4">
          <Title variant="inverse">{candidate.signin.title}</Title>
          <p className={twMerge('text-xl', style.text[theme])}>{candidate.signin.description}</p>
        </div>
      </Layout.Left>

      <Layout.Right className="flex flex-col items-center" variant="inverse">
        <div className="w-full flex justify-end">
          <AuthNavbar
            variant="inverse"
            onBack={() => {
              route.push('/');
            }}
            className='w-fit'
          />
        </div>
        <div className="w-full grow flex flex-col items-center justify-center gap-8">
          <Title className={twMerge('text-5xl', style.titleForm[theme])}>
            {candidate.signin.form.title}
          </Title>
          <p
            className={twMerge('lg:hidden w-full text-base text-center', style.description[theme])}
          >
            {candidate.signin.form.description}
          </p>
          <PersonalForm variant="inverse" className="w-3/4"/>
        </div>
        <div className="w-full flex justify-center gap-2">
          <p className={twMerge('text-lg', style.description[theme])}>
            {candidate.signin.buttonLink.description}
          </p>
          <ButtonLink href="/candidato/cadastro" variant="inverse" className="text-lg">
            {candidate.signin.buttonLink.label}
          </ButtonLink>
        </div>
      </Layout.Right>
    </>
  );
};

export default SignIn;
