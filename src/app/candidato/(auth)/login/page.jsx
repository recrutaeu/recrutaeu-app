import Link from 'next/link';
import { Description } from './Description';
import { Logo } from './Logo';
import { Navbar } from './Navbar';
import { PersonalForm } from '@/components/candidate/SigninForm/SigninForm';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { Layout } from '@/components/shared/Layout';
import { Title } from '@/components/shared/Title';
import { candidate } from '@/locales/candidate';

const SignIn = () => {
  return (
    <>
      <Layout.Left className="hidden lg:flex flex-col" variant="inverse">
        <Link href="/" className="mb-40 cursor-pointer">
          <Logo />
        </Link>
        <div className="flex flex-col w-5/6 gap-4">
          <Title variant="inverse">{candidate.signin.title}</Title>
          <Description>{candidate.signin.description}</Description>
        </div>
      </Layout.Left>

      <Layout.Right className="flex flex-col items-center" variant="inverse">
        <div className="lg:pl-10  w-full h-full flex flex-col items-center">
          <Navbar />
          <div className="w-full grow flex flex-col items-center justify-center gap-6 lg:gap-8">
            <Title className="text-4xl lg:text-5xl" variant="inverseForm">
              {candidate.signin.form.title}
            </Title>
            <Description
              variant="inverse"
              className="lg:hidden w-full text-sm lg:text-base text-center"
            >
              {candidate.signin.form.description}
            </Description>
            <PersonalForm variant="inverse" className="w-3/4" />
          </div>
          <div className="w-full flex justify-center gap-2">
            <Description variant="inverse" className="text-base lg:text-lg">
              {candidate.signin.buttonLink.description}
            </Description>
            <ButtonLink
              href="/candidato/cadastro"
              variant="inverse"
              className="text-base lg:text-lg"
            >
              {candidate.signin.buttonLink.label}
            </ButtonLink>
          </div>
        </div>
      </Layout.Right>
    </>
  );
};

export default SignIn;
