'use client';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { twMerge } from 'tailwind-merge';
import ProgressBar from '@/components/shared/ProgressBar/ProgressBar';
import { Title } from '@/components/shared/Title';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { commons } from '@/locales';

const styles = {
  default: {
    description: {
      [themes.DEFAULT]: 'text-neutral-90',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-0',
    },
    background: {
      [themes.DEFAULT]: 'bg-neutral-10',
      [themes.DARK]: 'bg-neutral-0',
      [themes.LIGHT]: 'bg-neutral-0 border-l border-b lg:border-b-0 border-neutral-90',
    },
  },
};

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Aprovados', 'Reprovados', 'Stand By'],
  datasets: [
    {
      label: 'número de candidatos',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(241, 138, 173, 1)',
        'rgba(189, 186, 237, 1)',
        'rgba(233, 254, 71, 1)',
      ],
      borderColor: ['rgba(241, 138, 173, 1)', 'rgba(189, 186, 237, 1)', 'rgba(233, 254, 71, 1)'],
      borderWidth: 1,
      paddingBottom: 18,
    },
  ],
};

const textCenter = {
  id: 'textCenter',
  beforeDatasetsDraw(chart, args, pluginOptions) {
    const { ctx, data } = chart;

    ctx.save();
    ctx.font = 'bolder 3.5em sans-serif';
    ctx.fillStyle = 'rgba(42, 42, 45)';
    ctx.textAlign = 'center';
    (ctx.textBaseline = 'middle'),
      ctx.fillText(
        data.datasets[0].data[0] + '%',
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y,
      );
  },
};

const testData = [
  { bgcolor: '#F18AAD', completed: 43, label: 'Aprovados' },
  { bgcolor: '#BDBAED', completed: 22, label: 'Reprovados' },
  { bgcolor: '#E9FE47', completed: 8, label: 'Stand By' },
];

const ApplicatedJobs = ({}) => {
  const { theme } = useTheme();
  const style = styles['default'];

  return (
    <>
      <div className=" w-full lg:px-7 px-5 py-5">
        <Title className="text-xl lg:text-3xl" variant="inverse">
          {commons.dash.titlePage}
        </Title>
        <p
          className={twMerge(
            'w-full text-sm font-light mt-2 lg:text-base',
            style.description[theme],
          )}
        >
          {commons.dash.subtitle}
        </p>
      </div>

      <div className={twMerge('h-full w-full overflow-hidden', style.background[theme])}>
        <div className="h-full w-full overflow-auto no-scrollbar flex flex-col">
          <div className="h-full lg:px-7 px-5 py-5">
            <div className={twMerge('flex flex-col w-full lg:flex-row lg:gap-10')}>
              <div className={twMerge('lg:w-2/3 w-full')}>
                <Doughnut data={data} plugins={[textCenter]} />
              </div>
              <div className={twMerge('flex w-full flex-col gap-4 py-8 lg:py-0')}>
                {testData.map((item, idx) => (
                  <ProgressBar
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

export default ApplicatedJobs;
