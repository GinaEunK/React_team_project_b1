import React from "react";
import { Modal, Button } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import "./DetailPageModal.scss";

const DetailPageModal = ({ show, onHide }) => {
  return (
    <Modal
      className="modalBox"
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <FaTimes className="faArrowLeft" onClick={onHide} />
      <div className="editWrap">
        <textarea
          className="editBody"
          type="text"
          placeholder="내용을 입력해주세요"
        ></textarea>
      </div>
      <button className="edit_done_btn">수정완료</button>
    </Modal>
  );
};

export default DetailPageModal;
