import { useState,useEffect } from "react";
import { getCastWithId } from "../../../services/movieFetchServices";

export default function MovieCast ({match}) {
   const [casts,setCasts] = useState([])

   useEffect(() => {
      return getCastWithId(match.params.movieId).then(res => setCasts(res))
   },[])

   return (
      <div className="wrapper">
         {casts.length > 0 && (
            casts.map(cast => {
               return (
                  <article key={cast.id} className="container-cast">
                     <div className="box">
                        <img src={`https://image.tmdb.org/t/p/original${cast.profile_path}`} alt={cast.name} width={120}/>
                     </div>
                     <div className="box">
                        <h3>{cast.original_name}</h3>
                        <p>Character: {cast.character}</p>
                        <h4>Popularity:</h4>
                        <p>{cast.popularity}</p>
                     </div>
                  </article>
               )
            })
         )}
      </div>
      
   )
}