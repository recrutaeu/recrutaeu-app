'use client';
import { useState } from 'react';
import { RecruiterTableContext } from './RecruiterTableContext';
import { ButtonSelectAll } from '@/components/shared/ButtonSelectAll';
import { Table } from '@/components/shared/Table';
import { commons } from '@/locales';

const RecruiterTable = ({ recruiters, className, onDetails }) => {
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
              {commons.tableRecruiters.name}
            </div>
          </Table.Header>
          <Table.Header>
            <div className="flex items-center text-sm lg:text-base">
              {commons.tableRecruiters.email}
            </div>
          </Table.Header>
        </Table.Row>
      </thead>
      {recruiters?.map((recruiter, index) => {
        return (
          <RecruiterTableContext
            // alterar key para id quando integrar com backend
            key={index}
            recruiter={recruiter}
            checkAll={checked}
            onDetails={onDetails}
          />
        );
      })}
    </Table.Root>
  );
};

export { RecruiterTable };
