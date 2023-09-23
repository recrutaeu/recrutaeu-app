'use client';
import { LuLogOut } from 'react-icons/lu';
import { ButtonLabel } from '@/components/shared/ButtonLabel';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { InputLabel } from '@/components/shared/InputLabel';
import { InputPassword } from '@/components/shared/InputPassword';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { commons } from '@/locales';

const styles = {
  default: {
    title: {
      [themes.DEFAULT]: 'text-primary-90 font-bold  text-base',
      [themes.DARK]: 'text-neutral-90 font-bold  text-base',
      [themes.LIGHT]: 'text-neutral-0 font-bold  text-base',
    },
  },
};

const Settings = () => {
  const { theme } = useTheme();
  const style = styles['default'];

  return (
    <div className="h-full overflow-hidden">
      <div className="h-full overflow-auto flex flex-col lg:gap-8 lg:w-1/2 lg:px-7 px-5 py-5">
        <form className="flex w-full flex-col gap-2">
          <p className={style.title[theme]}>{commons.settings.form.titleDocument}</p>
          <InputLabel label="Empresa" variant="inverse" />
          <InputLabel label="Nome completo" variant="inverse" />
          <InputLabel label="Email" variant="inverse" />
          <InputLabel label="Celular" variant="inverse" />

          <div className="w-full flex justify-center mt-3">
            <ButtonLabel className="font-semibold">
              {commons.settings.form.button.label}
            </ButtonLabel>
          </div>
        </form>
        <form className="flex w-full flex-col gap-4 mt-8 lg:mt-0">
          <p className={style.title[theme]}>{commons.settings.form.titlePassword}</p>
          <InputPassword label="senha atual" variant="inverseSecundary" />
          <InputPassword label="nova senha" variant="inverseSecundary" />
          <InputPassword label="repitir nova senha" variant="inverseSecundary" />

          <div className="w-full flex justify-center mt-3">
            <ButtonLabel className="font-semibold">
              {commons.settings.form.button.label}
            </ButtonLabel>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Settings;
