import React, { useState } from "react";
import "./DetailPageComments.scss";
import CommentList from "./CommentList";

const DetailPageComments = ({ targetId }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <div>
        <h2>
          {isShow ? (
            <div className="closeContainer">
              <div
                onClick={() => {
                  setIsShow((pre) => !pre);
                }}
              >
                눌러서 댓글내리기
              </div>{" "}
              <CommentList targetId={targetId} />
            </div>
          ) : (
            <div className="openContainer">
              <div
                onClick={() => {
                  setIsShow((pre) => !pre);
                }}
              >
                눌러서 댓글보기
              </div>
            </div>
          )}
        </h2>
      </div>
    </div>
  );
};

export default DetailPageComments;
