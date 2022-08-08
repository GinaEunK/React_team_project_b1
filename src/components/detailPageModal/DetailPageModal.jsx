import React, { useState } from "react";
import "./DetailPageModal.scss";

const DetailPageModal = () => {
  const [edit, setEdit] = useState(false);

  const onClickEditButton = () => {
    setEdit(true);
  };

  return (
    <div>
      <div className="modalBox">
        {eidt ? (
          <button type="buttonn" className="edit_btn">
            수정하기
          </button>
        ) : (
          <button
            type="buttonn"
            className="edit_btn"
            onClick={onClickEditButton}
          >
            수정완료
          </button>
        )}
      </div>
    </div>
  );
};

export default DetailPageModal;
