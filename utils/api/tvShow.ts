import { fetchWrapper } from "../fetchWrapper"

import { ITvShow } from "@/types/tvShow";

export const getPopularTvShow = async(lang: string):Promise<ITvShow> => {
  const data = await fetchWrapper<ITvShow>(`tv/popular?language=${lang}&page=1`)
  if (!data.page) {
    // Handle error here, e.g., throw an exception or return a default value
    throw new Error(`Error fetching data: ${data.page}`);
  }
  return data;
}