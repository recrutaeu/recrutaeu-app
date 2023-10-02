'use client';
import VLibras from '@djpfs/react-vlibras';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastProvider } from './ToastContext';
import { Toast } from '@/components/shared/toast';
import { ThemeProvider } from '@/contexts/ThemeContext';

const Providers = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ToastProvider>
          <VLibras forceOnload={true} />
          {children}
          <Toast />
        </ToastProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export { Providers };
