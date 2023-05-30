import React from "react";

export default function Buttons({ handleAddNextStep, isImagePasted }) {
  if (!isImagePasted) {
    return null; // If image is not pasted, don't render buttons
  }

  return (
    <div className="buttons-container mb-5">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-gray-200 font-bold py-2 px-4 border border-blue-700 rounded shadow-xl"
        onClick={handleAddNextStep}
      >
        Add Next Step
      </button>

      <button
        className="bg-green-600 hover:bg-green-800 text-gray-200 font-bold py-2 px-4 border border-green-700 rounded ml-5 shadow-xl"
      >
        Export BugFlow
      </button>
    </div>
  );
}

