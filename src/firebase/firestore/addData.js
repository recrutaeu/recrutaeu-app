import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { app } from '../config';

const db = getFirestore(app);

export default async function addData(colllection, id, data) {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(db, colllection, id), data, {
      merge: true,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export const createOrUpdateFactory = (collection) => async (id, data) => {
  try {
    const response = await setDoc(doc(db, collection, id), data, {
      merge: true,
    });
    return { response, error: null };
  } catch (e) {
    return {
      response: null,
      error: e,
    };
  }
};

export const createOrUpdateUser = createOrUpdateFactory('users');
export const createOrUpdateVacancy = createOrUpdateFactory('vacancies');
