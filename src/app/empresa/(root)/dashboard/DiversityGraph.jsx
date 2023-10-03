'use client';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from 'chart.js';
import { twMerge } from 'tailwind-merge';
import { Title } from '@/components/shared/Title';
import { themes, useTheme } from '@/contexts/ThemeContext';
import {
  useFindAllApplicationByCompanyId,
  useFindAllVacanciesByCompanyId,
} from '@/firebase/firestore/queries';
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DiversityGraph = ({ user = null }) => {
  const { theme } = useTheme();
  const style = styles['default'];

  const { data: vacancies } = useFindAllVacanciesByCompanyId({
    companyId: user.id,
  });

  const { data: applications } = useFindAllApplicationByCompanyId({
    companyId: user.id,
  });
  
  useEffect(() => {
    if (vacancies) {
      const blackDiversity = vacancies.filter((vacancy) => vacancy.diversity? vacancy.diversity.includes('black') : null);
      const lgbtDiversity = vacancies.filter((vacancy) => vacancy.diversity? vacancy.diversity.includes('lgbt'): null);
      const disabilityDiversity = vacancies.filter((vacancy) =>
      vacancy.diversity? vacancy.diversity.includes('disability'): null,
      );
      const elderlyDiversity = vacancies.filter((vacancy) => vacancy.diversity? vacancy.diversity.includes('elderly'): null);

      // Calcular a quantidade total para cada filtro.
      setBlackVacanciesQtd(calculateTotal(blackDiversity));
      setLgbtVacanciesQtd(calculateTotal(lgbtDiversity));
      setDisabilityVacanciesQtd(calculateTotal(disabilityDiversity));
      setElderlyVacanciesQtd(calculateTotal(elderlyDiversity));
    }
  }, [vacancies]);

  useEffect(() => {
    if (applications) {
      console.log(applications);
      const blackDiversity = applications.filter((application) =>
      application.diversity? application.diversity.includes('black'): null,
      );
      const lgbtDiversity = applications.filter((application) =>
        application.diversity? application.diversity.includes('lgbt'): null,
      );
      const disabilityDiversity = applications.filter((application) =>
        application.diversity? application.diversity.includes('disability'): null,
      );
      const elderlyDiversity = applications.filter((application) =>
        application.diversity? application.diversity.includes('elderly'): null,
      );

      // Calcular a quantidade total para cada filtro.
      setBlackApplicationsQtd(blackDiversity.length);
      setLgbtApplicationsQtd(lgbtDiversity.length);
      setDisabilityApplicationsQtd(disabilityDiversity.length);
      setElderlyApplicationsQtd(elderlyDiversity.length);
    }
  }, [applications]);
  const [blackVacanciesQtd, setBlackVacanciesQtd] = useState(0);
  const [lgbtVacanciesQtd, setLgbtVacanciesQtd] = useState(0);
  const [disabilityVacanciesQtd, setDisabilityVacanciesQtd] = useState(0);
  const [elderlyVacanciesQtd, setElderlyVacanciesQtd] = useState(0);

  const [blackApplicationsQtd, setBlackApplicationsQtd] = useState(0);
  const [lgbtApplicationsQtd, setLgbtApplicationsQtd] = useState(0);
  const [disabilityApplicationsQtd, setDisabilityApplicationsQtd] = useState(0);
  const [elderlyApplicationsQtd, setElderlyApplicationsQtd] = useState(0);

  const calculateTotal = (filtro) => {
    return filtro.reduce((total, objeto) => {
      return total + parseInt(objeto.quantity, 10);
    }, 0);
  };



  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 5,
        left: 50,
        right: 15,
        bottom: 15,
      },
      color: 'white',
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          color: 'rgba(255, 99, 132, 0)',
        },

        min: 0,
        max: applications ? Math.round(applications.length + applications.length * 3) : 10,
        ticks: {
          stepSize: applications
            ? applications.length > 10
              ? Math.floor(applications.length / 10)
              : 1
            : 0,
          color: 'white',
        },
      },
      x: {
        grid: {
          drawBorder: false,
          color: 'rgba(255, 99, 132, 0)',
        },
        min: 0,
        max: 50,
        ticks: {
          stepSize: 10,
          color: 'white',
        },
      },
    },
    plugins: {
      legend: {
        position: 'left',
        color: 'white',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
        color: 'white',
      },
    },
    width: '100%',
    color: 'white',
  };

  const labels = ['Negros', 'Deficientes', 'LGBT', '60+'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Total de vagas',
        data: [blackVacanciesQtd, disabilityVacanciesQtd, lgbtVacanciesQtd, elderlyVacanciesQtd],
        backgroundColor: 'rgba(255, 99, 132, 1)',
      },
      {
        label: 'Aplicações',
        data: [
          blackApplicationsQtd,
          disabilityApplicationsQtd,
          lgbtApplicationsQtd,
          elderlyApplicationsQtd,
        ],
        backgroundColor: 'rgba(53, 162, 235, 1)',
      },
    ],
  };

  return (
    <>
      <div className={twMerge('w-full', style.background[theme])}>
        <Title className="text-lg lg:text-xl lg:mt-10" variant="bgTransformSecundary">
          {commons.dash.titlePageSecond}
        </Title>
      </div>
      <div
        className={twMerge(
          'h-full w-full overflow-hidden lg:ml-0 lg:mb-6',
          style.background[theme],
        )}
      >
        <Bar data={data} updateMode="resize" options={options} style={{ maxWidth: '100%' }} />
      </div>
    </>
  );
};

export default DiversityGraph;
