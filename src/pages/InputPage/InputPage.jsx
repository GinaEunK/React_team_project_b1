import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import InputPageModal from "../../components/inputpagemodal/InputPageModal"
import "./inputPage.scss";

const InputPage = () => {
  const initialState = {
    id: 0,
    userId: "",
    title: "",
    body: "",
    img: "",
  };

  const [moviePosting, setMoviePosting] = useState(initialState);

  let onChangeHandler = (e) => {
    const { name, value } = e.target;
    setMoviePosting({ ...moviePosting, [name]: value });
  };

  const [search, setSearch] = useState(initialState);

  let onSubmitHandler = (event) => {
    event.preventDefault();
    let copy = moviePosting;
    setSearch(copy);
    console.log(search.img);
    setMoviePosting(initialState);
  };
  //   console.log(search);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="inputcontainer">
      <div className="inputbox">
        <div className="formbox">
          작성자
          <input
            type="text"
            name="userId"
            value={moviePosting.userId}
            placeholder="사용자ID"
            onChange={onChangeHandler}
          />
          <span className="searchBox">
            이미지 추가하기
            <span onClick={handleShow} className="searchImg">
              search
            </span>
            <Modal show={show} onHide={handleClose}>
              <InputPageModal moviePosting={moviePosting} 
              setShow={setShow}
              setMoviePosting={setMoviePosting}
              handleClose={handleClose} 
              onChangeHandler={onChangeHandler} />
            </Modal>
          </span>
          <div >
          {search.img !== undefined ? <img className="imgtool" src={moviePosting.img} /> : ''}
          </div>
          제목
          <input
            type="text"
            name="title"
            value={moviePosting.title}
            placeholder="제목"
            onChange={onChangeHandler}
          />
          내용
          <textarea
            type="text"
            name="body"
            value={moviePosting.body}
            placeholder="내용"
            onChange={onChangeHandler}
            className="inputBody"
          ></textarea>
          <button className="addButton" onClick={onSubmitHandler}>추가하기</button>
        </div>
      </div>
    </div>
  );
};

export default InputPage;
