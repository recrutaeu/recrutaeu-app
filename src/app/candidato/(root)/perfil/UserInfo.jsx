'use client';

import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { Title } from '@/components/shared/Title';
import { withTheme, themes } from '@/contexts/ThemeContext';

const UserInfo = withTheme(({ userData, theme, variant = 'default', onEdit }) => {
  const styles = {
    default: {
      text: {
        [themes.DEFAULT]: 'text-neutral-90',
        [themes.DARK]: 'text-neutral-0',
        [themes.LIGHT]: 'text-neutral-90',
      },
      icon: {
        [themes.DEFAULT]: 'text-primary-90',
        [themes.DARK]: 'text-neutral-0',
        [themes.LIGHT]: 'text-neutral-90',
      },
      image: {
        [themes.DEFAULT]: 'grayscale-0 border-primary-90',
        [themes.DARK]: 'grayscale border-neutral-0',
        [themes.LIGHT]: 'grayscale border-neutral-90',
      },
    },
  };

  const style = styles[variant];

  return (
    <div className="flex flex-col justify-center items-center mb-5 lg:my-5 relative lg:flex-row lg:justify-start lg:mt-0">
      <Image
        src="/assets/images/img_profile.png"
        width={100}
        height={100}
        alt="profile"
        className={twMerge('rounded-full border-2 mb-2 lg:w-[150px] lg:mr-5', style.image[theme])}
      />

      <div>
        <div className="flex flex-col items-center lg:items-start">
          <Title variant="bgTransform" className="text-base lg:text-xl">
            {userData.nome}
          </Title>
          <Title variant="bgTransform" className="text-sm lg:text-base">
            {userData.cargo}
          </Title>
        </div>
      </div>
    </div>
  );
});

export { UserInfo };
