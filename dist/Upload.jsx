import React, { useEffect, useState } from "react";

export default function Upload() {
    const [clicked, setClicked] = useState(false);
    const [pasted, setPasted] = useState(false);
    const [buttonClass, setButtonClass] = useState("pasteButtonInactive");

    useEffect(() => {
        const screenshotContainer = document.getElementById('screenshot-container');

        const handlePaste = (e) => {
            console.log("screenshot pasted");
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

            const screenshotContainer = document.getElementById("screenshot-container");
            screenshotContainer.innerHTML = "";
        }
    }        

    return (
        <>
            <button
                type="button"
                className={
                    `font-bold ml-5 mb-10 mr-5 mt-5 w-max h-max p-5 rounded-lg bg-gray-100
                    ${buttonClass}`
                }
                id="screenshot-container"
                onClick={handleClick}
            >
                {!pasted && <img src="./dist/assets/paste.svg" className="add-icon w-24 h-24" />}
            </button>
        </>
    )
}