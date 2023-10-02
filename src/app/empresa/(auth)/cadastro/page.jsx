import Link from 'next/link';
import { Description } from './Description';
import { Logo } from './Logo';
import { Navbar } from './Navbar';
import { SignupForm } from '@/components/company/Signup';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { Layout } from '@/components/shared/Layout';
import { Title } from '@/components/shared/Title';
import { company } from '@/locales';

const SignUp = () => {
  return (
    <>
      <Layout.Left className="hidden lg:flex flex-col">
        <Link href="/" className="mb-40 cursor-pointer">
          <Logo />
        </Link>
        <div className="flex flex-col w-5/6 gap-4">
          <Title>{company.signup.title}</Title>
          <Description variant="inverse" className="text-xl">
            {company.signup.description}
          </Description>
        </div>
      </Layout.Left>

      <Layout.Right className="flex flex-col items-center ">
        <div className="lg:pl-10  w-full h-full flex flex-col items-center gap-10">
          <Navbar />

          <div className="w-full grow flex flex-col items-center justify-center gap-8">
            <Title variant="inverse" className="text-5xl">
              {company.signup.form.title}
            </Title>

            <SignupForm />
          </div>
          <div className="w-full flex justify-center gap-2">
            <Description className="text-lg">{company.signup.buttonLink.description}</Description>
            <ButtonLink href="/empresa/login" className="text-lg">
              {company.signup.buttonLink.label}
            </ButtonLink>
          </div>
        </div>
      </Layout.Right>
    </>
  );
};

export default SignUp;
