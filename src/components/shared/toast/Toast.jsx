import { useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';
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
    <div
      className={twMerge(
        'fixed bottom-10 right-10 z-50 p-8 min-w-[200px] text-center rounded-lg  text-neutral-0 text-lg',
        toast.type === 'error' && 'bg-red-500',
        toast.type === 'success' && 'bg-green-500',
      )}
    >
      <MdClose
        className="absolute top-3 right-3 cursor-pointer"
        onClick={() => {
          setToast(undefined);
        }}
      />
      <p>{toast.message}</p>
    </div>
  ) : null;
};

export { Toast };
