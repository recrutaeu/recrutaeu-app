import { withTheme } from '@/contexts/ThemeContext';
import { InputPopup } from '@/components/shared/InputPopup';
import { DataPicker } from '@/components/shared/DataPicker/DataPicker';
import { Textarea } from '@/components/shared/Textarea/Textarea';

const PopupExperiences = withTheme(({ className, variant = 'default', ...props }) => {

    return (
    <div className='py-7 flex flex-col gap-4'>
        <InputPopup type={'text'} placeholder={'Nome'} id={'name'} label={'Nome'}/>
        <InputPopup type={'text'} placeholder={'Cargo'} id={'work'} label={'Cargo'}/>
        <DataPicker />
        <Textarea id={'description'} label={'Descrição'} placeholder={'Descreva algo...'}/>
    </div>
    );
});

export { PopupExperiences };