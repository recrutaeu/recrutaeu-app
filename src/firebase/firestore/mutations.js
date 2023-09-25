import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
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

export const createOrUpdateFactory = (coll) => async (id, data) => {
  const response = await setDoc(doc(db, coll, id), data, {
    merge: true,
  });
  return response;
};

export const deleteByIdFactory = (coll) => async (id) => {
  await deleteDoc(doc(db, coll, id));
};

export const deleteManyByIdFactory = (coll) => async (ids) => {
  const q = query(collection(db, coll), where('id', 'in', ids));
  const snapshot = await getDocs(q);
  await Promise.all(
    snapshot.docs.map((snap) => {
      return deleteDoc(doc(db, coll, snap.id));
    }),
  );
};

export const createOrUpdateUser = createOrUpdateFactory('users');
export const createOrUpdateVacancy = createOrUpdateFactory('vacancies');

const deleteVacancyById = deleteByIdFactory('vacancies');
const deleteManyByIds = deleteManyByIdFactory('vacancies');

export const useCreateOrUpdateVacancy = ({ onSuccess, onError }) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => createOrUpdateVacancy(data.id, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['vacancies'] });
      onSuccess?.(data);
    },
    onError,
  });
};

export const useDeleteVacancyById = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => deleteVacancyById(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['vacancies'] });
    },
  });
};

export const useDeleteVacancyByIds = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (ids) => deleteManyByIds(ids),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['vacancies'] });
    },
  });
};
