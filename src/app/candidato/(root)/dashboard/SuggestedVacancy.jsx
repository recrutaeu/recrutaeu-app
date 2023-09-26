'use client';

import { ShortVacancy } from './ShortVacancy';
import { ButtonLabel } from '@/components/shared/ButtonLabel';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { Title } from '@/components/shared/Title';
import { withTheme } from '@/contexts/ThemeContext';

const SuggestedVacancy = withTheme(({ applications }) => {
  return (
    <div className="flex flex-col px-7 lg:px-0">
      <div>
        <Title variant="bgTransformTertiary" className="text-xl mb-5">
          Vagas sugeridas
        </Title>
        <div className="flex gap-3 justify-between">
          {/* {applications.map((appli) => {
                return (
                    <Application
                    variant='inverse'
                    key={1}
                    application={appli}
                    onClick={(appli) => {
                    setselectedApplication(appli);
                    setisApplicationOpen(true);
                }}/>)
            })} */}
          <ShortVacancy
            vacancy={{
              titulo: 'Banco itau',
              vaga: 'Design Gráfico',
              cidade: 'São Paulo',
              estado: 'SP',
            }}
          />
          <ShortVacancy
            vacancy={{
              titulo: 'Banco itau',
              vaga: 'Design Gráfico',
              cidade: 'São Paulo',
              estado: 'SP',
            }}
          />

        </div>
        <div className="hidden w-full items-center lg:flex justify-center py-6">
          <ButtonLabel type="button">veja mais</ButtonLabel>
        </div>
        <div className="w-full items-center flex justify-center py-4 lg:hidden">
          <ButtonLabel variant="inverseTertiary" type="button">
            veja mais
          </ButtonLabel>
        </div>
      </div>
    </div>
  );
});

export { SuggestedVacancy };
