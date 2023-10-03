import Link from 'next/link';
import { Description } from './Description';
import { Logo } from './Logo';
import { Navbar } from './Navbar';
import { SigninForm } from '@/components/recruiter/Signin/Signin';
import { Layout } from '@/components/shared/Layout';
import { Title } from '@/components/shared/Title';
import { recruiter } from '@/locales';

const SignIn = () => {
  return (
    <>
      <Layout.Left className="hidden lg:flex flex-col" variant="inverse">
        <Link href="/" className="mb-40 cursor-pointer">
          <Logo />
        </Link>
        <div className="flex flex-col w-5/6 gap-4">
          <Title variant="inverse">{recruiter.signin.title}</Title>
          <Description className="text-xl">{recruiter.signin.description}</Description>
        </div>
      </Layout.Left>

      <Layout.Right className="flex flex-col items-center" variant="inverse">
        <div className="lg:pl-10  w-full h-full flex flex-col items-center">
          <Navbar />
          <div className="w-full grow flex flex-col items-center justify-center gap-8">
            <Title variant="inverseForm">{recruiter.signin.form.title}</Title>

            <SigninForm variant="inverse" />
          </div>
        </div>
      </Layout.Right>
    </>
  );
};

export default SignIn;
