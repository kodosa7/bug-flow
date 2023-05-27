import React, { useState } from "react";
import Upload from "./Upload";
import Counter from "./Counter";
import Buttons from "./Buttons";

export default function Main() {
  const [counters, setCounters] = useState([1]);
  const [isImagePasted, setIsImagePasted] = useState(false);

  const handleAddNextStep = () => {
    setCounters((prevCounters) => [...prevCounters, prevCounters.length + 1]);  // add +1 to the counters
    setIsImagePasted(false);  // button pressed, so hide the buttons
  };

  const handleImagePasted = () => {
    setIsImagePasted(true);  // image pasted, so show the buttons
  };

  return (
    <div className="border-4 border-gray-600">
      {counters.map((counter) => (
        <div key={counter} className="main-container border-4 border-red-300">
          <div className="counter-container">
            <Counter counter={counter} />
          </div>
          <Upload
            handleAddNextStep={handleAddNextStep}
            handleImagePasted={handleImagePasted}
            isImagePasted={isImagePasted}
            />
          {isImagePasted && (
          <div className="buttons-container">
              <Buttons
                handleAddNextStep={handleAddNextStep}
                isImagePasted={isImagePasted}
              />
          </div>
          )}
        </div>
      ))}
    </div>
  );
}