import React from 'react';
import Movie from './Movie';
import './App7.css';
const axios = require('axios').default;

class App7 extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader-text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  // id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres} //추가
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }

  getMovies = async () => {
    try {
      //구조 분해 할당을 간략하게
      const {
        data: {
          data: { movies },
        },
      } = await axios.get('https://yts-proxy.now.sh/list_movies.json﻿?limit=5&sort_by=rating');
      this.setState({ movies: movies, isLoading: false });
    } catch (error) {
      console.log('Error');
      console.log(error);
    }
  };

  //render() 함수가 실행된 후 componentDidMount() 실행
  componentDidMount() {
    // axios.get('https://yts-proxy.now.sh/list_movies.json');
    // setTimeout(() => {
    //   this.setState({ sec: this.state.sec - 1 });
    // }, 1000);
    this.getMovies();
  }
}

export default App7;
