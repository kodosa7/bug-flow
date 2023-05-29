import React, { useState } from "react";
import Upload from "./Upload";
import Counter from "./Counter";
import Buttons from "./Buttons";

export default function Main() {
  const [counters, setCounters] = useState([1]);
  const [buttonVisibility, setButtonVisibility] = useState([false]);
  const [activeStep, setActiveStep] = useState(1);

  const handleAddNextStep = () => {
    setCounters((prevCounters) => [...prevCounters, prevCounters.length + 1]);
    setButtonVisibility((prevVisibility) => [...prevVisibility, false]);
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleImagePasted = (index) => {
    setButtonVisibility((prevVisibility) => {
      const newVisibility = [...prevVisibility];
      newVisibility[index] = true;
      return newVisibility;
    });
  };

  return (
    <div className="border-4 border-gray-600">
      {counters.map((counter, index) => (
        <div key={counter} className="main-container border-4 border-red-300">
          <div className="counter-container">
            <Counter counter={counter} />
          </div>
          <Upload
            handleAddNextStep={handleAddNextStep}
            handleImagePasted={() => handleImagePasted(index)}
            isImagePasted={buttonVisibility[index]}
          />
          {activeStep === index + 1 && buttonVisibility[index] && (
            <div className="buttons-container">
              <Buttons handleAddNextStep={handleAddNextStep} isImagePasted={buttonVisibility[index]} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

