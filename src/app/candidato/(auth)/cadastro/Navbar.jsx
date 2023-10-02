'use client';
import { useRouter } from 'next/navigation';
import { AuthNavbar } from '@/components/shared/AuthNavbar';

const Navbar = () => {
  const route = useRouter();

  return (
    <AuthNavbar
      onBack={() => {
        route.push('/candidato/login');
      }}
    />
  );
};

export { Navbar };
