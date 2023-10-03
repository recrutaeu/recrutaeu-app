import { useQuery } from '@tanstack/react-query';
import { and, collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
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

const makeFindAllConditions = async (coll, ...conditions) => {
  const q = query(collection(db, coll), ...conditions);
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
const findUserById = makeFindOneWhere('users', 'id');
const findAllUsersByCompanyId = makeFindAllWhere('users', 'companyId');
const findAllApplicationByCompanyId = makeFindAllWhere('applications', 'companyId');
const findAllInterviewsByCompanyId = makeFindAllWhere('interviews', 'companyId');
const findAllInterviewsByUserId = makeFindAllWhere('interviews', 'userId');
const findAllVacanciesByUserId = makeFindAllWhere('vacancies', 'userId');
const findAllVacanciesByCompanyId = makeFindAllWhere('vacancies', 'companyId');
const findAllVacanciesByIds = makeFindAllWhere('vacancies', 'id', 'in');
const findAllVacancies = makeFindAll('vacancies');
const findAllInterviews = makeFindAll('interviews');
const findApplicationByVacancyId = makeFindOneWhere('applications', 'vacancyId');
const findAllApplicationByUserId = makeFindAllWhere('applications', 'userId');
const findApplicationById = makeFindOneWhere('applications', 'id');
const findVacancyById = makeFindOneWhere('vacancies', 'id');
const findAllApplicationsByVancancyIds = makeFindAllWhere('applications', 'vacancyId', 'in');

const findAllApplicationByUserIdHydrated = async (userId) => {
  try {
    const applications = await findAllApplicationByUserId(userId);
    const vacancyIds = applications.map((application) => application.vacancyId);
    const vacancies = await findAllVacanciesByIds(vacancyIds);
    const vacanciesById = vacancies.reduce((acc, item) => {
      return { ...acc, [item.id]: item };
    }, {});

    return applications.map((item) => ({ ...item, vacancy: vacanciesById[item.vacancyId] }));
  } catch {
    return [];
  }
};

const findAllApplicationByRecruiterIdHydrated = async (userId) => {
  const vacancies = await findAllVacanciesByUserId(userId);
  const vacancyIds = vacancies.map((item) => item.id);
  const applications = await findAllApplicationsByVancancyIds(vacancyIds);
  const vacanciesById = vacancies.reduce((acc, item) => {
    return { ...acc, [item.id]: item };
  }, {});

  const applicationUserIds = new Set(applications.map((application) => application.userId));
  const applicationUsers = await Promise.all(
    [...applicationUserIds].map((userId) => findUserById(userId)),
  );
  const userById = applicationUsers.reduce((acc, item) => {
    return { ...acc, [item.id]: item };
  }, {});

  return applications.map((item) => ({
    ...item,
    vacancy: vacanciesById[item.vacancyId],
    candidate: userById[item.userId],
  }));
};

export const useFindUserById = ({ id, ...props }) =>
  useQuery({
    queryKey: ['users', id],
    queryFn: () => findUserById(id),
    ...props,
  });

export const useFindAllInterviewsByUserId = ({ id, ...props }) =>
  useQuery({
    queryKey: ['interviews', id],
    queryFn: () => findAllInterviewsByUserId(id),
    ...props,
  });

export const useFindAllInterviewsByCandidateId = ({ id, ...props }) =>
  useQuery({
    queryKey: ['interviews', id],
    queryFn: () => findAllInterviewsByCandidateId(id),
    ...props,
  });

export const useFindAllUsersByCompanyId = ({ id, ...props }) =>
  useQuery({
    queryKey: ['users', id],
    queryFn: () => findAllUsersByCompanyId(id),
    ...props,
  });

export const useFindAllInterviewsByCompanyId = ({ id, ...props }) =>
  useQuery({
    queryKey: ['interviews', id],
    queryFn: () => findAllInterviewsByCompanyId(id),
    ...props,
  });

export const useFindApplicationById = ({ id, ...props }) =>
  useQuery({
    queryKey: ['applications', id],
    queryFn: () => findApplicationById(id),
    ...props,
  });

export const useFindVacancyById = ({ id, ...props }) =>
  useQuery({
    queryKey: ['vacancies', id],
    queryFn: () => findVacancyById(id),
    ...props,
  });

export const useFindAllApplicationByRecruiterIdHydrated = ({ userId, ...props }) =>
  useQuery({
    queryKey: ['applications', userId],
    queryFn: () => findAllApplicationByRecruiterIdHydrated(userId),
    ...props,
  });

export const useFindAllApplicationByUserId = ({ userId, ...props }) =>
  useQuery({
    queryKey: ['applications', userId],
    queryFn: () => findAllApplicationByUserIdHydrated(userId),
    ...props,
  });

export const useFindAllApplicationByCompanyId = ({ companyId, ...props }) =>
  useQuery({
    queryKey: ['applications', companyId],
    queryFn: () => findAllApplicationByCompanyId(companyId),
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

export const useFindAllVacanciesByCompanyId = ({ companyId }) =>
  useQuery({
    queryKey: ['vacancies', companyId],
    queryFn: () => findAllVacanciesByCompanyId(companyId),
  });

export const useFindAllVacancies = ({ onSuccess }) =>
  useQuery({
    queryKey: ['vacancies'],
    queryFn: () => findAllVacancies(),
    onSuccess: onSuccess,
  });

export const useFindAllInterviews = ({ onSuccess }) =>
  useQuery({
    queryKey: ['interviews'],
    queryFn: () => findAllInterviews(),
    onSuccess: onSuccess,
  });
