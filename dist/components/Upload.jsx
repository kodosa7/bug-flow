import { useRef, useState } from "react";
import Comment from "./Comment";

const Upload = ({ handleImagePasted, handleDeleteImage, isImagePasted }) => {
  const [image, setImage] = useState(null);
  const [buttonClass, setButtonClass] = useState("pasteButtonInactive");
  const contentEditableRef = useRef(null);

  const handlePaste = (e) => {
    const clipboardData = e.clipboardData || window.clipboardData;
    const items = clipboardData.items;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.type.indexOf("image") !== -1) {
        const file = item.getAsFile();
        setImage(URL.createObjectURL(file));
        handleImagePasted(); // Notify Main component that an image is pasted
        break;
      } else {
        console.log("Not an image");
        e.preventDefault();
      }
    }
  };

  const handleClick = () => {
    if (contentEditableRef.current) {
      const pasteBtn = document.getElementsByClassName("pasteButtonActive");
      pasteBtn.innerHTML = `<div className="font-bold">Paste now</div>`;
      setButtonClass("pasteButtonActive");
    }
  };

  return (
    <>
      {image ? (
        <>
          <div className="upload-container mr-5">
            <img src={image} alt="Pasted image" className="mt-5 mr-5 rounded shadow-lg" />
          </div>
          <div className="comment-container">
            <Comment />
          </div>
        </>
      ) : (
        <div
          contentEditable
          ref={contentEditableRef}
          className={`${buttonClass} h-max upload-container text-gray-400 p-6 mt-5 mb-5 rounded shadow-lg bg-slate-300 font-semibold flex flex-col items-center cursor-pointer`}
          onPaste={handlePaste}
          onClick={handleClick}
        >
          <img src="./dist/assets/paste.svg" className="add-icon w-16 h-16" alt="Paste icon" />
          Click to Paste
        </div>
      )}
    </>
  );
};

export default Upload;
