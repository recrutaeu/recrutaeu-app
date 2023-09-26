'use client';

import React, { useCallback, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { DescriptionSection } from './DescriptionSection';
import { ProfileSection } from './ProfileSection';
import { ProfileSkills } from './ProfileSkills';
import { UserInfo } from './UserInfo';
import { PopupDescription } from '@/components/candidate/Popups/PopupDescription';
import { PopupEducation } from '@/components/candidate/Popups/PopupEducation';
import { PopupExperiences } from '@/components/candidate/Popups/PopupExperiences';
import { PopupExtras } from '@/components/candidate/Popups/PopupExtras';
import { PopupSkills } from '@/components/candidate/Popups/PopupSkills/PopupSkills';
import { Card } from '@/components/shared/Card';
import { Poup } from '@/components/shared/Poup';
import { Title } from '@/components/shared/Title';
import { useAuthContext } from '@/contexts/AuthContext';
import { themes, withTheme } from '@/contexts/ThemeContext';
import getDataUser, { useFindUserById } from '@/firebase/firestore/queries';
import { commons } from '@/locales';

const Profile = withTheme(({ theme, variant = 'default' }) => {
  const [isOpenDescription, setIsOpenDescription] = useState(false);
  const [isOpenEducation, setIsOpenEducation] = useState(false);
  const [isOpenExperiences, setIsOpenExperiences] = useState(false);
  const [isOpenExtras, setIsOpenExtras] = useState(false);
  const [isOpenSkills, setIsOpenSkills] = useState(false);

  const { user: authUser } = useAuthContext();
  const { data: user } = useFindUserById({ id: authUser.id, enabled: !!authUser?.id });

  const [experience, setExperience] = useState();
  const [description, setDescription] = useState();
  const [education, setEducation] = useState();
  const [extras, setExtras] = useState();

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
        [themes.DEFAULT]: 'md:bg-neutral-0',
        [themes.DARK]: 'md:bg-neutral-90',
        [themes.LIGHT]: 'md:bg-neutral-0',
      },
      icon: {
        [themes.DEFAULT]: 'text-primary-90',
        [themes.DARK]: 'text-neutral-0',
        [themes.LIGHT]: 'text-neutral-90',
      },
    },
  };

  const style = styles[variant];

  return (
    <div className="h-full overflow-auto px-5">
      <Title className="text-3xl mb-2" variant="inverse">
        {commons.profile.titlePage}
      </Title>
      <Card
        className={twMerge(
          'h-full md:h-[90%] bg-neutral-120 p-0 flex flex-col md:overflow-auto md:p-8 lg:grid grid-cols-[1.3fr_1fr] md:gap-10  md:rounded-3xl',
          style.card[theme],
        )}
      >
        <div>
          <UserInfo userData={user} />
          <DescriptionSection
            userData={user}
            onEdit={(item) => {
              setDescription(item);
              setIsOpenDescription(true);
            }}
          />
          <ProfileSection
            title={'Ultimas Empresas'}
            content={user?.experiencies}
            onAdd={() => setIsOpenExperiences(true)}
            onEdit={(item) => {
              setExperience(item);
              setIsOpenExperiences(true);
            }}
          />
        </div>

        <div>
          <ProfileSection
            title={'Escolaridade'}
            content={user?.education}
            onAdd={() => setIsOpenEducation(true)}
            onEdit={(item) => {
              setEducation(item);
              setIsOpenEducation(true);
            }}
          />
          <ProfileSection
            title={'Cursos e idiomas'}
            content={user?.extras}
            onAdd={() => setIsOpenExtras(true)}
            onEdit={(item) => {
              setExtras(item);
              setIsOpenEducation(true);
            }}
          />
          <ProfileSkills
            title={'Skills'}
            skills={user?.skills || []}
            onAdd={() => setIsOpenSkills(true)}
          />
        </div>
      </Card>
      <Poup
        variant="inverseForm"
        title={'Descrição'}
        isOpen={isOpenDescription}
        setIsOpen={setIsOpenDescription}
      >
        <PopupDescription editItem={user} setIsOpen={setIsOpenDescription} user={user} />
      </Poup>
      <Poup
        variant="inverseForm"
        title={'Ultimas Empresas'}
        isOpen={isOpenExperiences}
        setIsOpen={setIsOpenExperiences}
      >
        <PopupExperiences setIsOpen={setIsOpenExperiences} editItem={experience} />
      </Poup>
      <Poup
        variant="inverseForm"
        title={'Escolaridade'}
        isOpen={isOpenEducation}
        setIsOpen={setIsOpenEducation}
      >
        <PopupEducation setIsOpen={setIsOpenEducation} editItem={education} />
      </Poup>
      <Poup
        variant="inverseForm"
        title={'Cursos e Idiomas'}
        isOpen={isOpenExtras}
        setIsOpen={setIsOpenExtras}
      >
        <PopupExtras setIsOpen={setIsOpenExtras} editItem={extras} />
      </Poup>
      <Poup
        variant="inverseForm"
        title={'Habilidades'}
        isOpen={isOpenSkills}
        setIsOpen={setIsOpenSkills}
      >
        <PopupSkills skills={user?.skills || []} setIsOpen={setIsOpenSkills} user={user} />
      </Poup>
    </div>
  );
});

export default Profile;
