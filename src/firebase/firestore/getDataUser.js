import { getFirestore, doc, getDoc, getDocs, query, collection, where } from 'firebase/firestore';
import firebase_app from '../config';

const db = getFirestore(firebase_app);
export default async function getDataUser(collectionInput, userId) {
  let docRef = query(collection(db, collectionInput), where('idUser', '==', userId));

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
