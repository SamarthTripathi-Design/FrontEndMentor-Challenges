import CommentsCard from "./components/CommentsCard";
// import { useReducer } from "react";
import commentsJson from "./constant/data.json";

// const InitialState = {
//   data: commentsJson,
// };

function App() {
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
          </>
        );
      })}
    </div>
  );
}

export default App;
