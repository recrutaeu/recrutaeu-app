import { useState } from 'react';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { TextArea } from '@/components/shared/TextArea';
import { withTheme } from '@/contexts/ThemeContext';

const PopupDescription = withTheme(({ className, variant = 'default', user = {}, ...props }) => {
  return (
    <form className="flex flex-col justify-center items-center gap-6">
      <TextArea
        id={'description'}
        placeholder={'Descreva algo...'}
        rows={14}
        value={user.descricao}
      />
      <ButtonPrimary variant="inverse">Salvar</ButtonPrimary>
    </form>
  );
});

export { PopupDescription };