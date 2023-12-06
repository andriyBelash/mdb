import { IPerson, IPersonDetail, IPersonImages, IPersonCredits } from '@/types/person';
import { fetchWrapper } from "../fetchWrapper"


export const getPopularPerson = async(lang: string):Promise<IPerson> => {
  const data = await fetchWrapper<IPerson>(`person/popular?language=${lang}&page=1`)
  if (!data.page) {
    // Handle error here, e.g., throw an exception or return a default value
    throw new Error(`Error fetching data: ${data.page}`);
  }
  return data;
}

export const getDetails = async (person_id: number, lang: string): Promise<IPersonDetail> => {
  const data = await fetchWrapper<IPersonDetail>(`person/${person_id}?language=${lang}`)
  if (!data.id) {
    // Handle error here, e.g., throw an exception or return a default value
    throw new Error(`Error fetching data: ${data.id}`);
  }
  return data;
}

export const getPersonImages = async(person_id: number): Promise<IPersonImages> => {
  const data = await fetchWrapper<IPersonImages>(`person/${person_id}/images`)
  if (!data.id) {
    // Handle error here, e.g., throw an exception or return a default value
    throw new Error(`Error fetching data: ${data.id}`);
  }
  return data;
}

export const getPersonCredits = async(personId: number, lang: string, type?: string): Promise<IPersonCredits> => {
  const data = await fetchWrapper<IPersonCredits>(`person/${personId}/${type ? type : 'combined_credits'}?language=${lang}`)
  if (!data.id) {
    // Handle error here, e.g., throw an exception or return a default value
    throw new Error(`Error fetching data: ${data.id}`);
  }
  return data;
}