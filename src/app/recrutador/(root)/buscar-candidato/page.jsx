'use client';
import { useState } from 'react';
import CardSearchCandidate from './CardSearhCandidate';
import PerfilPopup from './PerfilPopup';
import { Card } from '@/components/shared/Card';
import { Divider } from '@/components/shared/Divider';
import { InputSearch } from '@/components/shared/InputSearch';
import { Title } from '@/components/shared/Title';

const SearchCandidate = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <PerfilPopup isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="h-full lg:px-7 px-5 py-5">
        <div className="flex flex-col gap-2">
          <Title className="text-xl lg:text-3xl" variant="inverse">
            Processos em andamento
          </Title>
          <p className="text-neutral-50 text-sm lg:text-base">
            Adicione no campo abaixo as skills que deseja encontrar nos candidatos.{' '}
          </p>
        </div>
        <div className="w-full lg:w-1/2 py-5">
          <InputSearch variant="inverseSecundary" />
        </div>
        <Divider variant="inverseSecundary" />
        <div className="flex gap-6">
          <div className="h-full w-full overflow-hidden">
            <div className="h-full w-full overflow-auto flex flex-col py-5">
              <CardSearchCandidate
                onClick={() => {
                  setIsOpen(true);
                }}
              />
            </div>
          </div>
          <div className="w-1/2 hidden lg:flex py-5">
            <Card className=" ">
              <div>perfil do usuário</div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchCandidate;
