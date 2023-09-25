'use client';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { Title } from '@/components/shared/Title';
import { commons } from '@/locales';
import { twMerge } from 'tailwind-merge';
import ProgressBar from '@/components/shared/ProgressBar/ProgressBar';

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
            [themes.LIGHT]: 'bg-neutral-90',
        },
    },
};

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Aprovados', 'Reprovados', 'Stand by'],
    datasets: [
        {
            label: 'número de candidatos',
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(241, 138, 173, 1)',
                'rgba(189, 186, 237, 1)',
                'rgba(233, 254, 71, 1)'
            ],
            borderColor: [
                'rgba(241, 138, 173, 1)',
                'rgba(189, 186, 237, 1)',
                'rgba(233, 254, 71, 1)'
            ],
            borderWidth: 1,
        },
    ],
};


const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions) {
        const { ctx, data } = chart;

        ctx.save();
        ctx.font = 'bolder 3.2em sans-serif';
        ctx.fillStyle = 'rgba(60, 55, 132, 1)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle',
            ctx.fillText(data.datasets[0].data[0] + '%', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
    }
}

const testData = [
    { bgcolor: "#F18AAD", completed: 43, label: 'Aprovados' },
    { bgcolor: "#BDBAED", completed: 22, label: 'Reprovados' },
    { bgcolor: "#E9FE47", completed: 8, label: 'Stand By' },
];

const ApplicatedJobs = ({ }) => {
    const { theme } = useTheme();
    const style = styles['default'];



    return (
        <div className={twMerge("h-full lg:px-7 px-5 py-5 overflow-scroll", style.background[theme])}>
            <div>
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
            <div className={twMerge("lg:flex")}>
                <div className={twMerge("lg:w-1/3 mt-8")}>
                    <Doughnut data={data} plugins={[textCenter]} />
                </div>
                <div className={twMerge("lg:mt-10 lg:ml-12 lg:w-1/3")}>
                    {testData.map((item, idx) => (
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} label={item.label} />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ApplicatedJobs;