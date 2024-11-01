import { createContext, useContext, useState } from "react";

export const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  const [showReply, setShowReply] = useState(false);
  return (
    <CommentContext.Provider value={{ showReply, setShowReply }}>
      {children}
    </CommentContext.Provider>
  );
};

export default CommentContext;
