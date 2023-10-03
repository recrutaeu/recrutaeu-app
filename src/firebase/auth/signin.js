import { signInWithEmailAndPassword } from 'firebase/auth';
import { errorHandler } from './error-handler';
import auth from '../auth';

export default async function signIn(email, password) {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return { result, error: null };
  } catch (e) {
    const error = errorHandler(e.code);
    return { result: null, error };
  }
}
