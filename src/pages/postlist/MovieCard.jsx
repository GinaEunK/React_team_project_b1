import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./MovieCard.scss";

const MovieCard = () => {
  let movies = useSelector((state) => state.movies);
  let navigate = useNavigate();

  return (
    <>
      {movies.map((movies, index) => {
        return (
          <div
            className="card-inner"
            onClick={() => {
              navigate(`/detail/${movies.id}`);
            }}
            key={movies.id}
          >
            <div className="card-top">
              <img src={movies.img} alt={movies.title} />
            </div>
            <div className="card-bottom">
              <div className="card-info">
                <h4>{movies.title}</h4>
                <p>{movies.body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MovieCard;
