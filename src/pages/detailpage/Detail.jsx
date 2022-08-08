import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./detail.scss";

const Detail = () => {
  const navigate = useNavigate();
 

  let movies = useSelector((state) => state.movies);
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id == id);

  console.log(movie);
  

  return (
    <div className="detailWrap">
      <div className="detailBox">
        <div className="imgBox"><img src={movie.img}/></div>
        <div className="contentBox">
          <h2>{movie.title}</h2>
          <h5>{movie.userid}</h5>
          <p>{movie.body}</p>
          <button>수정하기</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
