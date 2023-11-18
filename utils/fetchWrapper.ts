import { BASE_URL } from "./constants/tmdb";


export async function fetchWrapper<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) {
  const data = await fetch(`${BASE_URL}${input}`, {
    ...init,
    ...{
      headers: {
        'Content-Type': 'application/json',
        "Authorization": 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWYxNzliMDdjMDY2OTk5ZmIxNWFlYTRhMDM3N2NmYSIsInN1YiI6IjYzNGIwNTc0YzhhMmQ0MDA3YTJmZGY0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.33M55WBIFE75LqZh_0jmFOiB0STSM8Y8NSFJuiWYUmA'
      }
    }
  });
  const result = await data.json();

  return result as T
}