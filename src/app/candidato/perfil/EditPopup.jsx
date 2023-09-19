import { withTheme } from '@/contexts/ThemeContext';
import { PopupBackground } from '@/components/shared/PopupBackground';
import { Popup } from '@/components/shared/Popup';
import { Input } from '@/components/shared/Input';
import { Title } from '@/components/shared/Title';
import { useContext } from 'react';
import PopupContext from './PopupContext';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';

const EditPopup = withTheme(({ title, type, className, onSave, variant = 'default', ...props }) => {
    const { togglePopup, currentItem } = useContext(PopupContext)

    function buildForm(){
        if(type === 1){
            return (
                <Input.Root>
                    <Input.Field type={'text'} label="Descrição" id="description" />
                </Input.Root>
            )
        }
        return (
            <>
                <Title>{title}</Title>
                <Input.Root>
                    <Input.Field type={'text'} label="Nome" id="name" />
                </Input.Root>
                <Input.Root>
                    <Input.Field type={'text'} label="Cargo" id="role" />
                </Input.Root>
                <div className='flex justify-between'>
                    <Input.Root className='w-[48%]'>
                        <Input.Field type={'date'} label="De" id="start"/>
                    </Input.Root>
                    <Input.Root className='w-[49%]'>
                        <Input.Field type={'date'} label="Até" id="end" />
                    </Input.Root>
                </div>
                <Input.Root>
                    <Input.Field type={'text'} label="Descrição" id="description" />
                </Input.Root>
            </>
        )
    }

    return (
        <PopupBackground>
            <Popup onSave={onSave} className='flex flex-col gap-4 lg:w-[60%] lg:h-auto'>
                {buildForm()}
                <div className='flex justify-center'>
                    <ButtonPrimary variant='inverse' onClick={togglePopup}> Salvar </ButtonPrimary>
                </div>
            </Popup>
        </PopupBackground>
    );
});

export { EditPopup };



