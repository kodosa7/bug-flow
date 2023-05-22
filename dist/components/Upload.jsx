import React, { useEffect, useState } from "react";

export default function Upload() {
    const [clicked, setClicked] = useState(false);
    const [pasted, setPasted] = useState(false);
    const [buttonClass, setButtonClass] = useState("pasteButtonActive");

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
        // initial state (not clicked and not pasted)
        if(!clicked && !pasted) {
            setClicked(true);
            setButtonClass("pasteButtonInactive");
            console.log("#1 setting to waiting for pasted");
        }

        // step #2 - cliked and not pasted
        if (clicked && !pasted) {
            setClicked(true);
            console.log("#2 just sclicking again but not pasted")
        }

        if (pasted) {
            setPasted(false);
            setClicked(true);
            setButtonClass("pasteButtonActive");

            const screenshotContainer = document.getElementById("screenshot-container");
            screenshotContainer.innerHTML = "";

            console.log("clicked && !pasted");
        }
        // if (clicked && pasted) {
        //     setClicked(false);
        //     setButtonClass("pasteButtonPasted");
        // }

    }        

    return (
        <>
            <button
                type="button"
                className={
                    `font-bold ml-5 mb-10 mr-5 mt-5 w-max h-max p-5 rounded-xl
                    ${buttonClass}`
                }
                id="screenshot-container"
                onClick={handleClick}
            >
                {!pasted && (
                    <>
                        <h4 className="text-gray-400">Click to paste</h4>
                        <img src="./dist/assets/paste.svg" className="add-icon w-16 h-16" />
                    </>
                    )
                }
            </button>
        </>
    )
}





