// import { useReducer } from "react";
// import commentsJson from "../constant/data.json";
import "./comment__card.scss";

// const InitialState = {
//   data: commentsJson,
// };

const CommentsCard = ({ id, score, content, createdAt, username, avatar }) => {
  // const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <div className="comment__card">
      <div className="comment__card-section1">
        <div className="comment__card-img1-container">
          <img src="../../images/icon-plus.svg" alt="icon-plus" />
        </div>
        <span className="comment__card-number">{score}</span>
        <div className="comment__card-img1-container">
          <img src="../../images/icon-minus.svg" alt="icon-minus" />
        </div>
      </div>
      <div className="comment__card-section2">
        <div className="comment__card-sectiontop">
          <div className="comment__card-avatar-container">
            <img src={avatar} alt="avatar" />
          </div>
          <span className="comment__card-avatar-name">{username}</span>
          <span className="comment__card-avatar-time">{createdAt}</span>
          <div className="comment__card-button-container">
            <button>Reply</button>
          </div>
        </div>
        <div className="comment__card-sectionbottom">
          <p className="comment__card-info">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentsCard;
