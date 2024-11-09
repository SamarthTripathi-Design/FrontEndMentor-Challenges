import "./commentcard.scss";
import { useContext } from "react";
import CommentContext from "../context/CommentContext";

const CommentsCard = ({
  id,
  score,
  content,
  createdAt,
  username,
  avatar,
  replies,
  replyingTo,
}) => {
  const { setShowReply, currentUser, setShowModal } =
    useContext(CommentContext);
  const handleReply = () => {
    setShowReply({ id, username });
  };

  return (
    <div
      className={replyingTo ? "comment__card comment-reply" : "comment__card "}
    >
      <div className="comment__card-section1">
        <div className="comment__card-img1-container">
          {/* <img src="../../public/images/icon-plus.svg" alt="icon-plus" /> */}
          <img src="/images/icon-plus.svg" alt="icon-plus" />
        </div>
        <span className="comment__card-number">{score}</span>
        <div className="comment__card-img1-container">
          <img src="/images/icon-minus.svg" alt="icon-minus" />
          {/* <img src="../../public/images/icon-minus.svg" alt="icon-minus" /> */}
        </div>
      </div>
      <div className="comment__card-section2">
        <div className="comment__card-sectiontop">
          <div className="comment__card-avatar-container">
            <img src={avatar} alt="avatar" />
          </div>
          <span className="comment__card-avatar-name">{username}</span>
          {username === currentUser.username && (
            <span className="comment__card-avatar-badge">You</span>
          )}
          <span className="comment__card-avatar-time">{createdAt}</span>
          {username !== currentUser.username ? (
            <div className="comment__card-button-container">
              <div className="comment__card-button-icon">
                <img
                  src="../../public/images/icon-reply.svg"
                  //src="/images/icon-reply.svg"
                  alt="icon-reply"
                />
              </div>
              <button
                className="comment__card-button-reply"
                onClick={handleReply}
              >
                Reply
              </button>
            </div>
          ) : (
            <div className="comment__card-button-container">
              <div className="button1">
                <div className="comment__card-button-icon">
                  <img
                    src="../../public/images/icon-delete.svg"
                    //src="/images/icon-delete.svg"
                    alt="icon-delete"
                  />
                </div>
                <button
                  className="comment__card-button-Delete"
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  Delete
                </button>
              </div>
              <div className="button2">
                <div className="comment__card-button-icon">
                  <img
                    src="../../public/images/icon-edit.svg"
                    //src="/images/icon-edit.svg"
                    alt="icon-edit"
                  />
                </div>
                <button className="comment__card-button-Edit">Edit</button>
              </div>
            </div>
          )}
        </div>
        <div className="comment__card-sectionbottom">
          <p className="comment__card-info">
            {replyingTo && <span className="replyingTo">@{replyingTo}</span>}
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentsCard;
