const InputLabel = ({ label, placeholder, type, id }) => {
  return (
    <div className="w-ful">
      <label htmlFor={id} className="w-full text-primary-90 font-medium text-base lg:text-lg ">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        className="w-full rounded-md outline-none p-2.5 text-sm lg:text-base mt-1"
      />
    </div>
  );
};

export { InputLabel };
