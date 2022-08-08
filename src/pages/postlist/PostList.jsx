import './PostList.scss';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const MOVIE_INFO = 'http://www.omdbapi.com/?apikey=8cd7b576&y=2022(';

const PostList = () => {
  const fetchDataInfo = async () => {
    const response = await axios.get(MOVIE_INFO);
    // setTodoList(response.data);
    console.log(MOVIE_INFO);
  };
  useEffect(() => {
    fetchDataInfo();
  }, []);

  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>
          <MovieCard />
        </div>
      </div>
    </div>
  );
};

export default PostList;
