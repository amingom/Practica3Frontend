import { PeliculaCard } from "../components/PeliculaCard.tsx";
import {useSignal} from "@preact/signals"
import { Pelicula } from "../types.ts";

export default function Grid(props:{peliculas: Pelicula[]}){
    const grid = useSignal(3);
    const columnas = [1,2,3,4,5];

    return(
        <div class="peliculas">
            <div class = "botones">
                {columnas.map((n) => (
                    <button 
                        type="button" 
                        class = {`botonNum ${grid.value === n ? "active" : ""}`}
                        key={n}
                        onClick={() => grid.value = n}
                    > {n} </button>
                ))}
            </div>
            <div class ={`grid grid-cols-${grid.value}`}>
                {props.peliculas.map((pelicula)=> (
                    <PeliculaCard key={pelicula.id} pelicula={pelicula}/>
                ))}
            </div>
        </div>
    )
}