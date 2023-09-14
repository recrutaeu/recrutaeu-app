'use client';
import VLibras from '@djpfs/react-vlibras';
import { Archivo } from 'next/font/google';
import { ThemeProvider } from '@/contexts/ThemeContext';
import './globals.css';

const inter = Archivo({ subsets: ['latin'] });

const RootLayout = ({ children }) => {
  return (
    <html lang="pt-br">
      <ThemeProvider>
        <VLibras />
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
};

export default RootLayout;
