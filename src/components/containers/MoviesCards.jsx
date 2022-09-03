import React, { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";

import { MovieCard } from "../MovieCard";

export const MoviesCards = () => {
  const [movies] = useContext(MoviesContext);

  return (

       <section className="card-container">
         {
           movies.length > 0 ?
               (
                   movies.map((movieReq) => (
                       <MovieCard key={movieReq.id} {...movieReq} />
                   ))
               )
               :
               (<h1>No movies found</h1>)
         }
       </section>

  );
};
