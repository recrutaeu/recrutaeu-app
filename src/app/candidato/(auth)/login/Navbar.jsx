'use client';
import { AuthNavbar } from '@/components/shared/AuthNavbar';
import { useRouter } from 'next/navigation';

export const Navbar = () => {
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
