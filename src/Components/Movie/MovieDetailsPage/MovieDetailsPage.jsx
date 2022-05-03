import { Route,NavLink } from "react-router-dom";
import { useState,useEffect } from "react";
import MovieCast from "../MovieCast";
import MovieReview from "../MovieReview";
import { getDetailMovieWithId } from "../../../services/movieFetchServices";

export default function MovieDetailsPage({ match, location, history }) {
   const [movie, setMovie] = useState("");

   useEffect(() => {
      return getDetailMovieWithId(match.params.movieId).then((res) =>
         setMovie(res)
      );
   }, []);

   const handleBack = () => {
      if (location.state) {
         return history.push(location.state);
      }
   };
   return (
      <div>
         <button type="button" onClick={handleBack} className="button">
            Go back
         </button>
         <article className="container">
            <div className="box">
               <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt="d"
                  width={400}
               />
            </div>
            <div className="box">
               <h2>{movie.original_title}</h2>
               <p>User score : {movie.vote_average}</p>
               <h3>Overview</h3>
               <p>{movie.overview}</p>
               <h4>Genres</h4>
               {movie.genres !== undefined &&
                  movie.genres.map(({ id, name }) => (
                     <span key={id} className="genre">
                        {name}
                     </span>
                  ))}
            </div>
         </article>
         <NavLink
            to={
               location.pathname === `${match.url}/cast`
                  ? `${match.url}`
                  : `${match.url}/cast`
            }
            name="cast"
            className="sub-link"
         >
            Cast
         </NavLink>
         <NavLink
            to={
               location.pathname === `${match.url}/review`
                  ? `${match.url}`
                  : `${match.url}/review`
            }
            className="sub-link"
         >
            Rewiews
         </NavLink>
         <Route path="/movies/:movieId/cast" component={MovieCast} />
         <Route path="/movies/:movieId/review" component={MovieReview} />
      </div>
   );
}
