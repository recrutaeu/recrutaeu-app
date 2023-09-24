import { useQuery } from '@tanstack/react-query';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { app } from '../config';

const db = getFirestore(app);
export default async function getData(collectionInput) {
  let docRef = query(collection(db, collectionInput));

  let result = null;
  let error = null;

  try {
    result = await getDocs(docRef);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

const makeFindAllWhere = (coll, field) => async (value) => {
  const q = query(collection(db, coll), where(field, '==', value));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => doc.data());
};

const makeFindOneWhere = (coll, field) => async (value) => {
  try {
    const q = query(collection(db, coll), where(field, '==', value));
    const snapshot = await getDocs(q);
    return { response: snapshot.docs[0].data(), error: null };
  } catch (e) {
    console.log(e);
    return {
      response: null,
      error: e,
    };
  }
};

export const findUserByAuthId = makeFindOneWhere('users', 'authId');
export const findAllVacanciesByUserId = makeFindAllWhere('vacancies', 'userId');

export const useFindAllVacanciesByUserId = ({ userId }) =>
  useQuery({
    queryKey: ['vacancies', userId],
    queryFn: () => findAllVacanciesByUserId(userId),
  });
