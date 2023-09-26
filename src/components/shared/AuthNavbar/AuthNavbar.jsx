import { twMerge } from 'tailwind-merge';
import { AccessibilityNavbar } from '../AccessibilityNavbar';
import { AppNavbar } from '../AppNavbar';

const AuthNavbar = ({ variant, onBack, className }) => {
  return (
    <div className={twMerge('flex w-full items-center justify-end', className)}>
      <div className="hidden lg:flex justify-end w-full">
        <AppNavbar variant={variant} />
      </div>
      <div className="flex items-center w-full lg:w-fit justify-end">
        <AccessibilityNavbar onBack={onBack} variant={variant} className="" />
      </div>
    </div>
  );
};

export { AuthNavbar };
