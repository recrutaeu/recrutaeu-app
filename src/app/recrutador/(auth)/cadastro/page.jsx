'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Description } from './Description';
import { Logo } from './Logo';
import { Navbar } from './Navbar';
import { SignupForm } from '@/components/recruiter/Signup';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { Layout } from '@/components/shared/Layout';
import { Title } from '@/components/shared/Title';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { recruiter } from '@/locales';

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
        <Link href="/" className="mb-40 cursor-pointer">
          <Logo />
        </Link>
        <div className="flex flex-col w-5/6 gap-4">
          <Title>{recruiter.signup.title}</Title>
          <Description className="text-xl" variant="inverse">
            {recruiter.signup.description}
          </Description>
        </div>
      </Layout.Left>

      <Layout.Right className="flex flex-col items-center ">
        <div className="lg:pl-10  w-full h-full flex flex-col items-center">
          <Navbar />
          <div className="w-full grow flex flex-col items-center justify-center gap-8">
            <Title variant="inverse" className="text-5xl">
              {recruiter.signup.form.title}
            </Title>

            <SignupForm />
          </div>
          <div className="w-full flex justify-center gap-2">
            <Description className="text-lg">{recruiter.signup.buttonLink.description}</Description>
            <ButtonLink href="/recrutador/login" className="text-lg">
              {recruiter.signup.buttonLink.label}
            </ButtonLink>
          </div>
        </div>
      </Layout.Right>
    </>
  );
};

export default SignUp;
