import React, { useState, useEffect } from "react";
import "./CommentList.scss";
import shortId from "shortid";
import { useDispatch, useSelector } from "react-redux";
import {
  addCommentThunk,
  delCommentThunk,
} from "../../redux/modules/CommentSlice";

const CommentList = ({ targetId }) => {
  console.log(targetId);
  const dispatch = useDispatch();
  const shortid = shortId.generate();
  useEffect(() => {
    dispatch(addCommentThunk());
  }, [dispatch]);

  const initialState = {
    id: 0,
    userid: "",
    movieid: "",
    body: "",
  };

  let [addComment, setAddComment] = useState(initialState);
  //   console.log(addComment);

  const put_comment = useSelector((state) => state.reple.reple);
  console.log(put_comment);

  let inputCommentHandler = (e) => {
    const { name, value } = e.target;
    setAddComment({
      ...addComment,
      [name]: value,
      id: shortid,
      movieid: targetId,
    });
  };

  let onAddSubmitHandler = (event) => {
    if (addComment === "") {
      event.preventDefault();
      alert("댓글을 작성해주세요!!");
    } else {
      event.preventDefault();
      dispatch(addCommentThunk(addComment));
      setAddComment(initialState);
      alert("정상적으로 댓글이 등록 되었습니다.");
    }
  };

  return (
    <>
      <div>
        <form className="inputBox">
          <input
            name="userid"
            value={addComment.userid}
            type="text"
            placeholder="사용자ID"
            onChange={inputCommentHandler}
          ></input>
          <input
            name="body"
            value={addComment.body}
            type="text"
            placeholder="댓글을 입력해주세요"
            onChange={inputCommentHandler}
          ></input>
          <button onClick={onAddSubmitHandler}>댓글 추가</button>
        </form>
        {put_comment.length == 0
          ? ""
          : put_comment.map((item, index) => {
              if (item.movieid == targetId) {
                return (
                  <div className="relpeBox" key={index}>
                    <p>{item.userid}</p>
                    <p>{item.body}</p>
                    <button>수정</button>
                    <button
                      onClick={() => {
                        dispatch(delCommentThunk(item.id));
                      }}
                    >
                      삭제
                    </button>
                  </div>
                );
              }
            })}
      </div>
    </>
  );
};

export default CommentList;
