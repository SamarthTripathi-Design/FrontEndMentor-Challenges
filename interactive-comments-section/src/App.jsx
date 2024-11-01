import CommentsCard from "./components/CommentsCard";
import commentsJson from "./constant/data.json";
import ReplyCard from "./components/ReplyCard";
import CommentContext from "./context/CommentContext";
import { useContext } from "react";

function App() {
  const { showReply } = useContext(CommentContext);
  return (
    <div className="comment__card-container">
      {commentsJson.comments.map((item) => {
        return (
          <>
            <CommentsCard
              key={item.id}
              id={item.id}
              score={item.score}
              createdAt={item.createdAt}
              content={item.content}
              username={item.user.username}
              avatar={item.user.image.png}
              replies={item.replies}
            />
            {item.replies.length > 0 ? (
              item.replies.map((item) => {
                return (
                  <CommentsCard
                    key={item.id}
                    id={item.id}
                    score={item.score}
                    createdAt={item.createdAt}
                    content={item.content}
                    username={item.user.username}
                    avatar={item.user.image.png}
                    replyingTo={item.replyingTo}
                  />
                );
              })
            ) : (
              <></>
            )}
            {showReply && <ReplyCard />}
          </>
        );
      })}
    </div>
  );
}

export default App;
