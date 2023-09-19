'use client';

import { twMerge } from 'tailwind-merge';
import { CandidateSideMenu } from '@/components/candidate/Menu';
import { AuthNavbar } from '@/components/shared/AuthNavbar';
import { ButtonContrast } from '@/components/shared/ButtonContrast';
import { ButtonFontZoom } from '@/components/shared/ButtonFontZoom';
import { Card } from '@/components/shared/Card';
import { Title } from '@/components/shared/Title';
import { themes, withTheme } from '@/contexts/ThemeContext';
import { ProfileSection } from './ProfileSection';
import { useState } from 'react';
import { UserInfo } from './UserInfo';
import { DescriptionSection } from './DescriptionSection';
import PopupContext from './PopupContext';
import { EditPopup } from './EditPopup';

const Profile = withTheme(({ theme, variant = 'default' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const togglePopup = () => setIsOpen(!isOpen);

  const styles = {
    default: {
      background: {
        [themes.DEFAULT]: 'bg-neutral-30',
        [themes.DARK]: 'bg-neutral-0',
        [themes.LIGHT]: 'bg-neutral-90',
      },
      text: {
        [themes.DEFAULT]: 'text-neutral-90',
        [themes.DARK]: 'text-neutral-0',
        [themes.LIGHT]: 'text-neutral-90',
      },
      card: {
        [themes.DEFAULT]: 'lg:bg-neutral-0',
        [themes.DARK]: 'lg:bg-neutral-90',
        [themes.LIGHT]: 'lg:bg-neutral-0',
      },
      icon: {
        [themes.DEFAULT]: 'text-primary-90',
        [themes.DARK]: 'text-neutral-0',
        [themes.LIGHT]: 'text-neutral-90',
      },
    },
  };

  const style = styles[variant];

  const userData = {
    name: 'Helena Bartone',
    subtitle: 'UI Designer',
    profile_img: '/assets/images/img_profile.png',
    contact: '+55 11 98977-3645',
    email: 'helena@email.com',
    summary: '',
    work_experience: [
      {
        id: 1,
        title: 'Fiap LTDA',
        subtitle: 'UI Design',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat',
        start: '20/04/2020',
        end: '20/04/22',
      },
    ],
    education: [],
    extras: [],
  };

  return (
    <PopupContext.Provider value={{ isOpen, togglePopup }}>
      <div className="flex flex-row">
        {isOpen && <EditPopup type={2} onSave={() => console.log(isOpen)} />}
        <CandidateSideMenu className="hidden lg:flex" />
        <div
          className={twMerge(
            'w-full h-full p-0 lg:px-7 lg:pb-14 lg:pt-0 lg:h-screen',
            style.background[theme],
          )}
        >
          <div className="hidden lg:flex lg:py-5 justify-end">
            <div className="flex">
              <ButtonContrast className="mr-5" />
              <ButtonFontZoom />
            </div>
          </div>

          <Title variant="inverse" className="hidden mb-3 lg:block lg:text-2xl lg:mb-5">
            Perfil
          </Title>

          <Card
            className={twMerge(
              'h-full rounded-none flex flex-col lg:overflow-auto lg:h-[85%] lg:p-8 lg:grid grid-cols-[1.3fr_1fr] lg:gap-10 grid-rows-none lg:rounded-3xl',
              style.card[theme],
            )}
          >
            <div className="block lg:hidden">
              <AuthNavbar />
            </div>

            <div>
              <UserInfo userData={userData} />
              <DescriptionSection userData={userData} />
              <ProfileSection title={'Ultimas Empresas'} content={userData.work_experience} />
            </div>

            <div>
              <ProfileSection title={'Escolaridade'} content={userData.education} />
              <ProfileSection title={'Cursos e idiomas'} content={userData.extras} />
            </div>
          </Card>
        </div>
      </div>
    </PopupContext.Provider>
  );
});

export default Profile;
