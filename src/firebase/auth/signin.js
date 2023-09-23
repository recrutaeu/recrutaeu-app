import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import firebase_app from '../config';

const auth = getAuth(firebase_app);

export default async function signIn(email, password) {
  let result = null,
    error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = retornarErro(e.code);
  }

  return { result, error };
}

async function retornarErro(error) {
  switch (error) {
    case 'auth/invalid-email':
      return 'Email inválido. Verifique o email inserido.';
    case 'auth/missing-password':
      return 'Insira a senha.';
    case 'auth/invalid-login-credentials':
      return 'Email e/ou senha incorreto/s. Verifique e tente novamente.';
    default:
      return error;
  }
}
