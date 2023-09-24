import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { app } from '../config';

const db = getFirestore(app);
export default async function getDataUser(collectionInput, userId) {
  try {
    const docRef = query(collection(db, collectionInput), where('authId', '==', userId));
    const user = await getDocs(docRef);
    return { response: user, error: null };
  } catch (e) {
    console.log(e);
  }

  return { result, error };
}
