import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { DataPicker } from '@/components/shared/DataPicker/DataPicker';
import { InputLabel } from '@/components/shared/InputLabel';
import { TextArea } from '@/components/shared/TextArea';
import { withTheme } from '@/contexts/ThemeContext';
import { useCreateOrUpdateUser } from '@/firebase/firestore/mutations';
import { uuid } from '@/firebase/uuid';

const PopupExperiences = withTheme(
  ({ className, variant = 'default', setIsOpen, user, editItem, ...props }) => {
    const formSchema = z.object({
      name: z.string().min(1, 'o nome é obrigatório'),
      role: z.string().min(1, 'o cargo é obrigatório'),
      startDate: z.string().min(1, 'a data de inicio é obrigatória'),
      endDate: z.string().min(1, 'a data de término é obrigatória'),
      description: z.string().min(1, 'a descrição é obrigatória'),
    });

    const { register, handleSubmit, reset } = useForm({
      defaultValues: editItem,
      resolver: zodResolver(formSchema),
    });

    const { mutate: createOrUpdateUser } = useCreateOrUpdateUser();

    const handleForm = async (formData) => {
      if (editItem) {
        const updatedExperince = user?.experiencies?.map((item) =>
          item.id == editItem.id ? { ...editItem, ...formData } : item,
        );
        const data = {
          id: user.id,
          experiencies: updatedExperince,
        };

        createOrUpdateUser(data);
        reset();
        setIsOpen(false);
        return;
      }

      const currExperince = user?.experiencies || [];
      const data = {
        id: user.id,
        experiencies: [...currExperince, { id: uuid(), ...formData }],
      };

      createOrUpdateUser(data);
      reset();
      setIsOpen(false);
    };

    const handleDelete = () => {
      const data = {
        id: user.id,
        experiencies: user?.experiencies.filter((item) => item.id !== editItem?.id),
      };

      createOrUpdateUser(data);
      setIsOpen(false);
    };

    return (
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleForm)}>
        <InputLabel
          placeholder="ex: Google"
          label="Nome:"
          className=""
          variant="inverseSecundary"
          register={register('name')}
        />
        <InputLabel
          placeholder="ex: Programadora..."
          label="Cargo:"
          className=""
          variant="inverseSecundary"
          register={register('role')}
        />
        <DataPicker registerStart={register('startDate')} registerEnd={register('endDate')} />
        <TextArea
          variant="inverse"
          id={'description'}
          label={'Descrição'}
          placeholder={'Descreva algo...'}
          register={register('description')}
          rows={10}
        />
        <div className="flex justify-evenly mt-7 gap-2">
          {editItem && (
            <ButtonPrimary variant="inverseSecundary" onClick={handleDelete}>
              Deletar
            </ButtonPrimary>
          )}
          <ButtonPrimary variant="inverse">Salvar</ButtonPrimary>
        </div>
      </form>
    );
  },
);

export { PopupExperiences };
