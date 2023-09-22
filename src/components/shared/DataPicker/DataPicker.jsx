import { twMerge } from 'tailwind-merge';
import { InputPopup } from '../InputPopup';
import { themes, withTheme } from '@/contexts/ThemeContext';

const DataPicker = withTheme(
  ({ theme, label, type, id, className, placeholder, variant = 'default' }) => {
    const styles = {
      default: {
        text: {
          [themes.DEFAULT]: 'text-neutral-0',
          [themes.DARK]: 'text-neutral-0',
          [themes.LIGHT]: 'text-neutral-90',
        },
      },
    };

    const style = styles[variant];

    return (
      <div className="w-full flex flex-col gap-1">
        <label className={twMerge('text-base font-semibold', style.text[theme])}>Periodo</label>
        <div className="flex items-center justify-between">
          <InputPopup type={'date'} id={'start'} className={'w-[45%]'} />
          <p className={style.text[variant]}>à</p>
          <InputPopup type={'date'} id={'end'} className={'w-[45%]'} />
        </div>
      </div>
    );
  },
);

export { DataPicker };
