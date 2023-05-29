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
        <div className="text-output mr-5 mb-5 p-5 rounded-xl font-semibold text-xl font-sans bg-emerald-800 text-emerald-50 w-11/12 h-auto">
          {submittedComment}
        </div>
      )}
      <textarea
        className="text-input data text-gray-950 rounded-xl p-5 resize-none font-normal text-xl font-sans"
        id="base64MD"

        // cols="100"
        // rows="4"
        maxLength="1000"
        placeholder="Comment here, submit by Enter, or submit blank to delete added comment (Max. 1000 characters)"
        value={commentText}
        onChange={handleTextareaChange}
        onKeyDown={handleKeyDown}
      ></textarea>
    </div>
  );
}
