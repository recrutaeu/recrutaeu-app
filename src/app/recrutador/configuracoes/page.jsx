'use client';
import { AccessibilityNavbar } from '@/components/shared/AccessibilityNavbar';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { InputLabel } from '@/components/shared/InputLabel';
import { InputPassword } from '@/components/shared/InputPassword';
import { Layout } from '@/components/shared/Layout';
import { themes, useTheme } from '@/contexts/ThemeContext';
import { useRouter } from 'next/navigation';

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
  const route = useRouter();

  return (
    <Layout.Left variant="inverse">
      <AccessibilityNavbar
        onBack={() => {
          route.push('/');
        }}
      />
      <div className="mt-8 overflow-auto">
        <form className="flex flex-col gap-2">
          <p className={style.title[theme]}>Dados obrigatórios</p>
          <InputLabel label="Empresa" />
          <InputLabel label="Nome completo" />
          <InputLabel label="Email" />
          <InputLabel label="Celular" />

          <div className="w-full flex justify-center mt-3">
            <ButtonLink className="font-semibold">salvar alterações</ButtonLink>
          </div>
        </form>
        <form className="flex flex-col gap-4 mt-8">
          <p className={style.title[theme]}>Senha</p>
          <InputPassword label="senha atual" variant="inverseSecundary" />
          <InputPassword label="nova senha" variant="inverseSecundary" />
          <InputPassword label="repitir nova senha" variant="inverseSecundary" />

          <div className="w-full flex justify-center mt-3">
            <ButtonLink className="font-semibold">salvar alterações</ButtonLink>
          </div>
        </form>
      </div>
    </Layout.Left>
  );
};
export default Settings;
