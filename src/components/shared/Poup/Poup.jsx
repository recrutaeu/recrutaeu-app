'use client';
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
  inverseSecundary: {
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
  inverseForm: {
    background: {
      [themes.DEFAULT]: 'bg-primary-90',
      [themes.DARK]: 'bg-neutral-90',
      [themes.LIGHT]: 'bg-neutral-0',
    },
    icon: {
      [themes.DEFAULT]: 'text-primary-40',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
  },
  inverseTertiary: {
    background: {
      [themes.DEFAULT]: 'bg-neutral-0',
      [themes.DARK]: 'bg-neutral-90',
      [themes.LIGHT]: 'bg-neutral-0',
    },
    icon: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
  },
  inverseForm: {
    background: {
      [themes.DEFAULT]: 'bg-primary-90',
      [themes.DARK]: 'bg-neutral-90',
      [themes.LIGHT]: 'bg-neutral-0',
    },
    icon: {
      [themes.DEFAULT]: 'text-primary-40',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
  },
};

const Poup = ({ children, isOpen, setIsOpen, title, className, variant = 'default' }) => {
  const { theme } = useTheme();
  const style = styles[variant];

  return isOpen ? (
    <div
      className={twMerge(
        'bg-neutral-90 bg-opacity-50 w-screen h-[calc(100dvh)] absolute z-50 top-0 left-0',
        className,
      )}
    >
      <div
        className={twMerge(
          'w-full h-full lg:w-1/2 absolute top-0 right-0',
          style.background[theme],
        )}
      >
        <div className="w-full h-full flex flex-col">
          <div className="flex flex-col w-full border-b ">
            <div className="w-full flex justify-between px-5 py-5 items-center">
              <Title variant={variant} className="text-lg lg:text-2xl">
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

export { Poup };
