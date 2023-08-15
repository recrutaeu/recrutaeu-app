const Grid = ({ children, props }) => {
  return (
    <div className="grid grid-cols-4 gap-5 mx-[30px] sm:grid-cols-12 sm:mx-[50px]" {...props}>
      {children}
    </div>
  );
};

export { Grid };
