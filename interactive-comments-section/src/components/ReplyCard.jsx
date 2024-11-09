import "./replycard.scss";
import { useContext } from "react";
import CommentContext from "../context/CommentContext";

const ReplyCard = ({ reply, id, username, send }) => {
  const {
    showReply,
    commentObj,
    setCommentObj,
    setReplyComment,
    replyComment,
    currentUser,
  } = useContext(CommentContext);

  const handlePostReply = () => {
    const selectedObj = commentObj.find((item) => item.id === id);
    const ReplyObj = {
      id: currentUser.id,

      user: { image: currentUser.image, username: currentUser.username },
      constent: replyComment,
    };
    selectedObj.replies.push(ReplyObj);
    const updatedComments = commentObj.map((item) =>
      item.id === id ? selectedObj : item
    );
    setCommentObj(updatedComments);
  };

  const handleReplyText = (e) => {
    console.log(e.target.value);
    setReplyComment(e.target.value);
  };

  return (
    <div className={reply ? "reply__card comment-reply" : "reply__card "}>
      <div className="reply__card-img-container">
        <img src={currentUser.image.png} alt="icon-reply" />
      </div>
      <textarea
        className="reply__card-textarea"
        onChange={handleReplyText}
      ></textarea>
      <button className="reply__card-button" onClick={handlePostReply}>
        {send ? "Send" : "Reply"}
      </button>
    </div>
  );
};

export default ReplyCard;
