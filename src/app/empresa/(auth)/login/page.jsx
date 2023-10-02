import Link from 'next/link';
import { Description } from './Description';
import { Logo } from './Logo';
import { Navbar } from './Navbar';
import { SigninForm } from '@/components/company/Signin/SigninForm';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { Layout } from '@/components/shared/Layout';
import { Title } from '@/components/shared/Title';
import { company } from '@/locales';

const SignIn = () => {
  return (
    <>
      <Layout.Left className="hidden lg:flex flex-col" variant="inverse">
        <Link href="/" className="mb-40 cursor-pointer">
          <Logo />
        </Link>
        <div className="flex flex-col w-5/6 gap-4">
          <Title variant="inverse">{company.signin.title}</Title>
          <Description className="text-xl">{company.signin.description}</Description>
        </div>
      </Layout.Left>

      <Layout.Right className="flex flex-col items-center" variant="inverse">
        <div className="lg:pl-10  w-full h-full flex flex-col items-center">
          <Navbar />
          <div className="w-full grow flex flex-col items-center justify-center gap-6  lg:gap-8">
            <Title className="text-4xl lg:text-5xl" variant="inverseForm">
              {company.signin.form.title}
            </Title>

            <SigninForm variant="inverse" />
          </div>
          <div className="w-full flex justify-center gap-2">
            <Description className="text-lg" variant="inverse">
              {company.signin.buttonLink.description}
            </Description>
            <ButtonLink href="/empresa/cadastro" variant="inverse" className="text-lg">
              {company.signin.buttonLink.label}
            </ButtonLink>
          </div>
        </div>
      </Layout.Right>
    </>
  );
};

export default SignIn;
