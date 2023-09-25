import { twMerge } from 'tailwind-merge';
import { AccessibilityNavbar } from '../AccessibilityNavbar';
import { AppNavbar } from '../AppNavbar';

const AuthNavbar = ({ variant, onBack, className }) => {
  return (
    <div className={twMerge('flex w-full items-center justify-end', className)}>
      <div className="hidden lg:flex w-full lg:w-2/3 justify-end">
        <AppNavbar className="mr-7" variant={variant} />
      </div>
      <div className="flex items-center w-full justify-end">
        <AccessibilityNavbar onBack={onBack} variant={variant} className="" />
      </div>
    </div>
  );
};

export { AuthNavbar };
