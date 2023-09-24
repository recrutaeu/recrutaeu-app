import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { app } from '../config';

const db = getFirestore(app);
export default async function getDataUser(collectionInput, userId) {
  let docRef = query(collection(db, collectionInput), where('idUser', '==', userId));

  let result = null;
  let error = null;

  try {
    result = await getDocs(docRef);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
