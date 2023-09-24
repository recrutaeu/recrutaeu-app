import { Fragment, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { AuthNavbar } from '../AuthNavbar';
import { ButtonPrimary } from '../ButtonPrimary';
import { Title } from '../Title';
import { themes, withTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    div: {
      [themes.DEFAULT]: 'bg-primary-90',
      [themes.DARK]: 'bg-neutral-90',
      [themes.LIGHT]: 'bg-neutral-0',
    },
  },
  inverse: {
    div: {
      [themes.DEFAULT]: 'bg-neutral-10',
      [themes.DARK]: 'bg-neutral-0',
      [themes.LIGHT]: 'bg-neutral-90',
    },
  },
};

const Popup = withTheme(
  ({
    children,
    className,
    theme,
    onSave,
    isOpen,
    setIsOpen,
    title,
    variant = 'default',
    ...props
  }) => {
    const style = styles[variant];


    const [description, setDescription] = useState('')


    if (isOpen) {
      return (
        <div className="fixed top-0 w-screen h-full bg-black/80 z-10 flex justify-end items-center">
          <div
            className={twMerge(
              'w-full h-[100%] px-5 py-7 lg:px-8 lg:w-[40%] overflow-auto',
              style.div[theme],
              className,
            )}
            {...props}
          >
            <div className="block lg:hidden">
              <AuthNavbar variant="inverse" className={'mb-4'} />
            </div>

            <Title className="text-2xl font-semibold">{title}</Title>
            {children}
            <div className="w-full flex justify-between">
              <ButtonPrimary variant="inverse" onClick={() => setIsOpen(false)}>
                {' '}
                Salvar{' '}
              </ButtonPrimary>
            </div>
          </div>
        </div>
      );
    }
  },
);

export { Popup };
