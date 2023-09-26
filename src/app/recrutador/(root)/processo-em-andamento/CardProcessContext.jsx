'use client';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import CardProcess from './CardProcess';
import FeedbackPopup from './FeedbackPoup';
import InterviewPopup from './InterviewPopup';
import TestPopup from './TestPoup';
import { ButtonLabel } from '@/components/shared/ButtonLabel';
import { Select } from '@/components/shared/Select';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { useCreateOrUpdateApplication } from '@/firebase/firestore/mutations';

const styles = {
  default: {
    cardDescription: {
      [themes.DEFAULT]: 'text-neutral-90 ',
      [themes.DARK]: 'text-neutral-90 ',
      [themes.LIGHT]: 'text-neutral-0 ',
    },
    dataText: {
      [themes.DEFAULT]: 'text-neutral-90 ',
      [themes.DARK]: 'text-neutral-90 ',
      [themes.LIGHT]: 'text-neutral-0 ',
    },
  },
};

const CardProcessContext = ({ application }) => {
  const { theme } = useTheme();
  const [isTestOpen, setIsTestOpen] = useState(false);
  const [isInterviewOpen, setIsInterviewOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const style = styles['default'];

  const handleStatusChange = (step, status) => {
    const selectedStep = application.steps.find((item) => item.type === step.type);
    const newStep = {
      ...selectedStep,
      status: status,
    };

    const steps = application.steps.map((item) => (item.type === step.type ? newStep : item));

    createOrUpdateApplication({
      id: application.id,
      steps,
    });
  };

  const { mutate: createOrUpdateApplication } = useCreateOrUpdateApplication();

  return (
    <>
      {application?.steps?.map((item) => {
        if (item.type === 'subscribed') {
          return (
            <CardProcess title="Inscrição" key={item.id}>
              <div className="flex gap-2 text-sm leading-7">
                <p className={twMerge('font-medium', style.cardDescription[theme])}>Candidatura:</p>
                <p className={twMerge('font-ligth', style.cardDescription[theme])}>
                  {item.data.date.toDate().toLocaleDateString('pt-BR')}
                </p>
              </div>
              <Select
                options={[
                  { value: 'approved', label: 'Aprovado' },
                  { value: 'reproved', label: 'Reprovado' },
                  { value: 'pending', label: 'Pendente' },
                ]}
                value={item.status}
                titleLabel="Status:"
                onChange={(status) => handleStatusChange(item, status)}
                variant="inverse"
                className="text-sm"
              />
            </CardProcess>
          );
        }
        if (item.type === 'test' && !item?.data) {
          return (
            <CardProcess title="Teste" key={item.id}>
              <ButtonLabel
                className="mt-1 text-sm"
                onClick={() => {
                  setIsTestOpen(true);
                }}
              >
                Adicionar informações
              </ButtonLabel>
            </CardProcess>
          );
        }
        if (item.type === 'test' && item?.data) {
          return (
            <CardProcess
              title="Teste"
              onEdit={() => setIsTestOpen(true)}
              className="flex flex-col gap-3"
              key={item.id}
            >
              <div className="flex gap-2 text-sm leading-7 w-full">
                <p className={twMerge('font-medium', style.cardDescription[theme])}>Link:</p>
                <p className={twMerge('font-ligth', style.cardDescription[theme])}>
                  {item.data.link}
                </p>
              </div>
              <div className="flex gap-2 text-sm pb-3">
                <p className={twMerge('text-sm font-medium', style.dataText[theme])}>Prazo:</p>

                <p
                  className={twMerge('text-sm font-light', style.dataText[theme])}
                >{`${item.data.startAt.toDate().toLocaleDateString('pt-BR')} à ${item.data.endAt
                  .toDate()
                  .toLocaleDateString('pt-BR')}`}</p>
              </div>
              <Select
                options={[
                  { value: 'approved', label: 'Aprovado' },
                  { value: 'reproved', label: 'Reprovado' },
                  { value: 'pending', label: 'Pendente' },
                ]}
                value={item.status}
                titleLabel="Status:"
                onChange={(status) => handleStatusChange(item, status)}
                variant="inverse"
                className="text-sm"
              />
            </CardProcess>
          );
        }

        if (item.type === 'interview' && !item?.data) {
          return (
            <CardProcess title="Entrevista" key={item.id}>
              <ButtonLabel
                className="mt-1 text-sm"
                onClick={() => {
                  setIsInterviewOpen(true);
                }}
              >
                adicionar informações
              </ButtonLabel>
            </CardProcess>
          );
        }

        if (item.type === 'interview' && item?.data) {
          return (
            <CardProcess title="Entrevista" onEdit={() => setIsInterviewOpen(true)} key={item.id}>
              <div className="flex gap-2 text-sm leading-7">
                <p className={twMerge('font-medium', style.cardDescription[theme])}>Responsável:</p>
                <p className={twMerge('font-ligth', style.cardDescription[theme])}>
                  {item.data.employee}
                </p>
              </div>
              <div className="flex gap-2 text-sm leading-7">
                <p className={twMerge('font-medium', style.cardDescription[theme])}>Link:</p>
                <p className={twMerge('font-ligth', style.cardDescription[theme])}>
                  {item.data.link}
                </p>
              </div>

              <div className="flex gap-4 text-sm">
                <div className="flex gap-2">
                  <p className={twMerge('text-sm font-medium', style.dataText[theme])}>Data:</p>

                  <p className={twMerge('text-sm font-light', style.dataText[theme])}>
                    {item.data.date.toDate().toLocaleDateString('pt-BR')}
                  </p>
                </div>
                <div className="flex gap-1">
                  <p className={twMerge('text-sm font-medium', style.dataText[theme])}>Horário:</p>

                  <p className={twMerge('text-sm font-light', style.dataText[theme])}>
                    {item.data.date.toDate().toLocaleTimeString('pt-BR', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>

              <Select
                options={[
                  { value: 'approved', label: 'Aprovado' },
                  { value: 'reproved', label: 'Reprovado' },
                  { value: 'pending', label: 'Pendente' },
                ]}
                value={item.status}
                titleLabel="Status:"
                onChange={(status) => handleStatusChange(item, status)}
                variant="inverse"
                className="text-sm"
              />
            </CardProcess>
          );
        }

        if (item.type === 'feedback' && !item?.data) {
          return (
            <CardProcess title="feedback" key={item.id}>
              <ButtonLabel
                className="mt-1 text-sm"
                onClick={() => {
                  setIsFeedbackOpen(true);
                }}
              >
                adicionar informações
              </ButtonLabel>
            </CardProcess>
          );
        }

        if (item.type === 'feedback' && item?.data) {
          return (
            <CardProcess title="Feedback" onEdit={() => setIsFeedbackOpen(true)} key={item.id}>
              <p className={twMerge('py-1', style.cardDescription[theme])}>{item.data.feedback}</p>

              <Select
                options={[
                  { value: 'approved', label: 'Aprovado' },
                  { value: 'reproved', label: 'Reprovado' },
                  { value: 'pending', label: 'Pendente' },
                ]}
                value={item.status}
                titleLabel="Status:"
                onChange={(status) => handleStatusChange(item, status)}
                variant="inverse"
                className="text-sm"
              />
            </CardProcess>
          );
        }
      })}

      {application && (
        <TestPopup isOpen={isTestOpen} setIsOpen={setIsTestOpen} application={application} />
      )}
      {application && (
        <InterviewPopup
          isOpen={isInterviewOpen}
          setIsOpen={setIsInterviewOpen}
          application={application}
        />
      )}

      {application && (
        <FeedbackPopup
          isOpen={isFeedbackOpen}
          setIsOpen={setIsFeedbackOpen}
          application={application}
        />
      )}
    </>
  );
};

export default CardProcessContext;
