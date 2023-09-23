import { TextArea } from '@/components/shared/TextArea/TextArea';
import { withTheme } from '@/contexts/ThemeContext';

const PopupDescription = withTheme(({ className, variant = 'default', ...props }) => {
  return (
    <div className="py-7 flex flex-col gap-4">
      <TextArea id={'description'} placeholder={'Descreva algo...'} />
    </div>
  );
});

export { PopupDescription };
