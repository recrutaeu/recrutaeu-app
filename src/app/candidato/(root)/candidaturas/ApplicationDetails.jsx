import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { Poup } from '@/components/shared/Poup';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    backgroundCard: {
      [themes.DEFAULT]: 'bg-neutral-0',
      [themes.DARK]: 'bg-neutral-90',
      [themes.LIGHT]: 'bg-neutral-0',
    },
    text: {
      [themes.DEFAULT]: 'text-neutral-90',
      [themes.DARK]: 'text-neutral-0 ',
      [themes.LIGHT]: 'text-neutral-90 ',
    },
  },
};

const ApplicationDetails = ({ isOpen, setIsOpen, application }) => {
  const { theme } = useTheme();
  const style = styles['default'];

  return (
    <Poup
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Etapas do processo"
      variant="inverseFormDetails"
    >
      <div className="h-full overflow-hidden">
        <div className="h-full overflow-auto flex flex-col gap-3 ">
          {application?.steps?.map((step) => {
            if (step.type === 'subscribed') {
              return (
                <>
                  <div
                    className={twMerge(
                      'flex lg:items-center flex-col lg:flex-row  gap-1lg:gap-5 rounded-md p-2',
                      style.backgroundCard[theme],
                    )}
                  >
                    <div className="flex gap-2 items-center">
                      <p className={twMerge(' text-base lg:text-lg font-medium', style.text[theme])}>
                        Data da candidatura:
                      </p>
                      <p className={twMerge('text-base', style.text[theme])}>
                        {step.data.date.toDate().toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className={twMerge('text-base lg:text-lg font-medium', style.text[theme])}>Status:</p>
                      <p className={twMerge('text-base font-light', style.text[theme])}>
                        {step.status}
                      </p>
                    </div>
                  </div>
                </>
              );
            }

            if (step.type === 'test' && step?.data) {
              return (
                <>
                  <div
                    className={twMerge(
                      'flex flex-col gap-2rounded-md p-2',
                      style.backgroundCard[theme],
                    )}
                  >
                    <p className={twMerge('text-base lg:text-xl font-medium', style.text[theme])}>Etapa teste</p>
                    <div className="flex gap-2 items-center">
                      <p className={twMerge('text-base font-medium', style.text[theme])}>Link:</p>
                      <Link
                        href={step.data.link}
                        type="button"
                        className={twMerge('text-base cursor-pointer', style.text[theme])}
                      >
                        {step.data.link}
                      </Link>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <p className={twMerge('text-base font-medium', style.text[theme])}>Prazo:</p>
                      <p
                        className={twMerge('text-base font-light', style.text[theme])}
                      >{`${step.data.startAt
                        .toDate()
                        .toLocaleDateString('pt-br')} à ${step.data.endAt
                        .toDate()
                        .toLocaleDateString('pt-br')}`}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className={twMerge('text-base font-medium', style.text[theme])}>Status:</p>
                      <p className={twMerge('text-base font-light', style.text[theme])}>
                        {step.status}
                      </p>
                    </div>
                  </div>
                </>
              );
            }

            if (step.type === 'interview' && step?.data) {
              return (
                <>
                  <div
                    className={twMerge(
                      'flex flex-col gap-2  rounded-md p-2',
                      style.backgroundCard[theme],
                    )}
                  >
                    <p className={twMerge('text-base lg:text-xl font-medium', style.text[theme])}>Entrevista</p>
                    <div className="flex gap-2 items-center">
                      <p className={twMerge('text-base font-medium', style.text[theme])}>Link:</p>
                      <Link
                        href={step.data.link}
                        type="button"
                        className={twMerge('text-base cursor-pointer', style.text[theme])}
                      >
                        {step.data.link}
                      </Link>
                    </div>
                    <div className="flex lg:flex-row flex-col gap-2 lg:items-center">
                      <p className={twMerge('text-base font-medium', style.text[theme])}>
                        Endereço:
                      </p>
                      <p className={twMerge('text-base font-light', style.text[theme])}>
                        {step.data.address}
                      </p>
                    </div>
                    <div className="flex gap-5">
                      <div className="flex items-center gap-2">
                        <p className={twMerge('text-base font-medium', style.text[theme])}>Data:</p>
                        <p className={twMerge('text-base font-light', style.text[theme])}>
                          {step.data.date.toDate().toLocaleDateString('pt-br')}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className={twMerge('text-base font-medium', style.text[theme])}>
                          Horario:
                        </p>
                        <p className={twMerge('text-base font-light', style.text[theme])}>
                          {step.data.date.toDate().toLocaleTimeString('pt-BR', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className={twMerge('text-base font-medium', style.text[theme])}>Status:</p>
                      <p className={twMerge('text-base font-light', style.text[theme])}>
                        {step.status}
                      </p>
                    </div>
                  </div>
                </>
              );
            }

            if (step.type === 'feedback' && step?.data) {
              return (
                <>
                  <div
                    className={twMerge(
                      'flex flex-col gap-1 lg:gap-2 rounded-md p-2 pb-4',
                      style.backgroundCard[theme],
                    )}
                  >
                    <p className={twMerge('text-base lg:text-xl font-medium', style.text[theme])}>Feedback</p>

                    <p className={twMerge('text-base', style.text[theme])}>{step.data.feedback}</p>
                  </div>
                </>
              );
            }
          })}
        </div>
      </div>
    </Poup>
  );
};

export default ApplicationDetails;
