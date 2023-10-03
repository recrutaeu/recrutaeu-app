'use client';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { TitleForm } from './TitleForm';
import { ButtonLabel } from '@/components/shared/ButtonLabel';
import { InputLabel } from '@/components/shared/InputLabel';
import { InputPassword } from '@/components/shared/InputPassword';
import { Title } from '@/components/shared/Title';
import { useAuthContext } from '@/contexts/AuthContext';
import { useToast } from '@/contexts/ToastContext';
import { updateUserPassword } from '@/firebase/auth/update-password';
import { useCreateOrUpdateUser } from '@/firebase/firestore/mutations';
import { commons } from '@/locales';

const Settings = () => {
  const { user } = useAuthContext();

  const { setToast } = useToast();

  const formSchema = z.object({
    name: z.string().min(1, 'A razão social é obrigatória'),
    email: z.string().min(1, 'O email é obrigatório.').email('Por favor insira um email válido.'),
  });

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

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user.name,
      email: user.email,
    },
    resolver: zodResolver(formSchema),
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

  const handleForm = async (formData) => {
    const data = {
      id: user.id,
      name: formData.name,
      email: formData.email,
    };
    createOrUpdateUser(data);
    setToast({
      message: 'Dados pessoais alterados com sucesso!',
      type: 'success',
    });
  };

  return (
    <>
      <Title className="text-xl lg:text-3xl px-5 lg:pl-10 lg:pr-12" variant="inverse">
        {commons.settings.title}
      </Title>

      <div className="h-full overflow-hidden">
        <div className="h-full overflow-auto flex flex-col lg:gap-8 lg:w-1/2  lg:pl-10 lg:pr-12 px-5 py-5">
          <form className="flex w-full flex-col gap-3 lg:gap-5" onSubmit={handleSubmit(handleForm)}>
            {/* <TitleForm>{commons.settings.form.titleDocument}</TitleForm> */}

            <Controller
              name="name"
              control={control}
              render={({ field: { onChange, value } }) => {
                return (
                  <InputLabel
                    label="Nome da empresa"
                    variant="inverse"
                    type="text"
                    onChange={onChange}
                    value={value}
                    error={errors?.['name']?.message}
                  />
                );
              }}
            />

            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, value } }) => {
                return (
                  <InputLabel
                    type="email"
                    placeholder="email"
                    label="Email"
                    variant="inverse"
                    onChange={onChange}
                    value={value}
                    error={errors?.['email']?.message}
                  />
                );
              }}
            />

            <div className="w-full flex justify-center mt-3">
              <ButtonLabel className="font-semibold">
                {commons.settings.form.button.label}
              </ButtonLabel>
            </div>
          </form>
          <form
            className="flex w-full flex-col gap-4 lg:gap-5 mt-8 lg:mt-0"
            onSubmit={passwordForm.handleSubmit(handleFormPassword)}
          >
            <TitleForm>{commons.settings.form.titlePassword}</TitleForm>

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
                    error={errors?.['oldPassword']?.message}
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
                    error={errors?.['password']?.message}
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
                    error={errors?.['confirmPassword']?.message}
                  />
                );
              }}
            />
            {/* <InputPassword label="senha atual" variant="inverseSecundary" />
              <InputPassword label="nova senha" variant="inverseSecundary" />
              <InputPassword label="repitir nova senha" variant="inverseSecundary" /> */}

            <div className="w-full flex justify-center mt-3">
              <ButtonLabel className="font-semibold">
                {commons.settings.form.button.label}
              </ButtonLabel>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Settings;
