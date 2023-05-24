import React, { useRef, useState } from 'react';
import Comment from "./Comment";

const ImagePasteButton = () => {
  const [image, setImage] = useState(null);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [buttonClass, setButtonClass] = useState("pasteButtonInactive");
  const contentEditableRef = useRef(null);

  const handlePaste = (e) => {
    const clipboardData = e.clipboardData || window.clipboardData;
    const items = clipboardData.items;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.type.indexOf('image') !== -1) {
        const file = item.getAsFile();
        setImage(URL.createObjectURL(file));
        setShowDeleteButton(true);
        break;
      } else {
        break;
      }
    }
  };
  
  const handleDelete = () => {
    setImage(null);
    setShowDeleteButton(false);
  };

  const handleClick = () => {
    if (contentEditableRef.current) {
        const pasteBtn = document.getElementsByClassName("pasteButtonActive");
        pasteBtn.innerHTML = `<div className="font-bold">Paste now</div>`;
        setButtonClass("pasteButtonActive");
    }
  };

  return (
    <div>
      {image ? (
        <div className="relative max-w-full">
          <img src={image} alt="Pasted image" className="max-w-full h-auto m-5 rounded-xl" />
          <Comment />
          {showDeleteButton && (
            <button
              className="absolute top-5 right-10 z-10 p-3 rounded-full bg-red-600 text-white"
              onClick={handleDelete}
            >
              <img src="./dist/assets/trash.svg" className="trash-icon w-8 h-8" />
            </button>
          )}
        </div>
      ) : (
        <div
          contentEditable
          ref={contentEditableRef}
          className={`${buttonClass} text-gray-400 p-6 m-5 rounded-xl shadow-lg bg-slate-300 font-semibold flex flex-col items-center cursor-pointer`}
          onPaste={handlePaste}
          onClick={handleClick}
        >
          <img src="./dist/assets/paste.svg" className="add-icon w-16 h-16" />
          Click to Paste
        </div>
      )}
    </div>
  );
};

export default ImagePasteButton;