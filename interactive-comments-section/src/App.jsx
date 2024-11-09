import CommentsCard from "./components/CommentsCard";
import ReplyCard from "./components/ReplyCard";
import CommentContext from "./context/CommentContext";
import { useContext } from "react";

function App() {
  const { showReply, commentObj } = useContext(CommentContext);
  return (
    <div className="comment__card-container">
      {commentObj.map((item) => {
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
            {showReply.id === item.id &&
              showReply.username === item.user.username && (
                <ReplyCard id={item.id} username={item.username} />
              )}
            {item.replies.length > 0 ? (
              item.replies.map((item) => {
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
                      replyingTo={item.replyingTo}
                    />
                    {showReply.id === item.id &&
                      showReply.username === item.user.username && (
                        <ReplyCard
                          reply={true}
                          id={item.id}
                          username={item.username}
                        />
                      )}
                  </>
                );
              })
            ) : (
              <></>
            )}
          </>
        );
      })}
      <ReplyCard send={true} />
    </div>
  );
}

export default App;
