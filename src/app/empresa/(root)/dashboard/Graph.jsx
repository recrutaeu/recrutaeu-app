'use client';
import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { twMerge } from 'tailwind-merge';
import ProgressBar from '@/components/shared/ProgressBar/ProgressBar';
import { Title } from '@/components/shared/Title';
import { useAuthContext } from '@/contexts/AuthContext';
import { themes, useTheme } from '@/contexts/ThemeContext';
import {
  useFindAllApplicationByCompanyId,
  useFindAllInterviewsByCompanyId,
} from '@/firebase/firestore/queries';
import { commons } from '@/locales';
import { useFindAllApplicationByCompanyId, useFindAllInterviewsByCompanyId } from '@/firebase/firestore/queries';
import { useAuthContext } from '@/contexts/AuthContext';

const styles = {
  default: {
    text: {
      [themes.DEFAULT]: 'text-neutral-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-0',
    },
    background: {
      [themes.DEFAULT]: '',
      [themes.DARK]: '',
      [themes.LIGHT]: '',
    },
  },
};



ChartJS.register(ArcElement, Tooltip, Legend);

const Graph = ({user=null}) => {
  const { theme } = useTheme();
  const style = styles['default'];
  const { data: applications } = useFindAllApplicationByCompanyId({
    companyId: user.id,
  });

  const [approved, setApproved] = useState([])
  const [reproved, setReproved] = useState([])
  const [pendingNotReproved, setPendingNotReprovedr] = useState([])
  const [paused, setPaused] = useState([])
  const [totalApplications, setTotalApplications] = useState([])
  
  useEffect(()=>{
    if(applications){
      const approvedFilter = applications.filter(item => {
        const step = item.steps[3];
        return step && step.status === 'approved';
      });
      setApproved(approvedFilter)
      // Filtro para objetos que tenham status 'reproved' em qualquer um dos índices.
      const reprovedFilter = applications.filter(item => {
        const hasReproved = item.steps.some(step => step.status === 'reproved');
        return hasReproved;
      });
      setReproved(reprovedFilter)
      
      // Filtro para objetos que tenham 'pending' em qualquer status e 'reproved' em nenhum.
      const pendingNotReprovedFilter = applications.filter(item => {
        const hasPending = item.steps.some(step => step.status === 'pending');
        const hasReproved = item.steps.some(step => step.status === 'reproved');
        return hasPending && !hasReproved;
      });
      setPendingNotReprovedr(pendingNotReprovedFilter)
      const pausedFilter = applications.filter(item => {
        const hasPaused = item.steps.some(step => step.status === 'paused');
        return hasPaused;
      });
      setPaused(pausedFilter)
      setTotalApplications(applications)
    }

  }, [applications])

  const data = {
    datasets: [
      {
        label: 'número de candidatos',
        data: [approved.length, reproved.length, pendingNotReproved.length, paused.length],
        backgroundColor: [
          'rgba(241, 138, 173, 1)',
          'rgba(189, 186, 237, 1)',
          'rgba(233, 254, 71, 1)',
          'rgba(241, 238, 230, 1)',
        ],
        borderColor: ['rgba(241, 138, 173, 1)', 'rgba(189, 186, 237, 1)', 'rgba(233, 254, 71, 1)', 'rgba(241, 238, 230, 1)'],
        borderWidth: 1,
        paddingBottom: 18,
        
        borderColor: [
          'rgba(241, 138, 173, 1)',
          'rgba(189, 186, 237, 1)',
          'rgba(233, 254, 71, 1)',
          'rgba(241, 238, 230, 1)',
        ],
        borderWidth: 1,
        paddingBottom: 18,
      },
    ],
  };

  const testData = [
    {
      bgcolor: '#F18AAD',
      completed: (approved.length / totalApplications.length) * 100,
      label: 'Aprovados',
    },
    {
      bgcolor: '#BDBAED',
      completed: (reproved.length / totalApplications.length) * 100,
      label: 'Reprovados',
    },
    {
      bgcolor: '#E9FE47',
      completed: (pendingNotReproved.length / totalApplications.length) * 100,
      label: 'Em processo de seleção',
    },
    {
      bgcolor: '#F1EEE6',
      completed: (paused.length / totalApplications.length) * 100,
      label: 'Vagas pausadas',
    },
  ];

  return (
    <>
      <div className={twMerge('w-full', style.background[theme])}>
        <Title className="text-lg lg:text-xl" variant="bgTransformSecundary">
          {commons.dash.titlePage}
        </Title>
      </div>

      <div className={twMerge('h-full w-full overflow-hidden', style.background[theme])}>
        <div className="h-full w-full overflow-auto no-scrollbar flex flex-col">
          <div className="h-full lg:px-7 px-5 py-0">
            <div className={twMerge('flex flex-col w-full lg:flex-row lg:gap-10 items-center')}>
              <div className={twMerge('lg:w-3/12 w-full ')}>
                <Doughnut
                  data={data}
                  updateMode="resize"
                  options={{ maintainAspectRatio: false }}
                />
              </div>
              <div className={twMerge('flex w-full flex-col gap-1 py-8 lg:py-1')}>
                {testData.map((item, idx) => (
                  <ProgressBar
                    variant="inverse"
                    key={idx}
                    bgcolor={item.bgcolor}
                    completed={item.completed}
                    label={item.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graph;
