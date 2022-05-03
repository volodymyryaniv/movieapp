import {Link} from "react-router-dom";
import { useState,useEffect } from "react";
import {getTrendingMovies} from "../../../services/movieFetchServices"

export default function MovieApp({ location }) {
   const [movies, setMovies] = useState([]);
   const [page, setPage] = useState(1);

   useEffect(() => {
      getTrendingMovies(page).then((res) => setMovies(res.results));
   }, [page]);

   const handlerNext = () => {
      setPage(page + 1);
   };
   const handlerPrev = () => {
      setPage(page !== 1 ? page - 1 : 1);
   };
   return (
      <div>
         <ul>
            {movies.map((el) => (
               <li key={el.id}>
                  <Link
                     to={{ pathname: `/movies/${el.id}`, state: location }}
                     className="link-list"
                  >
                     {el.original_title}
                  </Link>
               </li>
            ))}
         </ul>
         <button onClick={handlerPrev} value="decrement" className="button">
            Prev
         </button>
         <button onClick={handlerNext} value="increment" className="button">
            Next
         </button>
      </div>
   );
}
