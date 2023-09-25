import { twMerge } from 'tailwind-merge';

const InputField = ({ label = '', variant, type, className, register, ...props }) => {
  return (
    <div className="relative w-full py-1 lg:py-0">
      <input
        type={type}
        id={props.id}
        className={twMerge(
          'bg-transparent text-md text-neutral-90 w-full h-10 lg:h-16 pb-3 pt-6 rounded-md peer focus:outline-none',
          className,
        )}
        variant={variant}
        {...register}
        {...props}
      />
      <label
        htmlFor={props.id}
        className={twMerge(
          'absolute left-0 py-2 lg:py-5 text-sm transition-all text-neutral-40 font-medium duration-100 ease-in-out origin-left transform scale-90 translate-x-0 -translate-y-2 lg:-translate-y-3  peer-placeholder-shown:scale-105 peer-focus:scale-90 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-2 md:peer-focus:-translate-y-3',
          className,
        )}
      >
        {label}
      </label>
    </div>
  );
};

export { InputField };
