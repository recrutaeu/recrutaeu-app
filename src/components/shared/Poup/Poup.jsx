'use client';
import { Fragment } from 'react';
import { MdClose } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';
import { ButtonIcon } from '../ButtonIcon';
import { Title } from '../Title';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    background: {
      [themes.DEFAULT]: 'bg-neutral-10',
      [themes.DARK]: 'bg-neutral-90',
      [themes.LIGHT]: 'bg-neutral-0',
    },
    icon: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
  },
};

const Poup = ({ children, isOpen, setIsOpen, title, className, variant }) => {
  const { theme } = useTheme();
  const style = styles['default'];

  return isOpen ? (
    <div className="bg-neutral-90 bg-opacity-50 w-screen h-screen fixed z-50 left-0 ">
      <div
        className={twMerge(
          'w-screen h-full lg:w-1/2 lg:fixed lg:right-0 px-5 py-4',
          className,
          style.background[theme],
        )}
      >
        <div className="max-h-[64px]">
          <div className="w-full flex justify-end">
            <ButtonIcon onClick={() => setIsOpen(false)}>
              <MdClose size={24} className={twMerge(style.icon[theme])} />
            </ButtonIcon>
          </div>
          <Title variant={variant} className="text-lg lg:text-2xl mb-3 lg:mb-4">
            {title}
          </Title>
        </div>

        <div className="max-h-[calc(100%-64px)] w-full mt-1 overflow-auto no-scrollbar">
          <div className="w-full overflow-hidden h-full">{children}</div>
        </div>
      </div>
    </div>
  ) : (
    <Fragment />
  );
};

export { Poup };
