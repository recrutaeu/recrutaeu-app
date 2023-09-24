import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from '../config';

const auth = getAuth(app);

export default async function signUp(email, password) {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    return { response, error: null };
  } catch (e) {
    const error = parseError(e.code);
    return { response: null, error };
  }
}

function parseError(error) {
  switch (error) {
    case 'auth/admin-restricted-operation':
      return 'Verifique os dados inseridos para realizar o cadastro.';
    case 'auth/email-already-in-use':
      return 'Email já está em uso';
    case 'auth/invalid-login-credentials':
      return 'Email e/ou senha incorreto/s. Verifique e tente novamente.';
    default:
      return error;
  }
}
