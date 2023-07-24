
const Button = ({ text, isOutlined, onclick  }) => {

    return (
        <button 
            onClick={ onclick } 
            className={ `min-w-[150px] px-6 sm:py-3.5 py-3 rounded-lg
                        font-semibold sm:text-base text-sm
                        border-[#3C3784] 
                        border-${isOutlined ? '2' : '0'}
                        text-${isOutlined ? '[#3C3784]' : '[#fff]'}
                        bg-${isOutlined ? 'transparent' : '[#3C3784]'}
                        hover:bg-${isOutlined ? '[#fff]' : '[#2a275e]'}`}>
            {text}
        </button>
    );
  };
  
  export { Button };
  