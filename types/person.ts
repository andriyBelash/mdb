export interface IPerson {
  page: number
  results: PersonResult[]
  total_pages: number
  total_results: number
}

export interface PersonResult {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  known_for: KnownFor[]
}

export interface KnownFor {
  adult: boolean
  backdrop_path: string
  id: number
  title?: string
  original_language: string
  original_title?: string
  overview: string
  poster_path: string
  media_type: string
  genre_ids: number[]
  popularity: number
  release_date?: string
  video?: boolean
  vote_average: number
  vote_count: number
  name?: string
  original_name?: string
  first_air_date?: string
  origin_country?: string[]
}


export interface IPersonDetail {
  adult: boolean
  also_known_as: string[]
  biography: string
  birthday: string
  deathday: any
  gender: number
  homepage: any
  id: number
  imdb_id: string
  known_for_department: string
  name: string
  place_of_birth: string
  popularity: number
  profile_path: string
}

export interface IPersonImages {
  id: number
  profiles: Images[]
}

export interface Images {
  aspect_ratio: number
  height: number
  iso_639_1: any
  file_path: string
  vote_average: number
  vote_count: number
  width: number
}


export interface IPersonCredits {
  cast: Cast[]
  crew: Crew[]
  id: number
}

export interface Cast {
  adult: boolean
  backdrop_path?: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title?: string
  overview: string
  popularity: number
  poster_path?: string
  release_date?: string
  title?: string
  video?: boolean
  vote_average: number
  vote_count: number
  character: string
  credit_id: string
  order?: number
  media_type: string
  origin_country?: string[]
  original_name?: string
  first_air_date?: string
  name?: string
  episode_count?: number
}

export interface Crew {
  adult: boolean
  backdrop_path?: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title?: string
  overview: string
  popularity: number
  poster_path?: string
  release_date?: string
  title?: string
  video?: boolean
  vote_average: number
  vote_count: number
  credit_id: string
  department: string
  job: string
  media_type: string
  origin_country?: string[]
  original_name?: string
  first_air_date?: string
  name?: string
  episode_count?: number
}

