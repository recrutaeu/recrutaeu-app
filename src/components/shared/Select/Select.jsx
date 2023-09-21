'use client';
import { useState } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Select = ({ label, options, onChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentLabel, setCurrentLabel] = useState(label);

  const handleChange = (option) => {
    onChange(option.value);
    setCurrentLabel(option.label);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">
      <p className="mb-1 w-full text-base lg:text-lg">{label}</p>
      <button
        className="bg-neutral-0 w-full flex justify-between items-center rounded-md text-sm lg:text-base p-2.5 mb-1"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        type="button"
      >
        <p>{currentLabel}</p>
        {isDropdownOpen ? (
          <MdOutlineKeyboardArrowDown size={24} />
        ) : (
          <MdOutlineKeyboardArrowLeft size={24} />
        )}
      </button>
      {isDropdownOpen && (
        <ul className="bg-neutral-0  rounded-md absolute w-full max-h-[200px] overflow-auto no-scrollbar">
          {options.map((option) => {
            return (
              <li>
                <button
                  type="button"
                  onClick={() => handleChange(option)}
                  className="w-full text-start hover:bg-neutral-10 p-2.5"
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
