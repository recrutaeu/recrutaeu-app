'use client';
import { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowLeft } from 'react-icons/md';
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
      [themes.LIGHT]: 'bg-neutral-0 border border-neutral-90',
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
  inverse: {
    label: {
      [themes.DEFAULT]: 'text-neutral-90 lg:text-base font-medium',
      [themes.DARK]: 'text-neutral-90 lg:text-base font-medium',
      [themes.LIGHT]: 'text-neutral-0 lg:text-base font-medium',
    },
    buttonLabel: {
      [themes.DEFAULT]: 'bg-neutral-0',
      [themes.DARK]: 'bg-neutral-0 border border-neutral-90',
      [themes.LIGHT]: 'bg-neutral-0',
    },
    ul: {
      [themes.DEFAULT]: 'bg-neutral-0 lg:text-sm lg:font-medium',
      [themes.DARK]: 'bg-neutral-90 lg:text-sm lg:font-medium',
      [themes.LIGHT]: 'bg-neutral-0 lg:text-sm lg:font-medium',
    },
    li: {
      [themes.DEFAULT]: 'bg-neutral-0 hover:bg-primary-90 hover:text-neutral-0 hover:font-medium',
      [themes.DARK]: 'text-neutral-0 hover:bg-neutral-30 hover:text-neutral-90 hover:font-medium',
      [themes.LIGHT]:
        'text-neutral-90 lg:text-sm lg:font-medium hover:bg-neutral-30 hover:text-neutral-90 hover:font-medium',
    },
  },
};

const Select = ({
  titleLabel,
  label,
  options,
  onChange,
  className,
  value,
  variant = 'default',
}) => {
  const firstOption = options.find((option) => option.value === value) || { label, value };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentOption, setCurrentOption] = useState(firstOption);
  const { theme } = useTheme();
  const style = styles[variant];

  const handleChange = (option) => {
    onChange(option.value);
    setCurrentOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className={twMerge('relative w-full', className)}>
      <p className={twMerge('mb-1 w-full font-semibold text-sm', style.label[theme])}>
        {titleLabel}
      </p>
      <button
        className={twMerge(
          'w-full flex justify-between items-center rounded-md text-sm lg:text-base h-12 lg:h-13 pl-2 mb-1',
          style.buttonLabel[theme],
        )}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        type="button"
      >
        <p className="text-sm lg:text-base">{currentOption.label}</p>
        {isDropdownOpen ? (
          <MdOutlineKeyboardArrowDown size={24} />
        ) : (
          <MdOutlineKeyboardArrowLeft size={24} />
        )}
      </button>
      {isDropdownOpen && (
        <div className="overflow-auto w-full max-h-[200px] z-50 absolute">
          <ul
            className={twMerge(
              'rounded-md w-full h-full drop-shadow-md',
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
        </div>
      )}
    </div>
  );
};

export { Select };
