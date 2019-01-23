import React from 'react';

const Movie = ({ movieEntry, rottenMeter }) => {
  let meter = rottenMeter(movieEntry.vote_average);
  return (
    <div className="content">
      <img className="img" src={`https://image.tmdb.org/t/p/w154/${movieEntry.poster_path}`} alt="" />
      <div>
        <h2>{movieEntry.title}</h2>
        <p>{movieEntry.release_date}</p>
        <span>{meter} {movieEntry.vote_average}</span>
        <p>{movieEntry.overview} </p>
      </div>
    </div>
  );
};

export default Movie;


