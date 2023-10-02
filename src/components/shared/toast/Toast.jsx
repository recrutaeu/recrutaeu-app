import { use, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { ButtonIcon } from '../ButtonIcon';
import { useToast } from '@/contexts/ToastContext';

const Toast = () => {
  const { toast, setToast } = useToast();

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        setToast(undefined);
      }, 5000);
    }
  }, [toast, setToast]);

  return toast ? (
    <div className="fixed bottom-10 right-10 z-50 p-8 min-w-[200px] text-center rounded-lg bg-red-500 text-neutral-0 text-lg">
      <MdClose
        className="absolute top-3 right-3 cursor-pointer"
        onClick={() => {
          setToast(undefined);
        }}
      />
      <p>{toast}</p>
    </div>
  ) : null;
};

export { Toast };
