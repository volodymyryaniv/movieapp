import { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import queryString from "query-string"
import { getMovieWithQuery } from "../../../services/movieFetchServices";

export default function MoviePage({ location, history }) {
   const [queryMovies, setQueryMovies] = useState([]);
   const [input, setInput] = useState("");
   
   useEffect(() => {
      console.log(queryString.parse(location.search))
      const query = queryString.parse(location.search).query
      if (location.search) {
         getMovieWithQuery(query).then(res => setQueryMovies(res.data.results))
      }
   },[])
   const handlerInput = (e) => setInput(e.target.value);

   const handlerSubmit = (e) => {
      e.preventDefault();
      history.push({
         ...location,
         search: `query=${input}`,
      });

      getMovieWithQuery(input).then((res) => setQueryMovies(res.data.results));
      setInput("");
   };
   return (
      <>
         <form onSubmit={handlerSubmit}>
            <input type="text" value={input} onChange={handlerInput} />
            <button type="submit">Search</button>
         </form>
         <ul>
            {queryMovies.map((el) => (
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
      </>
   );
}
