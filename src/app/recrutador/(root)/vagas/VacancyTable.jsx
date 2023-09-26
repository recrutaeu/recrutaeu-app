'use client';
import { useState } from 'react';
import { VacancyTableContext } from './VacancyTableContext';
import { ButtonSelectAll } from '@/components/shared/ButtonSelectAll';
import { Table } from '@/components/shared/Table';
import { commons } from '@/locales';

const VacancyTable = ({ vacancies, className, onDetails, selectedRows, setSelectedRows }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Table.Root className={className}>
      <thead>
        <Table.Row>
          <Table.Header>
            <div className="flex items-center justify-center">
              <ButtonSelectAll onChange={setChecked} />
            </div>
          </Table.Header>
          <Table.Header>
            <div className="flex items-center text-sm lg:text-base">{commons.tableJobs.jobs}</div>
          </Table.Header>
          <Table.Header>
            <div className="flex items-center text-sm lg:text-base">{commons.tableJobs.sector}</div>
          </Table.Header>
          <Table.Header className={'hidden lg:table-cell'}>
            <div className="flex items-center justify-center text-sm lg:text-base">
              {commons.tableJobs.numberJobs}
            </div>
          </Table.Header>
          <Table.Header className={'hidden lg:table-cell'}>
            <div className="flex items-center justify-center text-sm lg:text-base">
              {commons.tableJobs.initialDate}
            </div>
          </Table.Header>
          <Table.Header className={'hidden lg:table-cell'}>
            <div className="flex items-center justify-center text-sm lg:text-base">
              {commons.tableJobs.finalDate}
            </div>
          </Table.Header>
          <Table.Header className={'justify-center text-center text-sm lg:text-base'}>
            {commons.tableJobs.details}
          </Table.Header>
        </Table.Row>
      </thead>
      {vacancies?.map((vacancy) => {
        return (
          <VacancyTableContext
            key={vacancy.id}
            vacancy={vacancy}
            checkAll={checked}
            onDetails={onDetails}
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows}
          />
        );
      })}
    </Table.Root>
  );
};

export { VacancyTable };
