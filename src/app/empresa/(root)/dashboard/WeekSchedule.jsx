'use client';
import { twMerge } from 'tailwind-merge';
import { Quote } from '@/components/shared/Quote';
import { Title } from '@/components/shared/Title';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { commons } from '@/locales';
import { ButtonLink } from '@/components/shared/ButtonLink';

const weeks = [
  {
    candidate: 'Isabela',
    autor: 'Renato',
    area: 'Tecnologia',
    sector: 'Tecnologia',
    date: '15/10/2023',
    hour: '10:00',
  },
  {
    candidate: 'Isabela',
    autor: 'Renato',
    area: 'Tecnologia',
    sector: 'Tecnologia',
    date: '15/10/2023',
    hour: '10:00',
  },
  {
    candidate: 'Isabela',
    autor: 'Renato',
    area: 'Tecnologia',
    sector: 'Tecnologia',
    date: '15/10/2023',
    hour: '10:00',
  },
];

const styles = {
  default: {
    title: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
    text: {
      [themes.DEFAULT]: 'text-neutral-90',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
  },
};

const WeeksSchedule = ({}) => {
  const { theme } = useTheme();
  const style = styles['default'];

  return (
    <div className="h-full flex flex-col gap-7 overflow-auto">
      <div className="w-full flex flex-col gap-3">
        <Title className="text-lg lg:text-xl" variant="inverseSecundary">
          {commons.weeksSchedule.title}
        </Title>
      </div>

      <div className="h-full flex flex-col">
        <div className="h-full pb-5 flex flex-col gap-5 lg:gap-8 lg:w-1/2">
          {weeks.map((item, id) => (
            <Quote key={id}>
              <p className={twMerge('font-semibold text-base capitalize', style.title[theme])}>
                {commons.weeksSchedule.description.title}
              </p>
              <div className="flex items-center gap-1">
                <p
                  className={twMerge(
                    'font-semibold text-sm capitalize leading-6',
                    style.text[theme],
                  )}
                >
                  autor:
                </p>
                <p
                  className={twMerge('font-light text-sm capitalize leading-6', style.text[theme])}
                >
                  {item.autor}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <p
                  className={twMerge(
                    'font-semibold text-sm capitalize leading-6',
                    style.text[theme],
                  )}
                >
                  {commons.weeksSchedule.description.candidate}
                </p>
                <p
                  className={twMerge('font-light text-sm capitalize leading-6', style.text[theme])}
                >
                  {item.candidate}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <p
                  className={twMerge(
                    'font-semibold text-sm capitalize leading-6',
                    style.text[theme],
                  )}
                >
                  {commons.weeksSchedule.description.area}
                </p>
                <p
                  className={twMerge('font-light text-sm capitalize leading-6', style.text[theme])}
                >
                  {item.area}
                </p>
              </div>
              <div className="flex gap-6">
                <div className="flex items-center gap-1">
                  <p
                    className={twMerge(
                      'font-semibold text-sm capitalize leading-6',
                      style.text[theme],
                    )}
                  >
                    {commons.weeksSchedule.description.date}
                  </p>
                  <p
                    className={twMerge(
                      'font-light text-sm capitalize leading-6',
                      style.text[theme],
                    )}
                  >
                    {item.date}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <p
                    className={twMerge(
                      'font-semibold text-sm capitalize leading-6',
                      style.text[theme],
                    )}
                  >
                    {commons.weeksSchedule.description.hour}
                  </p>
                  <p
                    className={twMerge(
                      'font-light text-sm capitalize leading-6',
                      style.text[theme],
                    )}
                  >
                    {item.hour}
                  </p>
                </div>
              </div>
            </Quote>
          ))}

        </div>
        <ButtonLink variant='bgTransform' className='self-center'>ver tudo</ButtonLink>
      </div>
    </div>
  );
};

export default WeeksSchedule;
