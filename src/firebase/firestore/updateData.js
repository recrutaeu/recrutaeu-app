import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import app from '../config';

const db = getFirestore(app);
export default async function getDataUser(collectionInput, id, data) {
  console.log(data);
  //let docRef = query(collection(db, collectionInput), where('id', '==', id));

  let result = null;
  let error = null;

  try {
    await updateDoc(doc(db, collectionInput, id), data);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
