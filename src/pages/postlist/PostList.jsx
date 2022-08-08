import "./PostList.scss";
import React from "react";

import MovieCard from "./MovieCard";

const PostList = () => {
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <MovieCard />
        </div>
      </div>
    </div>
  );
};

export default PostList;
