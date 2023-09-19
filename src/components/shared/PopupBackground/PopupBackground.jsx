'use client';

import { withTheme } from '@/contexts/ThemeContext';

const PopupBackground = withTheme(({ className, children, ...props }) => {
    return (
        <div className='fixed w-full h-full bg-black/80 z-10 flex justify-center items-center'>
            {children}
        </div>
      );
})

export { PopupBackground }