'use client';
import { useState } from 'react';
import { JobTableContext } from './JobTableContext';
import { ButtonSelectAll } from '@/components/shared/ButtonSelectAll';
import { Filter } from '@/components/shared/Filter';
import { Table } from '@/components/shared/Table';
import { commons } from '@/locales';

const JobTable = ({ jobs }) => {
  const [checked, setChecked] = useState(false);
  return (
    <Table.Root>
      <Table.Row className={'justify-between lg:pr-3 lg:pl-5'}>
        <Table.Header className={'w-[70px]'}>
          <ButtonSelectAll onChange={setChecked} />
        </Table.Header>
        <Table.Header className={'lg:w-[calc(100% / 6)]'}>
          {commons.tableJobs.jobs}
          <Filter size={20} variant="inverse" />
        </Table.Header>
        <Table.Header className={'lg:w-[calc(100% / 6)]'}>
          {commons.tableJobs.sector}
          <Filter size={20} variant="inverse" />
        </Table.Header>
        <Table.Header
          className={'hidden lg:flex  lg:w-[calc(100% / 6)] justify-center text-center'}
        >
          {commons.tableJobs.numberJobs}
          <Filter size={20} variant="inverse" />
        </Table.Header>
        <Table.Header className={'hidden lg:flex lg:w-[calc(100% / 6)] justify-center text-center'}>
          {commons.tableJobs.initialDate}
          <Filter size={20} variant="inverse" />
        </Table.Header>
        <Table.Header className={'hidden lg:flex lg:w-[calc(100% / 6)] justify-center text-center'}>
          {commons.tableJobs.finalDate}
          <Filter size={20} variant="inverse" />
        </Table.Header>
        <Table.Header className={'justify-center text-center'}>
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
