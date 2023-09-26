'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Loading } from '@/components/shared/Loading';
import { app } from '@/firebase/config';
import { findUserByAuthId } from '@/firebase/firestore/queries';

const auth = getAuth(app);

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

// const Loading = () => (
//   <div className="flex justify-center items-center bg-primary-90" style={{ height: '100vh' }}>
//     <Image
//       src={'/assets/images/logo_recrutaeu_green.png'}
//       width={200}
//       height={200}
//       alt="logo recrutaeu"
//       className="hidden lg:block"
//     />
//   </div>
// );

export const AuthContextProvider = ({ children, callbackUrl, role }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const route = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const response = await findUserByAuthId(user.uid);

          if (!response.roles.includes(role)) {
            route.push(callbackUrl);
            return;
          }

          setUser({ ...response, ...user });
        } catch (e) {
          route.push(callbackUrl);
        }
      } else {
        route.push(callbackUrl);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [callbackUrl, route]);

  return (
    <AuthContext.Provider value={{ user }}>{loading ? <Loading /> : children}</AuthContext.Provider>
  );
};
