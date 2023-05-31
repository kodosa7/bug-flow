import { useState } from "react";
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";

export default function Buttons({ handleAddNextStep, isImagePasted }) {
  const [isCopied, setIsCopied] = useState(false);

  const handlePasteClick = async () => {
    setIsCopied(true);

    try {
      const canvas = await html2canvas(document.body);
      const dataUrl = canvas.toDataURL("image/png");
      const img = await fetch(dataUrl);
      const imgBlob = await img.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          "image/png": imgBlob,
        })
      ]);
    } catch (err) {
      console.error(err);
    }

    setTimeout(() => {
      setIsCopied(false);
    }, 375);
  };

  const handleExportClick = async () => {
    const canvas = await html2canvas(document.body);
    const dataUrl = canvas.toDataURL("image/png");
    downloadjs(dataUrl, "download.png", "image/png");
  };

  if (!isImagePasted) {
    return null; // If image is not pasted, don't render buttons
  }

  return (
    <div className="buttons-container mb-5">
      <button
        className="button-animation bg-blue-500 hover:bg-blue-700 transition-all duration-75 text-gray-200 font-bold py-2 px-4 rounded shadow-xl"
        onClick={handleAddNextStep}
      >
        Add Next Step
      </button>

      <div>
        {isCopied && <div className="copied-text">Copied</div>}

        <button
          className={`button-animation bg-green-600 hover:bg-green-800 transition-all duration-75 text-gray-200 font-bold py-2 px-4 rounded ml-5 shadow-xl`}
          onClick={handlePasteClick}
          >
          Copy to clipboard
        </button>
      </div>


      <button
        className="button-animation bg-green-600 hover:bg-green-800 transition-all duration-75 text-gray-200 font-bold py-2 px-4 rounded ml-5 shadow-xl"
        onClick={handleExportClick}
      >
        Export as PNG
      </button>
    </div>
  );
}
