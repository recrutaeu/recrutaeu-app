import Link from 'next/link';
import { Description } from './Descritption';
import { Logo } from './Logo';
import { Navbar } from './Navbar';
import { PersonalForm } from '@/components/candidate/SignupForm';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { Layout } from '@/components/shared/Layout';
import { Title } from '@/components/shared/Title';
import { candidate } from '@/locales';

const SignUp = () => {
  return (
    <>
      <Layout.Left className="hidden lg:flex flex-col">
        <Link href="/" className="mb-40 cursor-pointer">
          <Logo />
        </Link>
        <div className="flex flex-col w-4/5 gap-4">
          <Title>{candidate.signup.title}</Title>
          <Description>{candidate.signup.description}</Description>
        </div>
      </Layout.Left>

      <Layout.Right className="flex flex-col items-center ">
        <div className="lg:pl-10  w-full h-full flex flex-col items-center gap-10">
          <Navbar />
          <div className="w-full grow flex flex-col items-center justify-center  gap-5 lg:gap-8">
            <Title variant="inverse" className="text-5xl">
              {candidate.signup.form.title}
            </Title>

            <PersonalForm />
          </div>
          <div className="w-full flex justify-center gap-2">
            <Description className="text-lg" variant="inverse">
              {candidate.signup.buttonLink.description}
            </Description>
            <ButtonLink href="/candidato/login" className="text-lg">
              {candidate.signup.buttonLink.label}
            </ButtonLink>
          </div>
        </div>
      </Layout.Right>
    </>
  );
};

export default SignUp;
