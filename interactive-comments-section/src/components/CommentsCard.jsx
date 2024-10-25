// import { useReducer } from "react";
// import commentsJson from "../constant/data.json";
import "./commentcard.scss";

// const InitialState = {
//   data: commentsJson,
// };

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
  // const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <div
      className={replyingTo ? "comment__card commment-reply" : "comment__card "}
    >
      <div className="comment__card-section1">
        <div className="comment__card-img1-container">
          {/* <img src="../../images/icon-plus.svg" alt="icon-plus" /> */}
        </div>
        <span className="comment__card-number">{score}</span>
        <div className="comment__card-img1-container">
          {/* <img src="../../images/icon-minus.svg" alt="icon-minus" /> */}``
        </div>
      </div>
      <div className="comment__card-section2">
        <div className="comment__card-sectiontop">
          <div className="comment__card-avatar-container">
            IMG
            {/* <img src={avatar} alt="avatar" /> */}
          </div>
          <span className="comment__card-avatar-name">{username}</span>
          <span className="comment__card-avatar-time">{createdAt}</span>
          {!replyingTo ? (
            <div className="comment__card-button-container">
              <div className="comment__card-button-icon">
                {/* <img src="../../images/icon-reply.svg" alt="icon-reply" /> */}
                <button className="comment__card-button-reply">Reply</button>
              </div>
            </div>
          ) : (
            <div className="comment__card-button-container">
              <div className="button1">
                <div className="comment__card-button-icon">
                  {/* <img src="../../images/icon-delete.svg" alt="icon-delete" /> */}
                </div>
                <button className="comment__card-button-Delete">Delete</button>
              </div>
              <div className="button2">
                <div className="comment__card-button-icon">
                  {/* <img src="../../images/icon-edit.svg" alt="icon-edit" /> */}
                </div>
                <button className="comment__card-button-Edit">Edit</button>
              </div>
            </div>
          )}
        </div>
        <div className="comment__card-sectionbottom">
          <p className="comment__card-info">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentsCard;
