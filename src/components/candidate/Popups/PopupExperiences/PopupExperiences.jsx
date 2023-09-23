import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { DataPicker } from '@/components/shared/DataPicker/DataPicker';
import { InputLabel } from '@/components/shared/InputLabel';
import { TextArea } from '@/components/shared/TextArea/TextArea';
import { withTheme } from '@/contexts/ThemeContext';

const PopupExperiences = withTheme(({ className, variant = 'default', editItem, ...props }) => {
  return (
    <form className="flex flex-col gap-4">
      <InputLabel placeholder="ex: Google" label="Nome:" className="" variant='inverseSecundary'/>
      <InputLabel placeholder="ex: Programadora..." label="Cargo:" className="" variant='inverseSecundary'/>
      <DataPicker />
      <TextArea variant='inverse' id={'description'} label={'Descrição'} placeholder={'Descreva algo...'} rows={10} />
      <div className='flex justify-evenly mt-7 gap-2'>
        {editItem && <ButtonPrimary variant='inverseSecundary'>Deletar</ButtonPrimary>}
        <ButtonPrimary variant='inverse'>Salvar</ButtonPrimary>
      </div>
    </form>
  );
});

export { PopupExperiences };
