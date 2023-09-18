import { twMerge } from 'tailwind-merge';
import { AccessibilityNavbar } from '../AccessibilityNavbar';
import { AppNavbar } from '../AppNavbar';

const AuthNavbar = ({ variant, onBack, className }) => {
  return (
    <div className={twMerge('flex w-full items-center', className)}>
      <div className="hidden lg:flex w-full justify-center">
        <AppNavbar className="mr-7" variant={variant} />
      </div>
      <AccessibilityNavbar onBack={onBack} variant={variant} />
    </div>
  );
};

export { AuthNavbar };
