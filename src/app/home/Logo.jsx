'use client';
import Image from 'next/image';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    logo: {
      [themes.DEFAULT]: 'logo_recrutaeu_green',
      [themes.DARK]: 'logo_recrutaeu_white',
      [themes.LIGHT]: 'logo_recrutaeu_black',
    },
  },
};

const LogoDesk = () => {
  const { theme } = useTheme();
  const style = styles['default'];

  return (
    <Image
      src={`/assets/images/${style.logo[theme]}.png`}
      width={140}
      height={140}
      alt="logo recrutaeu"
      className="hidden lg:block"
    />
  );
};

const LogoMobile = () => {
  const { theme } = useTheme();
  const style = styles['default'];

  return (
    <Image
      src={`/assets/images/${style.logo[theme]}.png`}
      width={162}
      height={162}
      alt="logo recrutaeu"
      className="lg:hidden mt-10"
    />
  );
};

export { LogoDesk, LogoMobile };
