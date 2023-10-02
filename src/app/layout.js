import { Archivo } from 'next/font/google';
import { Providers } from '@/contexts/Providers';
import './globals.css';

const inter = Archivo({ subsets: ['latin'] });

const RootLayout = ({ children }) => {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
