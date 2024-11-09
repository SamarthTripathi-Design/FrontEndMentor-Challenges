import "./deletemodal.scss";
import { useContext } from "react";
import CommentContext from "../context/CommentContext";

const DeleteModal = () => {
  const { setShowModal } = useContext(CommentContext);
  return (
    <div className="deletemodal__overlay">
      <div className="deletemodal__card">
        <h3 className="deletemodal__card-heading">Delete Comment</h3>
        <p className="deletemodal__card-body">
          Are you sure you want to delete this comment? This wiil remove the
          comment and cannot be undone comment
        </p>
        <div className="deletemodal__card-buttoncontainer">
          <button
            className="deletemodal__card-cancelbutton"
            onClick={() => {
              setShowModal(false);
            }}
          >
            NO, CANCEL
          </button>
          <button
            className="deletemodal__card-savebutton"
            onClick={() => {
              setShowModal(false);
            }}
          >
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
