import React, { useState } from "react";

export default function Comment() {
  const [commentText, setCommentText] = useState("");
  const [submittedComment, setSubmittedComment] = useState("");

  const handleTextareaChange = (e) => {
    const text = e.target.value;
    if (text.length <= 1000) {
      setCommentText(text);
    } else {
      setCommentText(text.slice(0, 1000));
      console.log("text sliced");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addComment();
    }
  };

  const addComment = () => {
    console.log("Comment added:", commentText);
    setSubmittedComment(commentText);
    setCommentText("");
  };

  return (
    <div>
      {submittedComment && (
        <div className="text-output mr-5 mb-3 p-3 rounded font-semibold text-lg font-sans bg-gray-900 text-gray-200 w-11/12 h-auto shadow-lg">
          {submittedComment}
        </div>
      )}
      <textarea
        className="text-input data bg-gray-700 text-gray-400 placeholder-gray-600 rounded p-3 resize-none font-normal text-lg font-sans shadow-lg border-none outline-none"
        id="base64MD"
        // cols="100"
        rows="1"
        maxLength="1000"
        placeholder="Text comment..."
        value={commentText}
        onChange={handleTextareaChange}
        onKeyDown={handleKeyDown}
      ></textarea>
    </div>
  );
}
