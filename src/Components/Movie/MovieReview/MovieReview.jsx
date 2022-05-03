import { useState,useEffect } from "react";
import { getReviewsWithId } from "../../../services/movieFetchServices";

export default function MovieReview ({match}) {
   const [reviews,setReviews] = useState([])

   useEffect(() => {
      getReviewsWithId(match.params.movieId).then(res => setReviews(res))
   },[])

   return (
      <div className="box">
         {reviews.length > 0 ? (
            reviews.map(review => {
               return (
                  <article key={review.id}>
                     <h3>{review.author}</h3>
                     <p>{review.content}</p>
                     <p>{review.updated_at}</p>
                  </article>
               )
            })
         ) : (
            <p>There are no reviews yet and you may be the first to do it!</p>
         )}
      </div>
   )
}