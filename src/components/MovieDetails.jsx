import React, { useContext } from "react";
import {useParams} from "react-router-dom";
import {useFetch} from "../hooks/useFetch";

 export const MovieDetails = () => {
  const API_IMG = "https://image.tmdb.org/t/p/w500";
  const params = useParams();
  console.log(params.id)

   const API_URL = `https://api.themoviedb.org/3/movie/${params.id}?api_key=079a88c8815119a047f6e1f7bff2a647&language=en-US`;

   const {state:detail, setState:setDetail} = useFetch(API_URL);

   console.log(detail)

  return (
     <div className="movie-details">

         {
             detail === "loading" ?
                 (<div className="loader">loading</div>) : (
                     <div className="details-card">
                     {
                         detail?.poster_path
                             ?
                             <img src={API_IMG + detail?.poster_path} alt="movie-poster" />
                             :
                             <div className="movie-poster-unavailable">
                                 <h4>
                                     {detail?.title}
                                     <br />
                                     <span>(Poster unavailable)</span>
                                 </h4>
                             </div>
                     }
                     <article className="details-article">
                         <h1>{detail?.title}</h1>
                         <h2>Overview</h2>
                         <p>{detail?.overview}</p>
                         <h3>imdB: {detail?.vote_average}</h3>
                         <h3>Release date: {detail?.release_date}</h3>
                         {/*<button onClick={hideCardDetails}>Close</button>button*/}
                     </article>
                 </div>)
         }

    </div>
  );
};
