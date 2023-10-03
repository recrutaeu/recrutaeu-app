'use client';

import { useEffect, useState } from 'react';
import { Application } from './Application';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { Title } from '@/components/shared/Title';
import { withTheme } from '@/contexts/ThemeContext';
import { useFindAllApplicationByUserId } from '@/firebase/firestore/queries';

const LastApplications = withTheme(({ user = {} }) => {
  const [applicationsSearched, setApplicationsSearched] = useState([]);

  const { data: applications } = useFindAllApplicationByUserId({
    userId: user.id,
  });

  useEffect(() => {
    if (applications) {
      setApplicationsSearched(applications);
    }
  }, [applications]);

  return (
    <div className="flex flex-col overflow-auto h-full justify-between">
      <div>
        <Title variant="bgTransformSecundary" className="text-xl">
          Últimas candidaturas
        </Title>
        <div>
          {applicationsSearched.map((appli) => {
            return (
              <Application
                variant="inverse"
                key={1}
                vacancyID={appli.vacancyId}
                application={appli}
                onClick={(appli) => {
                  setselectedApplication(appli);
                  setisApplicationOpen(true);
                }}
              />
            );
          })}
        </div>
      </div>
      <ButtonLink
        href="/candidato/candidaturas"
        variant="inverseSecundary"
        className="flex self-center mt-5 justify-self-end"
      >
        Ver todas
      </ButtonLink>
    </div>
  );
});

export { LastApplications };
