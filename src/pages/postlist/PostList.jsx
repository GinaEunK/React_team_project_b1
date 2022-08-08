import "./PostList.scss";
import React from "react";
import { FaFeatherAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";

const PostList = () => {
  let navigate = useNavigate();
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <div className="goposting" >
          <FaFeatherAlt className="gotoposting" onClick={()=>navigate('/posting')}/>
          <div className="gotoposting"  onClick={()=>navigate('/posting')}>&nbsp;&nbsp;포스팅 하러가기</div>
        </div>
        <div className="movie-container">
          <MovieCard />
        </div>
      </div>
    </div>
  );
};

export default PostList;
