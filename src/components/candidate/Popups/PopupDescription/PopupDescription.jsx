import { TextArea } from '@/components/shared/TextArea/TextArea';
import { withTheme } from '@/contexts/ThemeContext';
import { useState } from 'react';

const PopupDescription = withTheme(({ className, variant = 'default', user={}, ...props }) => {

  return (
    <div className="py-7 flex flex-col gap-4">
      <TextArea id={'description'} placeholder={'Descreva algo...'} value={user.descricao}/>
    </div>
  );
});

export { PopupDescription };
