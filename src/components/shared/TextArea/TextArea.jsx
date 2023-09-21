const TextArea = ({ text, label, ...props }) => {
  return (
    <div className="w-full">
      <p className="mb-1 w-full text-base lg:text-lg">{label}</p>
      <textarea className="p-2.5 w-full text-sm lg:text-base outline-none no-scrollbar" {...props}></textarea>
    </div>
  );
};

export { TextArea };
