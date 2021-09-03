import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movies)=> 
        <div>
          {movies.title} - {movies.time}
          <ul>
            <li>{movies.genres}</li>
          </ul>
        </div>)}
    </div>
  );
};

export default Movies;
