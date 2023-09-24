import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import firebase_app from '../config';

const db = getFirestore(firebase_app);
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
