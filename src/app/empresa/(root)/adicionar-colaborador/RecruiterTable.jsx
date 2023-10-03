'use client';
import { useState } from 'react';
import { RecruiterTableContext } from './RecruiterTableContext';
import { Table } from '@/components/shared/Table';
import { commons } from '@/locales';

const RecruiterTable = ({ recruiters, className, onDelete }) => {
  const [checked, setChecked] = useState(false);
  return (
    <Table.Root className={className}>
      <thead>
        <Table.Row>
          <Table.Header className="pl-2 lg:pl-5">
            <div className="flex items-center text-sm lg:text-base">
              {commons.tableRecruiters.name}
            </div>
          </Table.Header>
          <Table.Header className="pl-2 lg:pl-5">
            <div className="flex items-center text-sm lg:text-base">
              {commons.tableRecruiters.email}
            </div>
          </Table.Header>
          <Table.Header>
            <div className="flex items-center text-sm lg:text-base">Deletar</div>
          </Table.Header>
        </Table.Row>
      </thead>
      {recruiters?.map((recruiter) => {
        return (
          <RecruiterTableContext
            key={recruiter.id}
            recruiter={recruiter}
            checkAll={checked}
            onDelete={onDelete}
          />
        );
      })}
    </Table.Root>
  );
};

export { RecruiterTable };
