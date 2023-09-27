import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { app } from '../config';

const db = getFirestore(app);
export default async function getDataUser(collectionInput, userId) {
  let docRef = query(collection(db, collectionInput), where('authId', '==', userId));

  let result = null;
  let error = null;

  try {
    result = await getDocs(docRef);
    console.log(userId);
    result.forEach((doc) => {
      console.log(doc.data());
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}
