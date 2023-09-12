import { LuChevronRight } from 'react-icons/lu';
import { Divider } from '@/components/shared/Divider';

const Job = ({ title, profession, city, state, remuneration, contract, ...props }) => {
  return (
    <button className="mt-3 flex flex-col w-full cursor-pointer " {...props}>
      <div className="flex items-center w-full">
        <div className="w-full text-start">
          <p className="text-primary-90 text-base font-bold leading-6">{title}</p>
          <p className="text-neutral-90 text-sm font-medium leading-6">{`Vaga: ${profession}`}</p>
          <p className="text-neutral-90  text-sm font-medium leading-6">{`Localização: ${city} - ${state}`}</p>
          <p className="text-neutral-90  text-sm font-medium leading-6">{`Salário: R$ ${remuneration}`}</p>
          <p className="text-neutral-90  text-sm font-medium leading-6">{`Contrato: ${contract}t`}</p>
          <Divider className="mt-3" />
        </div>
        <LuChevronRight size={40} />
      </div>
    </button>
  );
};

export { Job };
