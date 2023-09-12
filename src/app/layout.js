'use client'
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/contexts/ThemeContext';
import './globals.css';
import VLibras from '@djpfs/react-vlibras';

const inter = Inter({ subsets: ['latin'] });

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
