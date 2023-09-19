import { Filter } from '@/components/shared/Filter';
import { InputSearch } from '@/components/shared/InputSearch';
import { Title } from '@/components/shared/Title';
import { recruiter } from '@/locales';
import { MdAddBox, MdOutlineSelectAll, MdDeleteSweep, MdFiberManualRecord } from 'react-icons/md';

const Jobs = ({}) => {
  return (
    <>
      <Title className="text-3xl" variant="inverse">
        {recruiter.jobs.title}
      </Title>
      <p className="mt-2"> {recruiter.jobs.description}</p>

      <div className="flex mt-4 mb-7 w-1/2">
        <InputSearch variant="inverse" size={18} />
        <div className="ml-4 gap-3 flex">
          <button>
            <MdAddBox size={30} />
          </button>
          <button>
            <MdDeleteSweep size={30} />
          </button>
        </div>
      </div>

      <div className="w-full">
        <table className="w-full">
          <tr className="w-full flex justify-between">
            <th align="center" className="w-96 justify-center flex ">
              <button>
                <MdOutlineSelectAll size={20} />
              </button>
            </th>
            <th className="w-full flex mr-3 items-center">
              Vagas
              <Filter size={20} />
            </th>
            <th className="w-full flex items-center">
              Setor <Filter size={20} />
            </th>
            <th className="w-1/2 flex justify-center items-center mr-3 ">
              N° de vagas <Filter size={20} />
            </th>
            <th className="w-full flex justify-center items-center mr-3 ">
              Data Inicial <Filter size={20} />
            </th>
            <th className="w-full flex  justify-center items-center mr-3 ">
              Data Final <Filter size={20} />
            </th>
            <th className="w-1/2 flex justify-center items-center">
              Detalhes
              <Filter size={20} />
            </th>
          </tr>
          <tr className="bg-neutral-0 w-full flex justify-between mt-2">
            <td className="w-96 justify-center flex  items-center">
              <input type="checkbox" name="" id="" />
            </td>
            <td className="w-full flex justify-start items-center mr-3">Desenvolvedor Front-end</td>
            <td className="w-full flex justify-start items-center mr-3">
              TecnologiaTecnologia Tecnologia
            </td>
            <td className="w-1/2 flex justify-center items-center mr-3">3</td>
            <td className="w-full flex justify-center items-center mr-3">15/12/2023</td>
            <td className="w-full flex justify-center items-center mr-3">20/12/2023</td>
            <td className="w-1/2 flex justify-center items-center">
              <button className=" flex justify-end">
                <MdFiberManualRecord size={12} />
                <MdFiberManualRecord size={12} />
                <MdFiberManualRecord size={12} />
              </button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Jobs;
