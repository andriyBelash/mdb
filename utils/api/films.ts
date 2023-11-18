import type { INowPlayers, IMovies } from "@/types/films"

import { fetchWrapper } from "../fetchWrapper"

export const getMoviesPlayingNow = async(lang: string):Promise<INowPlayers> => {
  const data = await fetchWrapper<INowPlayers>(`movie/now_playing?language=${lang}&page=1`)
  if (!data.page) {
    // Handle error here, e.g., throw an exception or return a default value
    throw new Error(`Error fetching data: ${data.page}`);
  }
  return data;
}

export const getMoviesPopular = async(lang: string): Promise<IMovies> => {
  const data = await fetchWrapper<IMovies>(`movie/popular?language=${lang}&page=1`)
  if (!data.page) {
    // Handle error here, e.g., throw an exception or return a default value
    throw new Error(`Error fetching data: ${data.page}`);
  }
  return data;
}