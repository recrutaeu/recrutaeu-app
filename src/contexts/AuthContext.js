'use client';
import React from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { app } from '@/firebase/config';

const auth = getAuth(app);

export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({ children, callbackUrl }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const route = useRouter();

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        route.push(callbackUrl);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [callbackUrl, route]);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <p>...loading</p> : children}
    </AuthContext.Provider>
  );
};
