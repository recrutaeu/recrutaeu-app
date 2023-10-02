import { createContext, useContext, useState } from 'react';

export const ToastContext = createContext({});

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(undefined);

  return <ToastContext.Provider value={{ toast, setToast }}>{children}</ToastContext.Provider>;
};
