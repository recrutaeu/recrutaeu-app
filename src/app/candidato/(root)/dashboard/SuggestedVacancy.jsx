'use client';

import { Title } from '@/components/shared/Title';
import { withTheme } from '@/contexts/ThemeContext';
import { ShortVacancy } from './ShortVacancy';

const SuggestedVacancy = withTheme(({ applications }) => {

  return (
    <div className="flex flex-col px-7 lg:px-0">
        <div>
        <Title variant='bgTransformTertiary' className='text-xl mb-5'>Vagas sugeridas</Title>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-3'>
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
            <ShortVacancy vacancy={{titulo: 'Banco itau', vaga: 'Design Gráfico', cidade: 'São Paulo', estado: 'SP', }}/>
            <ShortVacancy vacancy={{titulo: 'Banco itau', vaga: 'Design Gráfico', cidade: 'São Paulo', estado: 'SP', }}/>
            <ShortVacancy vacancy={{titulo: 'Banco itau', vaga: 'Design Gráfico', cidade: 'São Paulo', estado: 'SP', }}/>
            <ShortVacancy vacancy={{titulo: 'Banco itau', vaga: 'Design Gráfico', cidade: 'São Paulo', estado: 'SP', }}/>
            <ShortVacancy vacancy={{titulo: 'Banco itau', vaga: 'Design Gráfico', cidade: 'São Paulo', estado: 'SP', }}/>
            <ShortVacancy vacancy={{titulo: 'Banco itau', vaga: 'Design Gráfico', cidade: 'São Paulo', estado: 'SP', }}/>

        </div>
        </div>

    </div>
  );
});

export { SuggestedVacancy };
