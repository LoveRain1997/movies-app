import React from 'react';

import { useContext } from 'react';
import { MoviesContext } from '../../context/MoviesContext';


import { MoviesCards } from '../containers/MoviesCards';
import {useTheme} from "../../utils/useTheme";

export const PageMain = () => {
  const [movies] = useContext(MoviesContext);




  return (

    <main>

      {
          movies === "loading" ? 
          (<div className="loader"></div>) : (<MoviesCards/>)
      }

    </main>
  )
}
