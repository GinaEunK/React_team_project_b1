import React, { useState } from "react";
import { APIkey } from "../../common/apis/movieAPiKey";
import movieApi from "../../common/apis/movieApi";
import "./InputPageModal.scss";

const SearchForm = () => {
  let [movieTitle, setMovieTitle] = useState("");

  let onChangeHandler = (e) => {
    const copy = e.target.value;
    setMovieTitle(copy);
  };

  let [searchMovie, setSearchMovie] = useState();

  console.log(searchMovie);

  let onSubmitHandler = (e) => {
    e.preventDefault();
    movieApi
      .get(`?apikey=${APIkey}&s=${movieTitle}&type=movie&page=1`)
      .then((data) => {
        let copy = data.data.Search;
        setSearchMovie(copy);
        // console.log(data);
      })
      .catch((err) => {
        console.log("Err :", err);
      });
  };

  // let onSubmitHandler = (e) => {
  //   e.preventDefault();
  //   axios({
  //     method: 'get',
  //     url: 
  //   }).get(`?apikey=${APIkey}&s=${movieTitle}&type=movie&page=20`)
  //     .then((data) => {
  //       let copy = data.data.Search;
  //       setSearchMovie(copy);
  //       // console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log("Err :", err);
  //     });
  // };


  return (
    <div className="modalBox">
      <form className="formBox" onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="title"
          value={movieTitle}
          placeholder="제목을 입력하세요!"
          onChange={onChangeHandler}
        />
      </form>
      <div className="imgBox">
        {searchMovie !== undefined
          ? searchMovie.map((movie, index) => <img className="imgCard" src={movie.Poster} />)
          : "NotFound"}
      </div>
    </div>
  );
};

export default SearchForm;
