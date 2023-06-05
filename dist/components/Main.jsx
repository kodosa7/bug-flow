import React, { useState } from "react";
import Upload from "./Upload";
import Counter from "./Counter";
import Buttons from "./Buttons";

export default function Main() {
  const [steps, setSteps] = useState([{ id: 1, isImagePasted: false }]);

  const handleAddNextStep = () => {
    const newStep = {
      id: steps.length + 1,
      isImagePasted: false,
    };
    setSteps((prevSteps) => [...prevSteps, newStep]);
  };

  const handleImagePasted = (stepId) => {
    setSteps((prevSteps) => {
      return prevSteps.map((step) => {
        if (step.id === stepId) {
          return {
            ...step,
            isImagePasted: true,
          };
        }
        return step;
      });
    });
  };

  const handleDeleteStep = (stepId) => {
    setSteps((prevSteps) => {
      const remainingSteps = prevSteps.filter((step) => step.id !== stepId);
  
      if (remainingSteps.length === 0) {
        // If the last remaining step is deleted or there is only one step and it's the first one, reset the app to the initial state
        return [{ id: 1, isImagePasted: false }];
      }
  
      let updatedSteps;
  
      if (stepId === 1) {
        updatedSteps = remainingSteps.map((step, index) => ({
          ...step,
          id: index + 1,
        }));
      } else {
        updatedSteps = remainingSteps.map((step, index) => ({
          ...step,
          id: index < stepId - 1 ? index + 1 : index + 2,
        }));
      }
  
      return updatedSteps;
    });
  };
  
  
  const handleRemoveStep = (stepId) => {
    console.log("steps.length", steps.length);
    console.log("stepId", stepId);

    if (steps.length === 1) {
      console.log("setps.length is 1, resetting")
      setSteps([{ id: 0, isImagePasted: false }]); // Set the initial state

    } else {
      console.log("steps.length above 1, continuing")
      handleDeleteStep(stepId);
    }
  };

  // was correct

  // const handleDeleteStep = (stepId) => {
  //   setSteps((prevSteps) => {
  //     const remainingSteps = prevSteps.filter((step) => step.id !== stepId);
  
  //     if (remainingSteps.length === 0) {
  //       // If all steps are deleted, reset the app to initial state
  //       return [{ id: 1, isImagePasted: false }];
  //     }
  
  //     const updatedSteps = remainingSteps.map((step, index) => ({
  //       ...step,
  //       id: index < stepId - 1 ? index + 1 : index + 2,
  //     }));
  
  //     return updatedSteps;
  //   });
  // };

  const handleDeleteImage = (stepId) => {
    setSteps((prevSteps) => {
      return prevSteps.map((step) => {
        if (step.id === stepId) {
          return {
            ...step,
            isImagePasted: false,
          };
        }
        return step;
      });
    });
  };

  const isLastStep = (stepId) => {
    return stepId === steps.length;
  };

  return (
    <div className="">
      {steps.map((step, index) => (
        <div key={step.id} className="main-container my-0 mx-auto w-11/12 bg-gray-800 mb-5 rounded">
          <div className="counter-container">
            <Counter counter={index + 1} />

            {step.isImagePasted && (
              <button
                className="delete-button button-animation py-2 px-4 ml-5 bg-gray-900 text-gray-400 hover:bg-gray-700 transition-all duration-75 font-bold rounded shadow-xl"
                onClick={() => handleRemoveStep(step.id)}
                data-html2canvas-ignore="true"
              >
                Remove step
              </button>
            )}
          </div>

          <Upload
            handleAddNextStep={isLastStep(step.id) ? handleAddNextStep : undefined}
            handleImagePasted={() => handleImagePasted(step.id)}
            handleDeleteImage={() => handleDeleteImage(step.id)}
            isImagePasted={step.isImagePasted}
          />

          {(isLastStep(step.id) || steps.length === 1) && step.isImagePasted && (
            <div className="buttons-container" data-html2canvas-ignore="true">
              <Buttons handleAddNextStep={handleAddNextStep} isImagePasted={step.isImagePasted} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
