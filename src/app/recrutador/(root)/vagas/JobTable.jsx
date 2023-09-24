'use client';
import { useState } from 'react';
import { JobTableContext } from './JobTableContext';
import { ButtonSelectAll } from '@/components/shared/ButtonSelectAll';
import { Filter } from '@/components/shared/Filter';
import { Table } from '@/components/shared/Table';
import { commons } from '@/locales';

const JobTable = ({ vacancies, className, onDetails }) => {
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
            <div className="flex items-center text-sm lg:text-base">
              {commons.tableJobs.jobs}
              <Filter size={20} variant="inverse" />
            </div>
          </Table.Header>
          <Table.Header>
            <div className="flex items-center text-sm lg:text-base">
              {commons.tableJobs.sector}
              <Filter size={20} variant="inverse" />
            </div>
          </Table.Header>
          <Table.Header className={'hidden lg:table-cell'}>
            <div className="flex items-center justify-center text-sm lg:text-base">
              {commons.tableJobs.numberJobs}
              <Filter size={20} variant="inverse" />
            </div>
          </Table.Header>
          <Table.Header className={'hidden lg:table-cell'}>
            <div className="flex items-center justify-center text-sm lg:text-base">
              {commons.tableJobs.initialDate}
              <Filter size={20} variant="inverse" />
            </div>
          </Table.Header>
          <Table.Header className={'hidden lg:table-cell'}>
            <div className="flex items-center justify-center text-sm lg:text-base">
              {commons.tableJobs.finalDate}
              <Filter size={20} variant="inverse" />
            </div>
          </Table.Header>
          <Table.Header className={'justify-center text-center text-sm lg:text-base'}>
            {commons.tableJobs.details}
          </Table.Header>
        </Table.Row>
      </thead>
      {vacancies?.map((vacancy, index) => {
        return (
          <JobTableContext
            // alterar key para id quando integrar com backend
            key={index}
            vacancy={vacancy}
            checkAll={checked}
            onDetails={onDetails}
          />
        );
      })}
    </Table.Root>
  );
};

export { JobTable };
