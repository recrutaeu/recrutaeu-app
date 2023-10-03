import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from 'firebase/auth';
import auth from '../auth';

export const updateUserPassword = async (email, oldPassword, newPassword) => {
  const credential = EmailAuthProvider.credential(email, oldPassword);

  await reauthenticateWithCredential(auth.currentUser, credential);
  await updatePassword(auth.currentUser, newPassword);
};
