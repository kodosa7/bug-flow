import { useState } from "react";
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";

export default function Buttons({
  handleAddNextStep,
  isImagePasted,
  handleShowTime,
  handleShowFooter
}) {
  const [isCopied, setIsCopied] = useState(false);

  const handlePasteClick = () => {
    handleShowTime(); // Call the handler to hide the footer

    // Wait 100ms to render handleShowTime(), then make element capture & paste to clipboard
    setTimeout(async () => {
      setIsCopied(true);

      try {
        const canvas = await html2canvas(document.getElementById("render"));
        const dataUrl = canvas.toDataURL("image/png");
        const img = await fetch(dataUrl);
        const imgBlob = await img.blob();
        await navigator.clipboard.write([
          new ClipboardItem({
            "image/png": imgBlob,
          }),
        ]);
      } catch (err) {
        console.error(err);
      }

      // Wait more to finish the animation
      setTimeout(() => {
        setIsCopied(false);
      }, 370);
    }, 100);

    // Wait more than 100ms to hide time again and show footer back
    setTimeout(() => {
      handleShowFooter();
    }, 150);
  };

  const handleExportClick = () => {
    handleShowTime(); // Call the handler to hide the footer
    
    // Wait 100ms to render handleShowTime(), then make element capture & save as image
    setTimeout(async () => {
      const canvas = await html2canvas(document.getElementById("render"));
      const dataUrl = canvas.toDataURL("image/png");
      downloadjs(dataUrl, "bugflow.png", "image/png");
    }, 100);

    // Wait more than 100ms to hide time again and show footer back
    setTimeout(() => {
      handleShowFooter();
    }, 150);
  };

  if (!isImagePasted) {
    return null; // If image is not pasted, don't render buttons
  }

  return (
    <div className="buttons-container mb-5">
      <button
        className="button button-animation bg-blue-500 hover:bg-blue-700 transition-all duration-75 text-gray-200 font-bold py-2 px-4 rounded shadow-xl"
        onClick={handleAddNextStep}
      >
        Add Next Step
      </button>

      <div>
        {isCopied && <div className="copied-text">Copied</div>}

        <button
          className={`button button-animation bg-green-600 hover:bg-green-800 transition-all duration-75 text-gray-200 font-bold py-2 px-4 rounded ml-5 shadow-xl`}
          onClick={handlePasteClick}
        >
          Copy to clipboard
        </button>
      </div>

      <button
        className="button button-animation bg-green-600 hover:bg-green-800 transition-all duration-75 text-gray-200 font-bold py-2 px-4 rounded ml-5 shadow-xl"
        onClick={handleExportClick}
      >
        Export as PNG
      </button>
    </div>
  );
}
