import { useState } from "react";
import upIcon from "/dist/assets/up.svg";
import deleteIcon from "/dist/assets/delete.svg";

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
        <div className="mb-3 mr-5 p-3 rounded font-semibold text-lg font-sans bg-gray-900 text-gray-200 shadow-lg flex flex-row">
          <div className="text-output">
            {submittedComment}
          </div>
          <div className="align-top">
            <button className="delete-icon button-animation transition-all duration-75 shadow-xl" data-html2canvas-ignore="true">
              <img className="w-6 h-6 ml-3 flex" src={deleteIcon} />
            </button>
          </div>
        </div>
      )}
      <div className="flex flex-row">
        <textarea
          className="text-input data bg-gray-700 text-gray-400 placeholder-gray-600 rounded p-3 resize-none font-normal text-lg font-sans shadow-lg border-none outline-none"
          rows="1"
          maxLength="1000"
          placeholder="Add comment..."
          value={commentText}
          onChange={handleTextareaChange}
          onKeyDown={handleKeyDown}
          data-html2canvas-ignore="true"
        >
        </textarea>
        <button className="text-submit-button button-animation ml-3 mr-5 px-4 bg-gray-700 hover:bg-gray-600 transition-all duration-75 font-bold rounded shadow-xl" data-html2canvas-ignore="true" alt="Text submit icon">
          <img className="up-icon w-6 h-6" src={upIcon} />
        </button>
      </div>
    </div>
  );
}
