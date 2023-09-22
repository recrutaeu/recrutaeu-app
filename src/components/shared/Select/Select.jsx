'use client';
import { useState } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';
import { themes, useTheme } from '@/contexts/ThemeContext';

const styles = {
  default: {
    label: {
      [themes.DEFAULT]: 'text-primary-90',
      [themes.DARK]: 'text-neutral-0',
      [themes.LIGHT]: 'text-neutral-90',
    },
    buttonLabel: {
      [themes.DEFAULT]: 'bg-neutral-0',
      [themes.DARK]: 'bg-neutral-0',
      [themes.LIGHT]: 'bg-neutral-0 border-2 border-neutral-90',
    },
    ul: {
      [themes.DEFAULT]: 'bg-neutral-0',
      [themes.DARK]: 'bg-neutral-0',
      [themes.LIGHT]: 'bg-neutral-90',
    },
    li: {
      [themes.DEFAULT]: 'bg-neutral-0 hover:bg-primary-90 hover:text-neutral-0 hover:font-medium',
      [themes.DARK]: 'text-neutral-90 hover:bg-neutral-30 hover:font-medium',
      [themes.LIGHT]: 'text-neutral-0 hover:bg-neutral-30 hover:text-neutral-90 hover:font-medium',
    },
  },
};

const Select = ({ titleLabel, label, options, onChange, className }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentLabel, setCurrentLabel] = useState(label);
  const { theme } = useTheme();
  const style = styles['default'];

  const handleChange = (option) => {
    onChange(option.value);
    setCurrentLabel(option.label);
    setIsDropdownOpen(false);
  };

  return (
    <div className={twMerge('relative w-full', className)}>
      <p className={twMerge('mb-1 w-full font-semibold text-sm lg:text-base', style.label[theme])}>
        {titleLabel}
      </p>
      <button
        className={twMerge(
          'w-full flex justify-between items-center rounded-md text-sm lg:text-base p-2 mb-1',
          style.buttonLabel[theme],
        )}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        type="button"
      >
        <p className="text-sm lg:text-base">{currentLabel}</p>
        {isDropdownOpen ? (
          <MdOutlineKeyboardArrowDown size={24} />
        ) : (
          <MdOutlineKeyboardArrowLeft size={24} />
        )}
      </button>
      {isDropdownOpen && (
        <ul
          className={twMerge(
            'z-50 rounded-md absolute w-full drop-shadow-md max-h-[200px] overflow-auto no-scrollbar',
            className,
            style.ul[theme],
          )}
        >
          {options.map((option, id) => {
            return (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => handleChange(option)}
                  className={twMerge(
                    'w-full text-start font-light text-sm lg:text-base p-2',
                    style.li[theme],
                  )}
                >
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export { Select };
