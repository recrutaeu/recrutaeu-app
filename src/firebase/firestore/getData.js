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

const makeFindOneWhere = (collection, field) => async (value) => {
  try {
    const query = query(collection(db, collection), where(field, value));
    const docs = await getDocs(query);
    return { response: docs.docs[0].data, error: null };
  } catch (e) {
    return {
      response: null,
      error: e,
    };
  }
};

export const findUserById = makeFindOneWhere('users', 'userId');
