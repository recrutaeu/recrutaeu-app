'use client';
import { MdClose } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';
import { ButtonIcon } from '../ButtonIcon';
import { Title } from '../Title';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    background: {
      [themes.DEFAULT]: 'bg-primary-90',
      [themes.DARK]: 'bg-neutral-90',
      [themes.LIGHT]: 'bg-neutral-0',
    },
    icon: {
      [themes.DEFAULT]: 'text-neutral-0',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
  },
};

const Popup = ({ children, isOpen, setIsOpen, title, className, variant }) => {
  const { theme } = useTheme();
  const style = styles['default'];

  return isOpen ? (
    <div className="bg-neutral-90 bg-opacity-50 w-screen h-full fixed z-50 top-0 left-0">
      <div
        className={twMerge(
          'w-full h-full lg:w-1/2 absolute top-0 right-0',
          className,
          style.background[theme],
        )}
      >
        <div className="w-full h-full flex flex-col">
          <div className="flex flex-col w-full border-b ">
            <div className="w-full flex justify-between px-5 py-5 items-center">
              <Title variant='inverseForm' className="text-lg lg:text-2xl">
                {title}
              </Title>
              <ButtonIcon onClick={() => setIsOpen(false)}>
                <MdClose size={24} className={twMerge(style.icon[theme])} />
              </ButtonIcon>
            </div>
          </div>
          <div className="w-full overflow-hidden">
            <div className="h-full overflow-x-auto px-5 py-4">{children}</div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export { Popup };
