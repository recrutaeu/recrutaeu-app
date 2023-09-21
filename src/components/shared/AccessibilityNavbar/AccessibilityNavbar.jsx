import { twMerge } from 'tailwind-merge';
import { ButtonArrow } from '../ButtonArrow';
import { ButtonContrast } from '../ButtonContrast';
import { ButtonFontZoom } from '../ButtonFontZoom';

const AccessibilityNavbar = ({ variant = 'default', onBack, ...props }) => {
  return (
    <div className={twMerge('w-full flex justify-end')} {...props}>
      {onBack && <ButtonArrow className="w-7 lg:hidden" variant={variant} onBack={onBack} />}
      <div className="flex w-full justify-end items-center gap-4 lg:w-40">
        <ButtonContrast variant={variant} />
        <ButtonFontZoom variant={variant} />
      </div>
    </div>
  );
};

export { AccessibilityNavbar };
