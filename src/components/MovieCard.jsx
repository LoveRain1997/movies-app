 import React, { useContext, useState } from "react";
import { MoviesContext } from "../context/MoviesContext";
import { useNavigate } from "react-router-dom";

 export const MovieCard = ({
                            id,
                            title,
                            poster_path,
                          }) => {
   const API_IMG = "https://image.tmdb.org/t/p/w500";

    let navigate = useNavigate();

  return (
       <article className="movie-card">
        {
          poster_path
              ?
              <div>
                  <img src={API_IMG + poster_path} alt="movie-poster" />
                  <h4>
                      {title}
                  </h4>
              </div>
              :
              <div className="movie-poster-unavailable">
                <h4>
                  {title}
                  <br />
                  <span>(Poster unavailable)</span>
                </h4>
              </div>
        }
          <button onClick={() => navigate(`/details/${id}`)}></button>
      </article>
  );
};
