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
    <>
      <div className="w-full px-5 pb-4 lg:pb-6">
        <Title className="text-xl lg:text-3xl" variant="inverse">
          {commons.settings.title}
        </Title>
      </div>

      <div className="overflow-auto h-full">
        <div className="flex flex-col lg:flex-row gap-8 px-5">
          <div className="w-full flex flex-col-reverse lg:flex-col  gap-5">
            <form className="flex w-full flex-col gap-3 pt-5 lg:pt-0">
              <p className={style.title[theme]}>{commons.settings.form.titleDocument}</p>
              <InputLabel label="Nome completo" variant="inverse" />
              <InputLabel label="Data de nascimento" type={'date'} variant="inverse" />
              <InputLabel label="CPF" variant="inverse" />
              <InputLabel label="E-mail" type={'e-mail'} variant="inverse" />
              <InputLabel label="Celular" variant="inverse" />

              <div className="w-full flex justify-center">
                <ButtonLabel className="font-semibold">
                  {commons.settings.form.button.label}
                </ButtonLabel>
              </div>
            </form>
            <form className="flex w-full flex-col gap-3">
              <p className={style.title[theme]}>{commons.settings.form.titlePassword}</p>
              <InputPassword label="senha atual" variant="inverseSecundary" />
              <InputPassword label="nova senha" variant="inverseSecundary" />
              <InputPassword label="repitir nova senha" variant="inverseSecundary" />

              <div className="w-full flex justify-center">
                <ButtonLabel className="font-semibold">
                  {commons.settings.form.button.label}
                </ButtonLabel>
              </div>
            </form>
          </div>
          <div className="w-full pb-8">
            <form className="flex w-full flex-col gap-5">
              <p className={style.title[theme]}>{commons.settings.form.titleDocumentSecundary}</p>
              <InputLabel label="CEP" variant="inverse" />
              <div className="flex w-full gap-5">
                <Select
                  className="w-full"
                  variant="inverse"
                  titleLabel="Estado:"
                  label="---"
                  options={[
                    { value: 'AC', label: 'Acre' },
                    { value: 'AL', label: 'Alagoas' },
                    { value: 'AP', label: 'Amapá' },
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
                <InputLabel label="Cidade" variant="inverse" className="w-full" />
              </div>
              <Select
                className="w-full"
                variant="inverse"
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
                variant="inverse"
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
                variant="inverse"
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
    </>
  );
};
export default Settings;
