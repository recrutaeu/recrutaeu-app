'use client';
import Image from 'next/image';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    logo: {
      [themes.DEFAULT]: 'logo_recrutaeu_purple',
      [themes.DARK]: 'logo_recrutaeu_black',
      [themes.LIGHT]: 'logo_recrutaeu_white',
    },
  },
};

const Logo = () => {
  const { theme } = useTheme();
  const style = styles['default'];

  return (
    <Image
      src={`/assets/images/${style.logo[theme]}.png`}
      width={120}
      height={120}
      alt="logo recrutaeu"
    />
  );
};

export { Logo };
