import { twMerge } from 'tailwind-merge';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { commons } from '@/locales';

const styles = {
  default: {
    text: {
      [themes.DEFAULT]: 'text-neutral-10',
      [themes.DARK]: 'text-neutral-10',
      [themes.LIGHT]: 'text-neutral-90',
    },
    middleText: {
      [themes.DEFAULT]: 'text-primary-40',
      [themes.DARK]: 'text-neutral-60',
      [themes.LIGHT]: 'text-neutral-90',
    },
  },
};

const Midle = () => {
  const { theme } = useTheme();
  const style = styles['default'];

  return (
    <>
      {' '}
      <p
        className={twMerge(
          'uppercase lg:text-7xl xl:text-8xl font-bold leading-none',
          style.text[theme],
        )}
      >
        {commons.home.authenticity}
      </p>
      <p
        className={twMerge(
          'uppercase lg:text-7xl xl:text-8xl font-bold leading-none ml-[40%] mr-10',
          style.middleText[theme],
        )}
      >
        {commons.home.ease}
      </p>
      <p
        className={twMerge(
          'uppercase lg:text-7xl xl:text-8xl font-bold leading-none ml-[5%]',
          style.text[theme],
        )}
      >
        {commons.home.employability}
      </p>
    </>
  );
};

const MidleDescription = () => {
  const { theme } = useTheme();
  const style = styles['default'];

  return (
    <div
      className={twMerge(
        'text-center mt-11 grow lg:text-left lg:w-1/2 lg:absolute lg:top-[20%]',
        style.text[theme],
      )}
    >
      <p className="text-xl">
        <strong>Seja bem-vindo</strong> a plataforma
        <strong className={twMerge(style.middleText[theme], 'leading-10')}> recrutaeu. </strong>
      </p>
      <p className="leading-10 text-xl">{commons.home.description.partTwo}</p>
    </div>
  );
};

export { Midle, MidleDescription };
