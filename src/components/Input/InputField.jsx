const InputField = ({ label, type, id }) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        id={id}
        placeholder=" "
        className="bg-transparent text-md text-neutral-90 w-full h-16 pb-3 pt-6 rounded-md peer focus:outline-none"
      />
      <label
        for={id}
        className="absolute left-0 py-5 text-sm transition-all text-neutral-40 font-medium duration-100 ease-in-out origin-left transform scale-90 translate-x-0 -translate-y-3  peer-placeholder-shown:scale-105 peer-focus:scale-90 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3"
      >
        {label}
      </label>
    </div>
  );
};

export { InputField };