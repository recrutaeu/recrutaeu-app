import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { Title } from '@/components/shared/Title';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { commons } from '@/locales';
import { twMerge } from 'tailwind-merge';

const styles = {
  default: {
    title: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90 ',
    },
    text: {
      [themes.DEFAULT]: 'text-neutral-90 text-base font-medium leading-7 flex',
      [themes.DARK]: 'text-neutral-0 text-base font-medium leading-7 flex',
      [themes.LIGHT]: 'text-neutral-90 text-base font-medium leading-7 flex',
    },
    icon: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90 ',
    },
  },
};

const InformationJob = 
  ({
    company,
    job,
    city,
    state,
    remuneration,
    contract,
    differential,
    descriptionJob,
   
    variant = 'default',
  }) => {
    const {theme} = useTheme()
    const style = styles[variant];

    return (
      <>
        <Title className="text-3xl leading-8 mb-10" variant="inverseSecundary">
          {commons.jobs.informationJob.title}
        </Title>
        <div className="grow overflow-auto no-scrollbar mb-10">
          <p className={twMerge('text-lg  font-bold leading-7 ', style.title[theme])}>{company}</p>

          <div className={twMerge(style.text[theme], 'mt-3')}>
            <p className="mr-1 capitalize font-bold">{`${commons.jobs.descriptionJob.job}:`}</p>
            <p className="capitalize">{job}</p>
          </div>

          <div className={style.text[theme]}>
            <p className="mr-1 capitalize font-bold">{`${commons.jobs.descriptionJob.location}:`}</p>
            <p className="capitalize">{`${city} - ${state}`}</p>
          </div>

          <div className={style.text[theme]}>
            <p className="mr-1 capitalize font-bold">{`${commons.jobs.descriptionJob.remuneration}:`}</p>
            <p className="capitalize">{`R$ ${remuneration}`}</p>
          </div>

          <div className={style.text[theme]}>
            <p className="mr-1 capitalize font-bold">{`${commons.jobs.descriptionJob.contract}:`}</p>
            <p className="lowercase">{contract}</p>
          </div>

          <div className={style.text[theme]}>
            <p className="mr-1 capitalize font-bold">{`${commons.jobs.informationJob.differential}:`}</p>
            <p className="capitalize">{differential}</p>
          </div>

          <p className={twMerge(' mt-8 mb-4', style.text[theme])}>{descriptionJob}</p>
        </div>
        <div className="max-w-[100%] flex justify-center">
          <ButtonPrimary variant="inverseSecundary">{commons.jobs.button.label}</ButtonPrimary>
        </div>
      </>
    );
  };

export { InformationJob };
