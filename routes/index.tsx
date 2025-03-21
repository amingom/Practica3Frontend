import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Data } from "../types.ts";
import Grid from "../islands/Grid.tsx";
import Buscador from "../islands/Buscador.tsx";

export const handler: Handlers <Data> = {
  GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
    const ruta = new URL(req.url);
    const nombre = ruta.searchParams.get('name')||undefined;
    if(nombre){
      const API_KEY = Deno.env.get("API_KEY")
      if(!API_KEY){
        throw new Error("Not api key found")
      }
      const url = "https://api.themoviedb.org/3/search/movie?query="+ nombre + "&language=en-US"; 
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmZmYTcxYmU1ZGFhMDBlMTJjMWJjMTMxMjBlM2Q3NSIsIm5iZiI6MTY4NTM4MTkzNS4wMTYsInN1YiI6IjY0NzRlMzJmY2MyNzdjMDBhNzQ2MTYzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.raEEljpmsGfGMENtPmE-LFWcBEiDUcFKG5B-8_WQABQ'
        }
      };
      const data = await fetch(url, options)
      if(data.status !== 200) throw new Error("Fallo en la API")
      const response = await data.json()

      return ctx.render(response);
    }else{
      return ctx.render({results: []});
    }
  },
};

export default function Home(props: PageProps<Data>) {
  const peliculas = props.data.results;
  return (
    <div class="container"> 
      <Buscador/>
      <Grid peliculas={peliculas}/>
    </div>
  );
}

