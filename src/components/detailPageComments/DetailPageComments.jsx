import React, { useState } from "react";
import "./DetailPageComments.scss";
import CommentList from "./CommentList";

const DetailPageComments = ({ targetId }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <div className="commentContainer">
        <div
          onClick={() => {
            setIsShow((pre) => !pre);
          }}
          className="toggleContainer"
        >
          <h2>{isShow ? "눌러서 댓글내리기" : "눌러서 댓글보기"}</h2>
        </div>
        <CommentList targetId={targetId} />
      </div>
    </div>
  );
};

export default DetailPageComments;
