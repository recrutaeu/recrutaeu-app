'use client';

import { Application } from './Application';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { Title } from '@/components/shared/Title';
import { withTheme } from '@/contexts/ThemeContext';

const LastApplications = withTheme(({ applications }) => {
  return (
    <div className="flex flex-col overflow-auto h-full justify-between">
      <div>
        <Title variant="bgTransformSecundary" className="text-xl">
          Ultimas candidaturas
        </Title>
        <div>
          {applications?.map((application) => {
            return (
              <Application
                variant="inverse"
                key={1}
                application={application}
                onClick={(application) => {
                  setselectedApplication(application);
                  setisApplicationOpen(true);
                }}
              />
            );
          })}
        </div>
      </div>
      <ButtonLink variant="inverseSecundary" className="flex self-center mt-5 justify-self-end">
        Ver todas
      </ButtonLink>
    </div>
  );
});

export { LastApplications };
