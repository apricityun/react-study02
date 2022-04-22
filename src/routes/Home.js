import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';

import './Home.css';

// function Home() {
//   return (
//     <div>
//       <h1>홈페이지</h1>
//       <p>WELCOME to HOMEPAGE</p>
//     </div>
//   );
// }

class Home extends React.Component {
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

  componentDidMount() {
    this.getMovies();
  }
}

export default Home;
