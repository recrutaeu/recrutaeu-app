import { ButtonArrow } from '../ButtonArrow';
import { ButtonContrast } from '../ButtonContrast';
import { ButtonFontZoom } from '../ButtonFontZoom';

const AccessibilityNavbar = ({ variant = 'default', ...props }) => {
  return (
    <div {...props}>
      <div className="w-7 lg:hidden">
        <ButtonArrow variant={variant} />
      </div>
      <div className="flex w-full justify-end items-center gap-4 lg:w-40">
        <ButtonContrast variant={variant} />
        <ButtonFontZoom variant={variant} />
      </div>
    </div>
  );
};

export { AccessibilityNavbar };
