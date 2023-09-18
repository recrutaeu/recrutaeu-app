'use client';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { SigninForm } from '@/components/admin/Signin/Signin';
import { AccessibilityNavbar } from '@/components/shared/AccessibilityNavbar';
import { Layout } from '@/components/shared/Layout';
import { Title } from '@/components/shared/Title';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { admin } from '@/locales';

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
    titleForm: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-0',
    },
  },
};

const SignIn = ({ variant = 'default' }) => {
  const { theme } = useTheme();
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
          <Title>{admin.signin.title}</Title>
          <p className={twMerge('text-xl', style.text[theme])}>{admin.signin.description}</p>
        </div>
      </Layout.Left>

      <Layout.Right className="flex flex-col items-center">
        <div className="w-full flex justify-end">
          <AccessibilityNavbar />
        </div>

        <div className="w-full grow flex flex-col items-center justify-center gap-8">
          <Title className={twMerge('text-5xl', style.titleForm[theme])}>
            {admin.signin.form.title}
          </Title>

          <SigninForm />
        </div>
      </Layout.Right>
    </>
  );
};

export default SignIn;
