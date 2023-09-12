import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { withTheme } from '@/contexts/ThemeContext';

const NumberPages = withTheme(({ currentPage, totalPage }) => {
  return (
    <div className="flex mt-4 items-center justify-center">
      <button>
        <LuChevronLeft size={24} className="text-primary-90" />
      </button>
      <p className="text-primary-90 text-base font-semibold mr-2 ml-2">{`${currentPage} \\ ${totalPage}`}</p>
      <button>
        <LuChevronRight size={24} className="text-primary-90" />
      </button>
    </div>
  );
});

export { NumberPages };
