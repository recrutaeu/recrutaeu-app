import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../auth';

export default async function resetPassword(email) {
  try {
    const result = await sendPasswordResetEmail(auth, email);
    return { result, error: null };
  } catch (e) {
    error = retornarErro(e.code);
    return { result: null, error: 'error ao enviar email de redefinição de senha' };
  }
}
