import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { DataPicker } from '@/components/shared/DataPicker';
import { InputLabel } from '@/components/shared/InputLabel';
import { TextArea } from '@/components/shared/TextArea';
import { withTheme } from '@/contexts/ThemeContext';
import { useCreateOrUpdateUser } from '@/firebase/firestore/mutations';
import { uuid } from '@/firebase/uuid';

const PopupExtras = withTheme(
  ({ className, variant = 'default', setIsOpen, editItem, user, ...props }) => {
    const formSchema = z.object({
      name: z.string().min(1, 'o nome do instituição é obrigatório'),
      course: z.string().min(1, 'o curso é obrigatório'),
      startDate: z.string().min(1, 'a data de inicio é obrigatória'),
      endDate: z.string().min(1, 'a data de término é obrigatória'),
      description: z.string().min(1, 'a descrição é obrigatória'),
    });

    const {
      handleSubmit,
      reset,
      control,
      formState: { errors },
    } = useForm({
      defaultValues: editItem,
      resolver: zodResolver(formSchema),
    });

    const { mutate: createOrUpdateUser } = useCreateOrUpdateUser();

    const handleForm = async (formData) => {
      if (editItem) {
        const updatedExtas = user?.extras?.map((item) =>
          item.id == editItem?.id ? { ...editItem, ...formData } : item,
        );
        const data = {
          id: user.id,
          extras: updatedExtas,
        };

        createOrUpdateUser(data);
        reset();
        setIsOpen(false);
        return;
      }

      const currExtras = user?.extras || [];
      const data = {
        id: user.id,
        extras: [...currExtras, { id: uuid(), ...formData }],
      };

      createOrUpdateUser(data);
      reset();
      setIsOpen(false);
    };

    const handleDelete = () => {
      const data = {
        id: user.id,
        extras: user?.extras.filter((item) => item.id !== editItem?.id),
      };

      createOrUpdateUser(data);
      setIsOpen(false);
    };

    return (
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleForm)}>
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <InputLabel
                placeholder="ex: Wizard"
                type="text"
                label="Nome da instituição:"
                variant="inverseSecundary"
                onChange={onChange}
                value={value}
                error={errors?.['name']?.message}
              />
            );
          }}
        />

        <Controller
          name="course"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <InputLabel
                placeholder="ex: Inglês Avançado"
                type="text"
                label="Curso:"
                variant="inverseSecundary"
                onChange={onChange}
                value={value}
                error={errors?.['course']?.message}
              />
            );
          }}
        />

        <DataPicker
          label="Prazo"
          startName="startDate"
          endName="endDate"
          control={control}
          error={errors?.['startDate']?.message || errors?.['endDate']?.message}
        />

        <Controller
          name="description"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <TextArea
                variant="inverse"
                id={'description'}
                label="Descrição"
                placeholder="Descreva algo..."
                rows={10}
                onChange={onChange}
                value={value}
                error={errors?.['description']?.message}
              />
            );
          }}
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

export { PopupExtras };
