import React from 'react';
import PropTypes from 'prop-types';

import './Movie.css';

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie-data">
        <h3 className="movie-title">{title}</h3>
        <h5 className="movie-yaer">{year}</h5>
        {/* 장르 출력과 지정된 스타일 적용 */}
        <ul className="movie-genres">
          {genres.map((genre, index) => {
            return (
              <li key={index} className="movie-genre">
                {genre}
              </li>
            );
          })}
        </ul>
        <p className="movie-summary">{summary.slice(0, 180)}...</p>
      </div>
    </div>
  );
}

//정보 가져오기 : id, title, rating...
Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, //추가
  //장르는 배열로 가져오기 때문에 위와 같이 입력
};

export default Movie;
