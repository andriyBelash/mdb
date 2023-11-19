import { fetchWrapper } from "../fetchWrapper"

import { ITrending } from "@/types/other";

export const getTrending = async(timeWindow: string, type: string, lang: string, page: number): Promise<ITrending> => {
  const data = await fetchWrapper<ITrending>(`trending/${type}/${timeWindow}?language=${lang}&page=${page}`)
  if (!data.page) {
    // Handle error here, e.g., throw an exception or return a default value
    throw new Error(`Error fetching data: ${data.page}`);
  }
  return data;
}