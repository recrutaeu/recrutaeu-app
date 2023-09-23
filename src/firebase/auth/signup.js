import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import firebase_app from '../config';

const auth = getAuth(firebase_app);

export default async function signUp(email, password) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
    console.log(result);
  } catch (e) {
    error = retornarErro(e.code);
  }

  return { result, error };
}

async function retornarErro(error) {
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
