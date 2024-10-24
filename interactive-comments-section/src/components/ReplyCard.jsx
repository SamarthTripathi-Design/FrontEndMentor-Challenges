import "./replycard.scss";

const ReplyCard = () => {
  return (
    <div className="reply__card">
      <div className="reply__card-img-container">
        {/* <img src="" alt="" /> */}
        Hello
      </div>
      <textarea id="w3review" name="w3review" rows="4" cols="50">
        At w3schools.com you will learn how to make a website. They offer free
        tutorials in all web development technologies.
      </textarea>
      <button>Reply</button>
    </div>
  );
};

export default ReplyCard;
