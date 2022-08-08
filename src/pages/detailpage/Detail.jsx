import React, { useState } from "react";
import "./detail.scss";

const Detail = () => {
  const initialState = {
    id: 0,
    userId: "사용자id",
    img: "",
    title: "해리포터",
    body: "해리포터짱잼",
  };
  const [detail, setDetail] = useState(initialState);
  console.log(initialState);

  return (
    <div className="detailWrap">
      <div className="detailBox">
        <div className="imgBox">이미지</div>
        <div className="contentBox">
          <h2>{initialState.title}</h2>
          <h5>{initialState.userId}</h5>
          <p>{initialState.body}</p>
          <button>수정하기</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
