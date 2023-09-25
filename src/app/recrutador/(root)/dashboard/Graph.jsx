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

export const data = {
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
    ctx.font = 'bolder 3.5em sans-serif white';
    ctx.fillStyle = 'rgba(42, 42, 45)';
  },
};

const testData = [
  { bgcolor: '#F18AAD', completed: 43, label: 'Aprovados' },
  { bgcolor: '#BDBAED', completed: 22, label: 'Reprovados' },
  { bgcolor: '#E9FE47', completed: 18, label: 'Stand By' },
];

const Graph = ({}) => {
  const { theme } = useTheme();
  const style = styles['default'];

  return (
    <>
      <div className={twMerge("w-full", style.background[theme])}>
        <Title className="text-lg lg:text-xl" variant="bgTransformSecundary">
          {commons.dash.titlePage}
        </Title>
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
                    variant='inverse'
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
