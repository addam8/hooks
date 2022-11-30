import React from 'react';
import ReactStars from 'react-stars';

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<div>
					<img src={movie.Poster} alt='movie'></img>
                    <h1>{movie.Title} <br></br> {movie.Year}</h1>
                    <ReactStars
              count={5}
              size={24}
              color2={"#ffd700"}
              value={movie.Rating}
              edit={false}
            />

				</div>
			))}
		</>
	);
};

export default MovieList;