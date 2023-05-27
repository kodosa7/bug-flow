import React from "react";

export default function Buttons({ handleAddNextStep, isImagePasted }) {
  if (!isImagePasted) {
    return null; // If image is not pasted, don't render the buttons
  }

  return (
    <div className="buttons-container">
      <button
        className="add-next-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        onClick={handleAddNextStep}
      >
        Add Next Step
      </button>

      <button
        className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 border border-green-700 rounded ml-5"
      >
        Export BugFlow
      </button>
    </div>
  );
}

