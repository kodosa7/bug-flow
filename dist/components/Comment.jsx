import React, { useState } from "react";
import Buttons from "./Buttons";

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
    <>
      {submittedComment && (
        <div className="comment-container m-5 p-5 rounded-xl font-semibold text-xl bg-emerald-800 text-emerald-50 w-11/12 h-auto">
          {submittedComment}
        </div>
      )}
      <textarea
        className="textarea data ml-5 text-gray-950"
        id="base64MD"
        cols="100"
        rows="4"
        maxLength="1000"
        placeholder="Type your commentary here, submit by Enter, or submit blank to delete text. Max. 1000 characters."
        value={commentText}
        onChange={handleTextareaChange}
        onKeyDown={handleKeyDown}
      ></textarea>
      <br />
      <Buttons />
    </>
  );
}
