export type genre = {
  id: number;
  name: string;
};

export type movie = {
  id: number;
  poster_path?: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: Array<number>;
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: string;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
};

export type category = {
  id: number;
  title: string;
  data: Array<movie>;
};

export type movieResponse = {
  page: number;
  results: Array<movie>;
  total_pages: number;
  total_results: number;
};

export type genresList = {
  genres: Array<genre>;
};
