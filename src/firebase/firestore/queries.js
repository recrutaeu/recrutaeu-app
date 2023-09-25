import { useQuery } from '@tanstack/react-query';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { app } from '../config';

const db = getFirestore(app);
export default async function getData(collectionInput) {
  let docRef = query(collection(db, collectionInput));

  let result = null;
  let error = null;

  try {
    result = await getDocs(docRef);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

const makeFindAll = (coll, field) => async (value) => {
  const q = query(collection(db, coll));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => doc.data());
};

const makeFindAllWhere =
  (coll, field, operator = '==') =>
  async (value) => {
    const q = query(collection(db, coll), where(field, operator, value));
    const snapshot = await getDocs(q);
    return snapshot?.docs?.map((doc) => doc.data()) || [];
  };

const makeFindOneWhere = (coll, field) => async (value) => {
  const q = query(collection(db, coll), where(field, '==', value));
  const snapshot = await getDocs(q);
  const data = snapshot?.docs?.[0]?.data();
  if (!data) {
    throw new Error(`${field} with ${value} not found in ${coll}`);
  }
  return data;
};

export const findUserByAuthId = makeFindOneWhere('users', 'authId');
const findAllVacanciesByUserId = makeFindAllWhere('vacancies', 'userId');
const findAllVacanciesByIds = makeFindAllWhere('vacancies', 'id', 'in');
const findAllVacancies = makeFindAll('vacancies');
const findApplicationByVacancyId = makeFindOneWhere('applications', 'vacancyId');
const findAllApplicationByUserId = makeFindAllWhere('applications', 'userId');

const findAllApplicationByUserIdHydrated = async (userId) => {
  const applications = await findAllApplicationByUserId(userId);
  const vacancyIds = applications.map((application) => application.vacancyId);
  const vacancies = await findAllVacanciesByIds(vacancyIds);
  const vacanciesById = vacancies.reduce((acc, item) => {
    return { ...acc, [item.id]: item };
  }, {});
  return applications.map((item) => ({ ...item, vacancy: vacanciesById[item.vacancyId] }));
};

export const useFindAllApplicationByUserId = ({ userId, ...props }) =>
  useQuery({
    queryKey: ['applications', userId],
    queryFn: () => findAllApplicationByUserIdHydrated(userId),
    ...props,
  });

export const useFindApplicationByVacancyId = ({ vacancyId, ...props }) =>
  useQuery({
    queryKey: ['applications', vacancyId],
    queryFn: () => findApplicationByVacancyId(vacancyId),
    ...props,
  });

export const useFindAllVacanciesByUserId = ({ userId }) =>
  useQuery({
    queryKey: ['vacancies', userId],
    queryFn: () => findAllVacanciesByUserId(userId),
  });

export const useFindAllVacancies = ({ onSuccess }) =>
  useQuery({
    queryKey: ['vacancies'],
    queryFn: () => findAllVacancies(),
    onSuccess: onSuccess,
  });
