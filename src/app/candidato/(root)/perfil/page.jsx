'use client';

import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { DescriptionSection } from './DescriptionSection';
import { ProfileSection } from './ProfileSection';
import { UserInfo } from './UserInfo';
import { PopupDescription } from '@/components/candidate/Popups/PopupDescription';
import { PopupEducation } from '@/components/candidate/Popups/PopupEducation';
import { PopupExperiences } from '@/components/candidate/Popups/PopupExperiences';
import { PopupExtras } from '@/components/candidate/Popups/PopupExtras';
import { Card } from '@/components/shared/Card';
import { Popup } from '@/components/shared/Popup';
import { Title } from '@/components/shared/Title';
import { themes, withTheme } from '@/contexts/ThemeContext';
import getDataUser from '@/firebase/firestore/getDataUser';
import { useAuthContext } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { commons } from '@/locales';

const Profile = withTheme(({ theme, variant = 'default' }) => {
  const [isOpenDescription, setIsOpenDescription] = useState(false);
  const [isOpenEducation, setIsOpenEducation] = useState(false);
  const [isOpenExperiences, setIsOpenExperiences] = useState(false);
  const [isOpenExtras, setIsOpenExtras] = useState(false);

  

  const { user } = useAuthContext();
  const router = useRouter();

  const [userLogged, setUserLogged] = useState('');
  const [escolaridade, setEscolaridade] = useState([]);
  const [experiencia, setExperiencia] = useState([]);
  const [cursos, setCursos] = useState([]);

  const [refreshComponente, setRefreshComponente] = useState(false);

  const handleReloadComponente = () => {
    setRefreshComponente(!refreshComponente);
  };

  React.useEffect(() => {
    if (user == null){
      router.push('/candidato/login');
    }else{
      useEffectFunction()
    }
  }, [user]);

  setTimeout(() => {
    handleReloadComponente();
  }, 200);

  async function useEffectFunction(){
    console.log("aqui");
    const { result, error } = await getDataUser('users', user.uid);
    result.forEach(((doc)=>{
      setUserLogged(doc.data())
    }))
    buscarEscolaridade()
    buscarExperiencia()
    buscarCursos()
    handleReloadComponente();
  }

  async function buscarEscolaridade(){
    const { result, error } = await getDataUser('escolaridade', user.uid);
    setEscolaridade([])
    result.forEach(((doc)=>{
      const arrayNovo = escolaridade
      arrayNovo.push(doc.data())
      setEscolaridade(arrayNovo)
    }))
  }

  async function buscarExperiencia(){
    const { result, error } = await getDataUser('emprego', user.uid);
    setExperiencia([])
    result.forEach(((doc)=>{
      const arrayNovo = experiencia
      arrayNovo.push(doc.data())
      setExperiencia(arrayNovo)
    }))
  }

  async function buscarCursos(){
    const { result, error } = await getDataUser('cursos', user.uid);
    setCursos([])
    result.forEach(((doc)=>{
      const arrayNovo = cursos
      arrayNovo.push(doc.data())
      setCursos(arrayNovo)
    }))
  }


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

  const userData = {
    name: userLogged.nome,
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
    education: [
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
    extras: [],
  };

  return (
    <div className="h-full overflow-auto ">
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
          <UserInfo userData={userLogged} />
          <DescriptionSection userData={userLogged} onEdit={() => setIsOpenDescription(true)} />
          <ProfileSection
            title={'Ultimas Empresas'}
            content={experiencia}
            onAdd={() => setIsOpenExperiences(true)}
          />
        </div>

        <div>
          <ProfileSection
            title={'Escolaridade'}
            content={escolaridade}
            onAdd={() => setIsOpenEducation(true)}
          />
          <ProfileSection
            title={'Cursos e idiomas'}
            content={cursos}
            onAdd={() => setIsOpenExtras(true)}
          />
        </div>
      </Card>
      <Popup title={'Descrição'} isOpen={isOpenDescription} setIsOpen={setIsOpenDescription}>
        <PopupDescription user={userLogged}/>
      </Popup>
      <Popup title={'Ultimas Empresas'} isOpen={isOpenExperiences} setIsOpen={setIsOpenExperiences}>
        <PopupExperiences />
      </Popup>
      <Popup title={'Escolaridade'} isOpen={isOpenEducation} setIsOpen={setIsOpenEducation}>
        <PopupEducation />
      </Popup>
      <Popup title={'Cursos e Idiomas'} isOpen={isOpenExtras} setIsOpen={setIsOpenExtras}>
        <PopupExtras />
      </Popup>
    </div>
  );
});

export default Profile;
