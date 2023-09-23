import { Archivo } from 'next/font/google';
import { AuthContextProvider } from '@/contexts/AuthContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import './globals.css';
const inter = Archivo({ subsets: ['latin'] });

const RootLayout = ({ children }) => {
  return (
    <html lang="pt-br">
      <ThemeProvider>
        <body className={inter.className}>
          <AuthContextProvider>{children}</AuthContextProvider>
        </body>
      </ThemeProvider>
    </html>
  );
};

export default RootLayout;
