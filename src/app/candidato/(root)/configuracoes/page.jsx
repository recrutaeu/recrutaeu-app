'use client';
import { ButtonLabel } from '@/components/shared/ButtonLabel';
import { InputLabel } from '@/components/shared/InputLabel';
import { InputPassword } from '@/components/shared/InputPassword';
import { Select } from '@/components/shared/Select';
import { Title } from '@/components/shared/Title';
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
    <div className="overflow-auto lg:overflow-hidden">
      <Title className="text-xl lg:text-3xl px-5 lg:px-7" variant="inverse">
        {commons.settings.title}
      </Title>

      <div className="h-full overflow-hidden flex flex-col lg:flex-row">
        <div className="h-full lg:overflow-auto flex flex-col lg:gap-8 lg:w-1/2 lg:px-7 px-5 pt-5 pb-5 lg:pb-20 ">
          <form className="flex w-full flex-col gap-2">
            <p className={style.title[theme]}>{commons.settings.form.titleDocument}</p>
            <InputLabel label="Nome completo" variant="inverse" />
            <InputLabel label="Data de nascimento" type={'date'} variant="inverse" />
            <InputLabel label="CPF" variant="inverse" />
            <InputLabel label="E-mail" type={'e-mail'} variant="inverse" />
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
        <div className="h-full overflow-auto flex flex-col lg:gap-8 lg:w-1/2 lg:px-7 px-5 pt-5 pb-20">
          <form className="flex w-full flex-col gap-2">
            <p className={style.title[theme]}>{commons.settings.form.titleDocumentSecundary}</p>
            <InputLabel label="CEP" variant="inverse" />
            <div className="flex gap-2">
              <Select
                titleLabel="Estado:"
                label="---"
                options={[
                  { value: 'AC', label: 'Acre' },
                  { value: '', label: 'Alagoas' },
                  { value: '', label: 'Amapá' },
                  { value: 'AM', label: 'Amazonas ' },
                  { value: 'BA', label: 'Bahia' },
                  { value: 'CE', label: 'Ceará' },
                  { value: 'DF', label: 'Distrito Federal' },
                  { value: 'ES', label: 'Espírito Santo' },
                  { value: 'GO', label: 'Goiás' },
                  { value: 'MA', label: 'Maranhão' },
                  { value: 'MT', label: 'Mato Grosso' },
                  { value: 'MS', label: 'Mato Grosso do Sul' },
                  { value: 'MG', label: 'Minas Gerais' },
                  { value: 'PA', label: 'Pará' },
                  { value: 'PB', label: 'Paraíba' },
                  { value: 'PR', label: 'Paraná' },
                  { value: 'PE', label: 'Pernambuco' },
                  { value: 'PI', label: 'Piauí' },
                  { value: 'RJ', label: 'Rio de Janeiro' },
                  { value: 'RN', label: 'Rio Grande do Norte' },
                  { value: 'RS', label: 'Rio Grande do Sul' },
                  { value: 'RO', label: 'Rondônia' },
                  { value: 'RR', label: 'Roraima' },
                  { value: 'SC', label: 'Santa Catarina' },
                  { value: 'SP', label: 'São Paulo' },
                  { value: 'SE', label: 'Sergipe' },
                  { value: 'TO', label: 'Tocantins' },
                ]}
                onChange={console.log}
              />
              <InputLabel label="Cidade" variant="inverse" />
            </div>
            <Select
              titleLabel="Gênero:"
              label="---"
              options={[
                { value: 'M', label: 'Masculino' },
                { value: 'F', label: 'Feminino' },
                { value: 'O', label: 'Outro' },
              ]}
              onChange={console.log}
            />

            <Select
              titleLabel="Tipo de Deficiencia:"
              label="---"
              options={[
                { value: '1', label: 'A' },
                { value: '2', label: 'B' },
                { value: '3', label: 'C' },
              ]}
              onChange={console.log}
            />

            <Select
              titleLabel="Etnia:"
              label="---"
              options={[
                { value: 'Branco', label: 'Branca' },
                { value: 'Preto', label: 'Preto' },
                { value: 'Pardo', label: 'Pardo' },
                { value: 'Outro', label: 'Outro' },
              ]}
              onChange={console.log}
            />

            <div className="w-full flex justify-center mt-3">
              <ButtonLabel className="font-semibold">
                {commons.settings.form.button.label}
              </ButtonLabel>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Settings;
