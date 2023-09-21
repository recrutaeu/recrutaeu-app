'use client';
import { AuthNavbar } from '@/components/shared/AuthNavbar';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { InputPassword } from '@/components/shared/InputPassword';
import { Layout } from '@/components/shared/Layout';
import { Title } from '@/components/shared/Title';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { commons } from '@/locales';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

const styles = {
  default: {
    logo: {
      [themes.DEFAULT]: 'logo_recrutaeu_purple',
      [themes.DARK]: 'logo_recrutaeu_black',
      [themes.LIGHT]: 'logo_recrutaeu_white',
    },
    text: {
      [themes.DEFAULT]: 'text-neutral-0',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
    image: {
      [themes.DEFAULT]: 'grayscale-0',
      [themes.DARK]: 'grayscale',
      [themes.LIGHT]: 'grayscale',
    },
  },
};

const NewPassword = ({}) => {
  const { theme } = useTheme();
  const style = styles['default'];
  const route = useRouter();

  return (
    <>
      <Layout.Left variant="inverse" className="hidden relative xl:flex flex-col">
        <div>
          <Image
            src={`/assets/images/${style.logo[theme]}.png`}
            width={120}
            height={120}
            alt="logo recrutaeu"
          />
        </div>
        <div className="w-full">
          <Title className="w-[500px] text-7xl absolute top-[240px] text-primary-90 z-10 leading-[80px]">
            Estamos sempre de prontidão para de ajudar.
          </Title>
          <Image
            className={twMerge(
              'hidden lg:block rounded-tl-[100px] absolute top-[270px] right-36',
              style.image[theme],
            )}
            src={'/assets/images/image_password.jpg'}
            width={390}
            height={390}
            alt="logo recrutaeu"
          />
        </div>
      </Layout.Left>

      <Layout.Right variant="inverse" className="flex flex-col items-center ">
        <AuthNavbar
          variant="inverse"
          onBack={() => {
            route.push('/home');
          }}
        />

        <form className="w-full flex flex-col grow gap-9 justify-center">
          <Title variant="inverseForm" className="text-center text-3xl">
            {commons.newPassword.titleForm}
          </Title>
          <div>
            <InputPassword variant="inverse" label="nova senha" id="password" />
            <p
              className={twMerge(
                'text-xs font-light text-center leading-7 md:text-base md:leading-10',
                style.text[theme],
              )}
            >
              {commons.newPassword.description}
            </p>
          </div>
          <InputPassword variant="inverse" label="repetir senha" id="password" />
          <div className="flex justify-center">
            <ButtonPrimary variant="inverse">{commons.newPassword.buttonForm.label}</ButtonPrimary>
          </div>
        </form>
      </Layout.Right>
    </>
  );
};

export default NewPassword;
