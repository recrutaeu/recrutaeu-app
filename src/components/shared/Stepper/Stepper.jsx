'use client';
import { LuCheck, LuX } from 'react-icons/lu';
import { twMerge } from 'tailwind-merge';
import { Divider } from '../Divider';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    step: {
      [themes.DEFAULT]: 'text-neutral-90 border-primary-90 bg-neutral-10',
      [themes.DARK]: 'text-neutral-0 border-neutral-0 bg-neutral-90',
      [themes.LIGHT]: 'text-neutral-90 border-neutral-90 bg-neutral-0',
    },
    doneStep: {
      [themes.DEFAULT]: 'text-neutral-0 border-primary-90 bg-primary-90',
      [themes.DARK]: 'text-neutral-90 md:border-neutral-0 bg-neutral-0 border-neutral-90',
      [themes.LIGHT]: 'text-neutral-0 md:border-neutral-90 bg-neutral-90 border-neutral-0',
    },
    repprovedStep: {
      [themes.DEFAULT]: 'bg-red-500 border border-red-400',
      [themes.DARK]: 'text-neutral-90 md:border-neutral-0 bg-neutral-0 border-neutral-90',
      [themes.LIGHT]: 'text-neutral-0 md:border-neutral-90 bg-neutral-90 border-neutral-0',
    },
    text: {
      [themes.DEFAULT]: 'text-neutral-90',
      [themes.DARK]: 'text-neutral-90 md:text-neutral-0',
      [themes.LIGHT]: 'text-neutral-0 md:text-neutral-90',
    },
    boldText: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-90 md:text-neutral-0',
      [themes.LIGHT]: 'text-neutral-0 md:text-neutral-90',
    },
    stepCon: {
      [themes.DEFAULT]: 'bg-primary-90',
      [themes.DARK]: 'bg-neutral-0',
      [themes.LIGHT]: 'bg-neutral-90',
    },
  },
  inverse: {
    step: {
      [themes.DEFAULT]: 'text-neutral-90 border-primary-40 bg-neutral-10',
      [themes.DARK]: 'text-neutral-0 border-neutral-0 bg-neutral-90',
      [themes.LIGHT]: 'text-neutral-90 border-neutral-90 bg-neutral-0',
    },
    doneStep: {
      [themes.DEFAULT]: 'text-neutral-90 border-primary-40 bg-primary-40',
      [themes.DARK]: 'text-neutral-90 border-neutral-90 bg-neutral-0',
      [themes.LIGHT]: 'text-neutral-0 border-neutral-0 bg-neutral-90',
    },
    repprovedStep: {
      [themes.DEFAULT]: 'bg-red-400 border border-red-400',
      [themes.DARK]: 'text-neutral-90 border-neutral-90 bg-neutral-0',
      [themes.LIGHT]: 'text-neutral-0 border-neutral-0 bg-neutral-90',
    },
    text: {
      [themes.DEFAULT]: 'text-neutral-0',
      [themes.DARK]: 'text-neutral-90',
      [themes.LIGHT]: 'text-neutral-0',
    },
    boldText: {
      [themes.DEFAULT]: 'text-primary-40',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
    stepCon: {
      [themes.DEFAULT]: 'bg-primary-40',
      [themes.DARK]: 'bg-neutral-0',
      [themes.LIGHT]: 'bg-neutral-90',
    },
  },
};

const Stepper = ({ steps, currentStep, variant = 'default', className, ...props }) => {
  const { theme } = useTheme();
  const style = styles[variant];
  const nextStep =
    steps[currentStep.index + 1] && currentStep.status === 'approved'
      ? steps[currentStep.index + 1]
      : currentStep;

  const titles = {
    subscribed: 'Inscrição',
    test: 'Teste',
    interview: 'Entrevista',
    feedback: 'Feedback',
  };

  return (
    <div className={twMerge('flex flex-col', className)}>
      <div className="flex gap-1 items-end mb-2 flex-wrap">
        <p className={twMerge('w-auto', style.text[theme])}>Status da candidatura:</p>
        <p className={twMerge('font-semibold', style.boldText[theme])}>{titles[nextStep?.type]}</p>
      </div>

      <div className="flex items-center">
        {steps.map((s, i) => {
          const stepDoneStyle =
            s.index <= currentStep?.index && currentStep?.status === 'approved'
              ? style.doneStep[theme]
              : s?.status === 'reproved'
              ? style.repprovedStep[theme]
              : null;
          const stepContent =
            s.index <= currentStep?.index && currentStep?.status === 'approved' ? (
              <LuCheck size={15} />
            ) : s?.status === 'reproved' ? (
              <LuX size={15} />
            ) : (
              i + 1
            );

          return (
            <>
              <div
                className={twMerge(
                  'text-sm font-semibold border-2 w-8 h-8 rounded-full flex justify-center items-center drop-shadow-md',
                  style.step[theme],
                  stepDoneStyle,
                )}
              >
                {stepContent}
              </div>
              {i < steps.length - 1 ? (
                <div className={twMerge('w-2 h-[2px]', style.stepCon[theme])} />
              ) : null}
            </>
          );
        })}
      </div>
    </div>
  );
};

export { Stepper };
