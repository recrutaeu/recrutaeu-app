'use client';
import { useRouter } from 'next/navigation';
import { AuthNavbar } from '@/components/shared/AuthNavbar';

const Navbar = () => {
  const route = useRouter();

  return (
    <AuthNavbar
      variant="inverse"
      onBack={() => {
        route.push('/');
      }}
    />
  );
};

export { Navbar };
