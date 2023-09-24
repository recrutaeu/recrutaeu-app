import { useMutation, useQueryClient } from '@tanstack/react-query';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { app } from '../config';

const db = getFirestore(app);

export default async function addData(colllection, id, data) {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(db, colllection, id), data, {
      merge: true,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export const createOrUpdateFactory = (collection) => async (id, data) => {
  console.log(id, data);
  const response = await setDoc(doc(db, collection, id), data, {
    merge: true,
  });
  return response;
};

export const createOrUpdateUser = createOrUpdateFactory('users');
export const createOrUpdateVacancy = createOrUpdateFactory('vacancies');

export const useCreateOrUpdateVacancy = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => createOrUpdateVacancy(data.id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['vacancies'] });
    },
  });
};
