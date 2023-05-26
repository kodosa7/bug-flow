import React, { useState } from "react";
import Upload from "./Upload";
import Counter from "./Counter";
import Buttons from "./Buttons";

export default function Main() {
  const [counters, setCounters] = useState([1]);
  const [isImagePasted, setIsImagePasted] = useState(false);

  const handleAddNextStep = () => {
    setCounters((prevCounters) => [...prevCounters, prevCounters.length + 1]);
  };

  const handleImagePasted = () => {
    setIsImagePasted(true);
  };

  return (
    <>
      {counters.map((counter) => (
        <div key={counter} className="item-container flex">
          <Counter counter={counter} />
          <Upload
            handleAddNextStep={handleAddNextStep}
            handleImagePasted={handleImagePasted}
            isImagePasted={isImagePasted}
          />
        </div>
      ))}
      {isImagePasted && (
        <Buttons handleAddNextStep={handleAddNextStep} isImagePasted={isImagePasted} />
      )}
    </>
  );
}
