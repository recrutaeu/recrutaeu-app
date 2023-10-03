'use client';

import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { AlertHome } from './AlertHome';
import { LastApplications } from './LastApplications';
import { SuggestedVacancy } from './SuggestedVacancy';
import { UserInfo } from './UserInfo';
import { Card } from '@/components/shared/Card';
import { Title } from '@/components/shared/Title';
import { themes, withTheme } from '@/contexts/ThemeContext';
import { useAuthContext } from '@/contexts/AuthContext';

const Dashboard = withTheme(({ theme, variant = 'default' }) => {

  const { user } = useAuthContext();

  const styles = {
    default: {
      background: {
        [themes.DEFAULT]: 'bg-primary-90 lg:bg-neutral-10',
        [themes.DARK]: 'bg-neutral-0',
        [themes.LIGHT]: 'bg-neutral-90',
      },
      text: {
        [themes.DEFAULT]: 'text-neutral-90',
        [themes.DARK]: 'text-neutral-90',
        [themes.LIGHT]: 'text-neutral-0',
      },
      card: {
        [themes.DEFAULT]: 'bg-neutral-120 lg:bg-primary-90',
        [themes.DARK]: 'bg-neutral-120 lg:bg-neutral-90',
        [themes.LIGHT]: 'bg-neutral-120 lg:bg-neutral-0',
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
    nome: 'Renato Lourenço',
    cargo: 'UI Designer',
    profile_img: '/assets/images/img_profile.png',
    contact: '+55 11 98977-3645',
    email: 'helena@email.com',
    summary: '',
    applications: [
      {
        titulo: 'Teste',
        vaga: 'TESTE',
        cidade: 'São',
        estado: 'Testezih',
        remuneracao: '545454',
        contrato: 'clt',
        steps: [
          { stepIndex: 1, type: 'teste', status: 'approved' },
          { stepIndex: 2, type: 'videochamada', status: 'pending' },
          { stepIndex: 3, type: 'entrevista' ,status: 'pending' },
          { stepIndex: 4, type: 'teste 2', status: 'pending' },
          { stepIndex: 5, type: 'teste 3', status: 'pending' },
        ],
      },
      {
        titulo: 'Teste',
        vaga: 'TESTE',
        cidade: 'São',
        estado: 'Testezih',
        remuneracao: '545454',
        contrato: 'clt',
        steps: [
          { stepIndex: 1, title: 'teste' },
          { stepIndex: 2, title: 'videochamada' },
          { stepIndex: 3, title: 'entrevista' },
          { stepIndex: 4, title: 'teste 2' },
          { stepIndex: 5, title: 'teste 3' },
        ],
        currentStep: 4,
      },
    ],
  };

  return (
    <>
      <div className="w-full px-5 lg:px-7 pb-4 lg:pb-6">
        <Title className="text-xl lg:text-3xl" variant="inverse">
          Dashboard
        </Title>
      </div>

      <div
        className={twMerge(
          'w-full lg:px-7 lg:pb-7 lg:h-[90vh] overflow-auto lg:overflow-hidden',
          style.background[theme],
        )}
      >
        <div className="flex-col flex-wrap h-full gap-5 lg:grid lg:grid-cols-5 lg:grid-rows-[0.5fr_1fr_1fr_1fr_1fr]">
          <Card
            className={twMerge(
              'order-1 lg:flex lg:items-center lg:col-start-3 lg:col-end-6 lg:row-span-2 lg:row-start-4 row-end-5',
              style.card[theme],
            )}
          >
            <UserInfo userData={user} />
          </Card>
          <Card
            className={twMerge(
              'order-2 lg:col-start-1 lg:col-end-3 lg:row-span-2',
              style.card[theme],
            )}
          >
            <AlertHome user={user} title={'Entrevista Marcada'} />
          </Card>
          <Card
            className={twMerge(
              'order-3 lg:col-start-1 lg:col-end-3 lg:row-span-3',
              style.card[theme],
            )}
          >
            <LastApplications user={user} applications={userData.applications} />
          </Card>
          <div className="order-4 lg:col-start-3 lg:col-end-6 lg:row-start-1 row-end-4">
            <SuggestedVacancy user={user} />
          </div>
        </div>
      </div>
    </>
  );
});

export default Dashboard;
