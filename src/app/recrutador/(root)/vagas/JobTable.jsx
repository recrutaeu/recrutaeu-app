'use client';
import { useState } from 'react';
import { JobTableContext } from './JobTableContext';
import { ButtonSelectAll } from '@/components/shared/ButtonSelectAll';
import { Filter } from '@/components/shared/Filter';
import { NumberPages } from '@/components/shared/NumberPages';
import { Table } from '@/components/shared/Table';
import { commons } from '@/locales';

const JobTable = ({ jobs, className }) => {
  const [checked, setChecked] = useState(false);
  return (
    <Table.Root className={className}>
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
      {jobs.map((job, index) => {
        return (
          <JobTableContext
            // alterar key para id quando integrar com backend
            key={index}
            job={job.job}
            sector={job.sector}
            quantity={job.quantity}
            publishedAt={job.publishedAt}
            expiresAt={job.expiresAt}
            checkAll={checked}
          />
        );
      })}
    </Table.Root>
  );
};

export { JobTable };
