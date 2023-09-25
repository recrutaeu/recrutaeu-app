import { RiLogoutCircleRLine } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';
import { ButtonArrow } from '../ButtonArrow';
import { ButtonContrast } from '../ButtonContrast';
import { ButtonFontZoom } from '../ButtonFontZoom';
import { ButtonIcon } from '../ButtonIcon';

const AccessibilityNavbar = ({ variant = 'default', onBack, onLogout, className, ...props }) => {
  return (
    <div className={twMerge('w-full flex items-center justify-between', className)} {...props}>
      {onBack && <ButtonArrow className="w-7 flex lg:hidden" variant={variant} onBack={onBack} />}
      <div className="flex w-full justify-end items-center gap-4 lg:w-40">
        <ButtonContrast variant={variant} />
        <ButtonFontZoom variant={variant} />
        {onLogout && (
          <ButtonIcon className="lg:hidden" onClick={onLogout}>
            <RiLogoutCircleRLine size={24} />
          </ButtonIcon>
        )}
      </div>
    </div>
  );
};

export { AccessibilityNavbar };
