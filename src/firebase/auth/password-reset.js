import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../config';

const auth = getAuth(app);

export default async function resetPassword(email) {
  try {
    const result = await sendPasswordResetEmail(auth, email);
    return { result, error: null };
  } catch (e) {
    error = retornarErro(e.code);
    return { result: null, error: 'error ao enviar email de redefinição de senha' };
  }
}
