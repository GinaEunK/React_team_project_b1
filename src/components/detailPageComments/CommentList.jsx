import React, { useState, useEffect } from "react";
import "./CommentList.scss";
import shortId from "shortid";
import { useDispatch, useSelector } from "react-redux";
import {
  addCommentThunk,
  delCommentThunk,
  getCommentThunk,
  checkCommentThunk,
} from "../../redux/modules/CommentSlice";
import {
  editCommentThunk,
  getTargetCommentThunk,
} from "../../redux/modules/targetCommentSlice";
import { useParams } from "react-router-dom";

const CommentList = ({ targetId }) => {
  // console.log(targetId);
  const dispatch = useDispatch();
  const shortid = shortId.generate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCommentThunk());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getTargetCommentThunk(id));
  }, [dispatch, id]);

  const initialState = {
    id: 0,
    userid: "",
    movieid: "",
    body: "",
    isEditMode: false,
  };

  let [addComment, setAddComment] = useState(initialState);

  const target_comment = useSelector((state) => state.comment.reple);
  const put_comment = useSelector((state) => state.reple.reple);
  const [newReple, setNewReple] = useState({ id: 0, body: "" });

  const onClickSaveButton = (event) => {
    if (newReple.body == "") {
      event.preventDefault();
      alert("댓글을 작성해 주세요");
    } else {
      event.preventDefault();
      dispatch(editCommentThunk(newReple));
      console.log(newReple);
      setNewReple(initialState);
      alert("정상적으로 등록 되었습니다");
      dispatch(checkCommentThunk(newReple));
    }
  };

  let inputCommentHandler = (e) => {
    const { name, value } = e.target;
    setAddComment({
      ...addComment,
      [name]: value,
      id: shortid,
      movieid: targetId,
      isEditMode: false,
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
            className="inputId"
            name="userid"
            value={addComment.userid}
            type="text"
            placeholder="사용자ID"
            onChange={inputCommentHandler}
          ></input>
          <input
            className="inputComment"
            name="body"
            value={addComment.body}
            type="text"
            placeholder="댓글을 입력해주세요"
            onChange={inputCommentHandler}
          ></input>
          <button className="addBtn" onClick={onAddSubmitHandler}>
            댓글 추가
          </button>
        </form>
        {put_comment.length == 0
          ? ""
          : put_comment.map((item, index) => {
              if (item.movieid == id) {
                return (
                  <div>
                    <div className="relpeBox" key={index}>
                      <div className="rBox">
                        <div className="idtext">{item.userid}</div>
                        <div className="bodytext">{item.body}</div>
                      </div>
                      {item.isEditMode ? (
                        <input
                          className="editBox"
                          type="text"
                          name="body"
                          value={newReple.body}
                          onChange={(e) => {
                            const { name, value } = e.target;
                            setNewReple({
                              ...newReple,
                              [name]: value,
                              id: item.id,
                            });
                          }}
                        />
                      ) : (
                        <p>{put_comment?.content}</p>
                      )}
                      <div className="small_btns">
                        {item.isEditMode ? (
                          <button className="btn" onClick={onClickSaveButton}>
                            저장
                          </button>
                        ) : (
                          <button className="btn" onClick={()=>dispatch(checkCommentThunk(item))}>
                            수정
                          </button>
                        )}

                        <button
                          className="btn"
                          onClick={() => {
                            dispatch(delCommentThunk(item.id));
                          }}
                        >
                          삭제
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
      </div>
    </>
  );
};

export default CommentList;
