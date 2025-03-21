import { FunctionComponent } from "preact";
import { props } from "../types.ts";

export const PeliculaCard: FunctionComponent<props> = ({pelicula}) => {

    return (
        <div class="pelicula-card"> 
            <img class = "imagenes" src = {`https://image.tmdb.org/t/p/original/${pelicula.backdrop_path}`} />
            <p><strong>{pelicula.original_title}</strong></p>
            <p><strong>Fecha de estreno: </strong>{pelicula.release_date}</p>
            <div class="progress-bar">
                <div 
                    class="progress" 
                    style={{ width: `${pelicula.popularity * 10}px`, height: '10px' }}
                ></div>
            </div>
        </div>
    )
}
