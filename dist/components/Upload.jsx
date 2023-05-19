import React, { useEffect, useState } from "react";

export default function Upload() {
    const [clicked, setClicked] = useState(false);
    const [pasted, setPasted] = useState(false);
    const [buttonClass, setButtonClass] = useState("pasteButtonInactive");

    useEffect(() => {
        console.log("hadlePaste launched");
        const screenshotContainer = document.getElementById('screenshot-container');

        const handlePaste = (e) => {
            const items = e.clipboardData.items;
            console.log(items);
            
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                if (item.type.indexOf('image') === 0) {
                    const blob = item.getAsFile();
                    const imageUrl = URL.createObjectURL(blob);
                    const imageElement = document.createElement('img');
                    imageElement.src = imageUrl;
                    screenshotContainer.appendChild(imageElement);

                    console.log(imageElement);

                    setPasted(true);
                    setButtonClass("pasteButtonInactive");
                    break;
                }
            }
        };

        const removePasteListener = () => {
            screenshotContainer.removeEventListener("paste", handlePaste);
        };
        
        if (!pasted) {
            screenshotContainer.addEventListener("paste", handlePaste);
        } else {
            removePasteListener();
        }
    
        return () => {
            removePasteListener();
        };
    }, [pasted]);

    const handleClick = () => {
        if(!clicked) {
            setClicked(true);
            setButtonClass("pasteButtonActive");
        } else if (pasted) {
            setPasted(false);
            setButtonClass("pasteButtonInactive");
        }
    }        

    return (
        <>
            <button
                type="button"
                className={
                    `font-bold ml-5 mb-10 mr-5 w-max h-max p-5 bg-emerald-500 rounded-lg shadow-xl
                    ${buttonClass}`
                }
                // onClick={handlePaste}
                id="screenshot-container"
                onClick={handleClick}
            >
                {!pasted && <img src="./dist/assets/file-new-icon.svg" className="w-16 h-16" />}
            </button>
        </>
    )
}


//{ pasted ? "" : <img src="./dist/assets/file-new-icon.svg" className="w-16 h-16" />}
// ${ clicked ? "pasteButtonActive" : "pasteButtonInactive"}`