'use client';

import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { Title } from '@/components/shared/Title';
import { withTheme, themes } from '@/contexts/ThemeContext';

const UserInfo = withTheme(({ userData, theme, variant = 'default', onEdit }) => {
  const styles = {
    default: {
      text: {
        [themes.DEFAULT]: 'text-neutral-0 md:text-neutral-90',
        [themes.DARK]: 'text-neutral-90 md:text-neutral-0',
        [themes.LIGHT]: 'text-neutral-0 md:text-neutral-90',
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
    <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-start">
      <Image
        src="/assets/images/img_profile.png"
        width={80}
        height={80}
        alt="profile"
        className={twMerge('rounded-full border-2 mb-2 lg:w-[150px] lg:mr-5', style.image[theme])}
      />

      <div>
        <div className="flex flex-col items-center lg:items-start">
          <Title variant="bgTransformSecundary" className="text-base lg:text-xl">
            {userData.name}
          </Title>
        </div>
      </div>
    </div>
  );
});

export { UserInfo };
