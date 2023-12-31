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
const createOrUpdateVacancy = createOrUpdateFactory('vacancies');
const createOrUpdateApplication = createOrUpdateFactory('applications');
const createOrUpdateInterview = createOrUpdateFactory('interviews');

const deleteVacancyById = deleteByIdFactory('vacancies');
const deleteUserById = deleteByIdFactory('users');
const deleteApplicationById = deleteByIdFactory('applications');
const deleteManyByIds = deleteManyByIdFactory('vacancies');

export const useCreateOrUpdateInterview = ({ onSuccess, onError } = {}) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => createOrUpdateInterview(data.id, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['interviews'] });
      onSuccess?.(data);
    },
    onError,
  });
};

export const useCreateOrUpdateUser = ({ onSuccess, onError } = {}) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => createOrUpdateUser(data.id, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      onSuccess?.(data);
    },
    onError,
  });
};

export const useCreateOrUpdateApplication = ({ onSuccess, onError } = {}) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => createOrUpdateApplication(data.id, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['applications'] });
      onSuccess?.(data);
    },
    onError,
  });
};

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

export const useDeleteUserById = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => deleteUserById(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};

export const useDeleteApplicationById = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => deleteApplicationById(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['applications'] });
    },
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
