export type Pelicula = {
  id: number,
  original_title: string,
  release_date: string,
  backdrop_path: string,
  popularity: number
}

export type Data = {
  results: Pelicula[];
}

export type props = {
    pelicula:Pelicula
}