import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { DataPicker } from '@/components/shared/DataPicker';
import { InputLabel } from '@/components/shared/InputLabel';
import { TextArea } from '@/components/shared/TextArea';
import { useAuthContext } from '@/contexts/AuthContext';
import { withTheme } from '@/contexts/ThemeContext';
import { useCreateOrUpdateUser } from '@/firebase/firestore/mutations';
import { uuid } from '@/firebase/uuid';

const PopupExtras = withTheme(
  ({ className, variant = 'default', setIsOpen, editItem, ...props }) => {
    const formSchema = z.object({
      name: z.string().min(1, 'o cargo é obrigatório'),
      startDate: z.string().min(1, 'a data de inicio é obrigatória'),
      endDate: z.string().min(1, 'a data de término é obrigatória'),
      description: z.string().min(1, 'a descrição é obrigatória'),
    });

    const { register, handleSubmit } = useForm({
      defaultValues: editItem,
      resolver: zodResolver(formSchema),
    });

    const { user } = useAuthContext();
    const { mutate: createOrUpdateUser } = useCreateOrUpdateUser();

    const handleForm = async (formData) => {
      if (editItem) {
        const updatedExperince = user?.extras?.map((item) =>
          item.id == editItem?.id ? { ...editItem, ...formData } : item,
        );
        const data = {
          id: user.id,
          extras: updatedExperince,
        };

        createOrUpdateUser(data);
        setIsOpen(false);
        return;
      }

      const currExperince = user?.extras || [];
      const data = {
        id: user.id,
        extras: [...currExperince, { id: uuid(), ...formData }],
      };

      createOrUpdateUser(data);
      setIsOpen(false);
    };

    return (
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleForm)}>
        <InputLabel
          placeholder="ex: Wizard"
          label="Nome da instituição:"
          className=""
          variant="inverseSecundary"
          register={register('name')}
        />
        <InputLabel
          placeholder="ex: Inglês Avançado"
          label="Curso:"
          className=""
          variant="inverseSecundary"
          register={register('course')}
        />
        <DataPicker registerStart={register('startDate')} registerEnd={register('endDate')} />
        <TextArea
          variant="inverse"
          id={'description'}
          label={'Descrição'}
          placeholder={'Descreva algo...'}
          rows={10}
          register={register('description')}
        />
        <div className="flex justify-evenly mt-7 gap-2">
          {editItem && <ButtonPrimary variant="inverseSecundary">Deletar</ButtonPrimary>}
          <ButtonPrimary variant="inverse">Salvar</ButtonPrimary>
        </div>
      </form>
    );
  },
);

export { PopupExtras };
