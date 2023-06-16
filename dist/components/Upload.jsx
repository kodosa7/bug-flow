import { useRef, useState } from "react";
import Comment from "./Comment";
import pasteIcon from "/dist/assets/paste.svg";
import clickIcon from "/dist/assets/click.svg";

const Upload = ({ handleImagePasted }) => {
  const [image, setImage] = useState(null);
  const [buttonClass, setButtonClass] = useState("pasteButtonInactive");
  const [isPressed, setIsPressed] = useState(false);
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
        e.preventDefault(); // If no image is pasted, do nothing
      }
    }
  };

  const handleClick = () => {
    setButtonClass("pasteButtonActive");
    setIsPressed(true);
  };

  return (
    <>
      {/* If image then show image... */}
      {image ?
        (
          <>
            <div className="upload-container mr-5">
              <img src={image} alt="Pasted image" className="mt-5 mr-5 rounded shadow-lg" />
            </div>
            <div className="comment-container">
              <Comment />
            </div>
          </>
        ) : (
          // ...otherwise show button
          <div className="flex flex-row">
            {/* If not pressed (1st condition), then show the click icon... */}
            {!isPressed ? (<div
              ref={contentEditableRef} // Allows clipboard paste
              className={`${buttonClass} upload-container text-gray-400 p-6 mb-5 mt-5 rounded shadow-lg bg-slate-300 font-semibold flex flex-col items-center cursor-pointer h-32 w-32`}
              onPaste={handlePaste}
              onClick={handleClick}
            >
              <img src={clickIcon} className="click-icon my-3" alt="Click icon" />
            </div>)
            :
            // ...otherwise show the paste icon
            (<div
              ref={contentEditableRef} // Allows clipboard paste
              className={`${buttonClass} upload-container text-gray-400 p-6 mt-5 mb-5 rounded shadow-lg bg-slate-300 font-semibold flex flex-col items-center cursor-pointer h-32 w-32`}
              onPaste={handlePaste}
              onClick={handleClick}
            >
              <img src={pasteIcon} className="paste-icon w-14 mx-4 my-3" alt="Paste icon" />
            </div>)}

            {/* If not pressed (2nd condition), then show instructions how to paste an image from clipboard... */}
            {isPressed ? (
              <div className="instructions-paste text-gray-300 flex flex-col items-left self-center mt-5 ml-4 pr-5">
                <h1 className="font-bold">Paste your screenshot</h1>
                <div className="instructions-paste-small text-gray-500 mb-5">
                  <strong>Hint: </strong>
                  On Mac, use <strong>⌘ + V</strong>.
                  On Windows or Linux, use <strong>Ctrl + V</strong>.
                </div>
              </div>
            )
            :
            (
              // ...otherwise show instructions how to take a screenshot
              <div className="instructions-click text-gray-300 flex flex-col items-left self-center mt-5 ml-4 pr-5">
                <div className="font-bold mb-5">
                  1. Take a screenshot<br />
                  <div className="instructions-click-small text-gray-500">
                    <a href="https://www.4kdownload.com/blog/2022/03/10/take-screenshot-any-operating-system-and-device/" target="_blank" rel="noreferrer">
                      Learn how to take a screenshot
                    </a>
                  </div>
                  2. Click the button
                </div>
              </div>
            )}
          </div>
        )
      }
    </>
  );
};

export default Upload;