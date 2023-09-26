import { getFirestore, doc, setDoc, collection } from 'firebase/firestore';
import app from '../config';

const db = getFirestore(app);
export default async function updateData(collection, id, data) {
  let result = null;
  let error = null;

  try {
    db.collection(collection).where("id", "==", id).update({
      ...data
  });
  } catch (e) {
    error = e;
  }

  return { result, error };
}