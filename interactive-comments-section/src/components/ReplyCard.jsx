import "./replycard.scss";
import commentJson from "../constant/data.json";

const ReplyCard = () => {
  return (
    <div className="reply__card">
      <div className="reply__card-img-container">
        <img src={commentJson.currentUser.image.png} alt="icon-reply" />
      </div>
      <textarea className="reply__card-textarea"></textarea>
      <button className="reply__card-button">Reply</button>
    </div>
  );
};

export default ReplyCard;