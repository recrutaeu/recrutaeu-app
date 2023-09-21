import { Fragment } from 'react';
import { ButtonIcon } from '../ButtonIcon';
import { MdClose } from 'react-icons/md';

const Poup = ({ children, isOpen }) => {
  return isOpen ? (
    <div className="bg-neutral-90 bg-opacity-50 w-screen h-screen fixed z-50 left-0">
      <div className="bg-neutral-10 w-screen h-screen p-5 lg:w-1/2 lg:fixed lg:right-0 lg:p-10">
        <div className='w-full flex justify-end'>
          <ButtonIcon>
            <MdClose size={34} />
          </ButtonIcon>
        </div>

        {children}
      </div>
    </div>
  ) : (
    <Fragment />
  );
};

export { Poup };
