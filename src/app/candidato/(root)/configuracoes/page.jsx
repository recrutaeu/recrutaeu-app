'use client';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ButtonLabel } from '@/components/shared/ButtonLabel';
import { InputLabel } from '@/components/shared/InputLabel';
import { InputPassword } from '@/components/shared/InputPassword';
import { Select } from '@/components/shared/Select';
import { Title } from '@/components/shared/Title';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { useToast } from '@/contexts/ToastContext';
import { useCreateOrUpdateUser } from '@/firebase/firestore/mutations';
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

  const { setToast } = useToast();

  const formSchemaPassword = z
    .object({
      oldPassword: z
        .string()
        .min(1, 'A senha atual é  obrigatória')
        .min(6, 'A senha precisa ter pelo menos 6 caracteres'),
      password: z
        .string()
        .min(1, 'A senha é  obrigatória')
        .min(6, 'A senha precisa ter pelo menos 6 caracteres'),
      confirmPassword: z.string().min(1, 'Confirmação de senha é obrigatório'),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ['confirmPassword'],
      message: 'As senhas não iguais',
    });

  const passwordForm = useForm({
    defaultValues: {
      oldPassword: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(formSchemaPassword),
  });

  const { mutate: createOrUpdateUser } = useCreateOrUpdateUser();

  const handleFormPassword = async (formData) => {
    try {
      const { password } = formData;
      await updateUserPassword(user.email, formData.oldPassword, password);
      setToast({
        message: 'Senha atualizada com sucesso!',
        type: 'success',
      });
      passwordForm.reset();
    } catch (err) {
      setToast({
        message: 'Não foi possivel atualizar a senha, tente novamente mais tarde!',
        type: 'error',
      });
    }
  };

  return (
    <>
      <div className="w-full px-5 pb-4 lg:pb-6">
        <Title className="text-xl lg:text-3xl" variant="inverse">
          {commons.settings.title}
        </Title>
      </div>

      <div className="overflow-auto h-full">
        <div className="flex flex-col lg:flex-row gap-8 px-5 pb-5 lg:pb-10">
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
            <form
              className="flex w-full flex-col gap-3"
              onSubmit={passwordForm.handleSubmit(handleFormPassword)}
            >
              <p className={style.title[theme]}>{commons.settings.form.titlePassword}</p>

              <Controller
                name="oldPassword"
                control={passwordForm.control}
                render={({ field: { onChange, value } }) => {
                  return (
                    <InputPassword
                      placeholder="senha atual"
                      variant="inverse"
                      onChange={onChange}
                      value={value}
                      error={passwordForm.formState.errors?.['oldPassword']?.message}
                    />
                  );
                }}
              />

              <Controller
                name="password"
                control={passwordForm.control}
                render={({ field: { onChange, value } }) => {
                  return (
                    <InputPassword
                      placeholder="nova senha"
                      variant="inverse"
                      onChange={onChange}
                      value={value}
                      error={passwordForm.formState.errors?.['password']?.message}
                    />
                  );
                }}
              />

              <Controller
                name="confirmPassword"
                control={passwordForm.control}
                render={({ field: { onChange, value } }) => {
                  return (
                    <InputPassword
                      placeholder="repetir senha"
                      variant="inverse"
                      onChange={onChange}
                      value={value}
                      error={passwordForm.formState.errors?.['confirmPassword']?.message}
                    />
                  );
                }}
              />

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
                  { value: 'TM', label: 'Transgênero Masculino' },
                  { value: 'F', label: 'Feminino' },
                  { value: 'TF', label: 'Transgênero Feminino' },
                  { value: 'O', label: 'Outro' },
                ]}
                onChange={console.log}
              />

              <Select
                variant="inverse"
                titleLabel="Tipo de Deficiencia:"
                label="---"
                options={[
                  { value: 'DF', label: 'Deficiência Fisica' },
                  { value: 'DV', label: 'Deficiência Visual' },
                  { value: 'DA', label: 'Deficiência Auditiva' },
                  { value: 'DI', label: 'Deficiência Intelectual' },
                  { value: 'DP', label: 'Deficiência Psicossocial' },
                  { value: 'DM', label: 'Deficiência Múltipla' },
                  { value: 'N', label: 'Nenhuma' },
                ]}
                onChange={console.log}
              />

              <Select
                variant="inverse"
                titleLabel="Etnia:"
                label="---"
                options={[
                  { value: 'Branco', label: 'Branca' },
                  { value: 'Preta', label: 'Preta' },
                  { value: 'Pardo', label: 'Parda' },
                  { value: 'Amarela', label: 'Amarela' },
                  { value: 'Indigena', label: 'Indígena' },
                ]}
                onChange={console.log}
              />

              <Select
                variant="inverse"
                titleLabel="Orientação Sexual:"
                label="---"
                options={[
                  { value: 'hetero', label: 'Héterossexual' },
                  { value: 'homo', label: 'Homossexual' },
                  { value: 'outro', label: 'Outro' },
                  { value: 'na', label: 'Prefiro não dizer' },
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
