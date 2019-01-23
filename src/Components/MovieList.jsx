import React from 'react';
import Movie from './Movie.jsx';

const MovieList = ({ movies, rottenMeter }) => {
  return (
    <div>
      {movies.map((movieEntry) => (
        <Movie movieEntry={movieEntry} rottenMeter={rottenMeter} />
      ))}
    </div>
  );
};

export default MovieList;
