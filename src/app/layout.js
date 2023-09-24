import { Archivo } from 'next/font/google';
import { ThemeProvider } from '@/contexts/ThemeContext';
import './globals.css';
const inter = Archivo({ subsets: ['latin'] });

const RootLayout = ({ children }) => {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
