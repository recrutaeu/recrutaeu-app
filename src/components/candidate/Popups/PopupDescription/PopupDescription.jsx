import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ButtonPrimary } from '@/components/shared/ButtonPrimary';
import { TextArea } from '@/components/shared/TextArea';
import { useAuthContext } from '@/contexts/AuthContext';
import { withTheme } from '@/contexts/ThemeContext';
import { useCreateOrUpdateUser } from '@/firebase/firestore/mutations';

const PopupDescription = withTheme(
  ({ className, variant = 'default', editItem, setIsOpen, ...props }) => {
    const formSchema = z.object({
      summary: z.string(),
    });

    const {
      handleSubmit,
      formState: { errors },
      control,
    } = useForm({
      defaultValues: editItem,
      resolver: zodResolver(formSchema),
    });

    const { user } = useAuthContext();
    const { mutate: createOrUpdateUser } = useCreateOrUpdateUser();

    const handleForm = async (formData) => {
      const data = {
        id: user.id,
        summary: formData.summary,
      };

      setIsOpen(false);
      createOrUpdateUser(data);
    };

    return (
      <form
        className="flex flex-col justify-center items-center gap-6"
        onSubmit={handleSubmit(handleForm)}
      >
        <Controller
          name="summary"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <TextArea
                id={'description'}
                placeholder={'Descreva algo...'}
                rows={14}
                onChange={onChange}
                value={value}
                error={errors?.['summary']?.message}
              />
            );
          }}
        />

        <ButtonPrimary variant="inverse">Salvar</ButtonPrimary>
      </form>
    );
  },
);

export { PopupDescription };
