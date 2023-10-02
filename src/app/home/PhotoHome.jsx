'use client';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    image: {
      [themes.DEFAULT]: 'grayscale-0',
      [themes.DARK]: 'grayscale',
      [themes.LIGHT]: 'grayscale',
    },
  },
};

const PhotoHome = () => {
  const { theme } = useTheme();
  const style = styles['default'];

  return (
    <Image
      className={twMerge(
        'hidden lg:block rounded-tl-[100px] absolute top-1/4 right-0',
        style.image[theme],
      )}
      src={'/assets/images/photo_home.jpg'}
      width={350}
      height={350}
      alt="logo recrutaeu"
    />
  );
};

export { PhotoHome };
