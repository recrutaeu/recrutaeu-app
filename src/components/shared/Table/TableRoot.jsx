const TableRoot = ({ children }) => {
  return (
    <table className="w-full border-separate border-spacing-y-2 overflow-auto">{children}</table>
  );
};

export { TableRoot };
