'use client';
import VLibras from '@djpfs/react-vlibras';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@/contexts/ThemeContext';

const Providers = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <VLibras forceOnload={true} />
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export { Providers };
