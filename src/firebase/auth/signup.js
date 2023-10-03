import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { errorHandler } from './error-handler';
import auth from '../auth';
import { appSecondary } from '../config';

export default async function signUp(email, password) {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    return { response, error: null };
  } catch (e) {
    const error = errorHandler(e.code);
    return { response: null, error };
  }
}

const authSecondary = getAuth(appSecondary);

export async function signUpWithoutLogin(email, password) {
  try {
    const response = await createUserWithEmailAndPassword(authSecondary, email, password);
    return { response, error: null };
  } catch (e) {
    const error = errorHandler(e.code);
    return { response: null, error };
  }
}
