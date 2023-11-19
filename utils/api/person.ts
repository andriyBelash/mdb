import { IPerson } from '@/types/person';
import { fetchWrapper } from "../fetchWrapper"


export const getPopularPerson = async(lang: string):Promise<IPerson> => {
  const data = await fetchWrapper<IPerson>(`person/popular?language=${lang}&page=1`)
  if (!data.page) {
    // Handle error here, e.g., throw an exception or return a default value
    throw new Error(`Error fetching data: ${data.page}`);
  }
  return data;
}