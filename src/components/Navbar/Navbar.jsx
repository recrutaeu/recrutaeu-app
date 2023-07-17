const Navbar = () => {
  return (
    <nav className="w-[400px] rounded-md flex text-[#3C3784] font-medium justify-between overflow-hidden">
      <div className="bg-[#D9D9D9] hover:bg-[#E9FE47] py-2 px-4 flex w-full">
        <a href="" className="flex w-full justify-center">
          home
        </a>
      </div>
      <div className="bg-[#D9D9D9] hover:bg-[#E9FE47] py-2 px-4 flex w-full">
        <a href="" className="flex w-full justify-center">
          candidato
        </a>
      </div>
      <div className="bg-[#D9D9D9] hover:bg-[#E9FE47] py-2 px-4 flex w-full">
        <a href="" className="flex w-full justify-center">
          empresa
        </a>
      </div>
    </nav>
  );
};

export { Navbar };
