import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { app } from '../config';

const db = getFirestore(app);
export default async function getDataUser(collectionInput, userId) {
  const docRef = query(collection(db, collectionInput), where('userId', '==', userId));
  try {
    const user = await getDocs(docRef);
    return { response: user, error: null };
  } catch (e) {
    error = e;
  }

  return { result, error };
}
