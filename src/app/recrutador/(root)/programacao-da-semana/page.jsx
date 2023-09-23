'use client';
import { Filter } from '@/components/shared/Filter';
import { InputSearch } from '@/components/shared/InputSearch';
import { NumberPages } from '@/components/shared/NumberPages';
import { Quote } from '@/components/shared/Quote';
import { Title } from '@/components/shared/Title';
import { commons } from '@/locales';

const weeks = [
  {
    candidate: 'Isabela',
    area: 'Tecnologia',
    sector: 'Tecnologia',
    date: '15/10/2023',
    hour: '10:00',
  },
  {
    candidate: 'Isabela',
    area: 'Tecnologia',
    sector: 'Tecnologia',
    date: '15/10/2023',
    hour: '10:00',
  },
  {
    candidate: 'Isabela',
    area: 'Tecnologia',
    sector: 'Tecnologia',
    date: '15/10/2023',
    hour: '10:00',
  },
  {
    candidate: 'Isabela',
    area: 'Tecnologia',
    sector: 'Tecnologia',
    date: '15/10/2023',
    hour: '10:00',
  },
];

const weeksSchedule = ({}) => {
  return (
    <div className="lg:px-7 h-full flex flex-col gap-7 overflow-auto">
      <div className="w-full flex flex-col gap-3 px-5">
        <Title className="text-xl lg:text-3xl" variant="inverse">
          {commons.weeksSchedule.title}
        </Title>

        <div className="flex lg:w-1/2 gap-1 mt-3">
          <InputSearch variant="inverse" />
          <Filter className="w-7 h-7 lg:w-8 lg:h-8" variant="inverse" />
        </div>
      </div>

      <div className="h-full">
        <div className="h-full px-5 pb-5 flex flex-col gap-5 lg:gap-8 lg:w-1/2">
          {weeks.map((item, id) => (
            <Quote key={id}>
              <p className="text-primary-90 font-semibold text-base capitalize">Entrevista</p>
              <div className="flex items-center gap-1">
                <p className="text-neutral-90 font-semibold text-sm capitalize leading-6">
                  candidato:
                </p>
                <p className="text-neutral-90 font-light text-sm capitalize leading-6">
                  {item.candidate}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-neutral-90 font-semibold text-sm capitalize leading-6">Area:</p>
                <p className="text-neutral-90 font-light text-sm capitalize leading-6">
                  {item.area}
                </p>
              </div>
              <div className="flex gap-6">
                <div className="flex items-center gap-1">
                  <p className="text-neutral-90 font-semibold text-sm capitalize leading-6">
                    Data:
                  </p>
                  <p className="text-neutral-90 font-light text-sm capitalize leading-6">
                    {item.date}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <p className="text-neutral-90 font-semibold text-sm capitalize leading-6">
                    Horário:
                  </p>
                  <p className="text-neutral-90 font-light text-sm capitalize leading-6">
                    {item.hour}
                  </p>
                </div>
              </div>
            </Quote>
          ))}

          <div className="w-full flex justify-center items-center pb-5">
            <NumberPages currentPage={1} totalPage={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default weeksSchedule;
