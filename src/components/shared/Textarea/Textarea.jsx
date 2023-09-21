import { twMerge } from 'tailwind-merge';
import { themes, withTheme } from '@/contexts/ThemeContext';
import { useEffect, useRef, useState } from "react";

const useAutosizeTextArea = (
  textAreaRef,
  value
) => {
  useEffect(() => {
    if (textAreaRef) {
      textAreaRef.style.height = "10em";
      const scrollHeight = textAreaRef.scrollHeight;

      textAreaRef.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, value]);
};


const Textarea = withTheme(({ theme, label, id, className, placeholder, variant = 'default' }) => {
    const [value, setValue] = useState("");
    const textAreaRef = useRef(null);

    useAutosizeTextArea(textAreaRef.current, value);

    const styles = {
        default: {
          text: {
            [themes.DEFAULT]: 'text-neutral-0',
            [themes.DARK]: 'text-neutral-0',
            [themes.LIGHT]: 'text-neutral-90',
          },
          input: {
            [themes.DEFAULT]: 'bg-neutral-0',
            [themes.DARK]: 'bg-neutral-20',
            [themes.LIGHT]: 'bg-neutral-0',
        },
        },
      };
    
      const style = styles[variant];
    
  return (
    <div className="w-full flex flex-col gap-1">
        <label for={id} className={twMerge('text-base font-semibold', style.text[theme])}>
            {label} 
        </label>
      <textarea
        id={id}
        placeholder={placeholder}
        ref={textAreaRef}
        name="postContent"
        rows={6}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={twMerge(
                'text-md text-neutral-90 h-40 py-2 px-4 rounded-md peer focus:outline-none',
                style.input[theme],
                )}
      />
    </div>
  );
});

export { Textarea };
