import React, { useState, useEffect } from "react";
import Upload from "./Upload";
import Counter from "./Counter";
import Buttons from "./Buttons";
import Footer from "./Footer";
import Time from "./Time";

export default function Main() {
  const [steps, setSteps] = useState([{ id: 1, isImagePasted: false }]);
  const [isFooterVisible, setIsFooterVisible] = useState(true); // State variable for footer visibility
  const [lastStepId, setLastStepId] = useState(1); // Track the ID of the last step

  const handleAddNextStep = () => {
    const newStep = {
      id: lastStepId + 1,
      isImagePasted: false,
    };
    setSteps((prevSteps) => [...prevSteps, newStep]);
    setIsFooterVisible(true); // Show the footer when adding a new step
    setLastStepId((prevLastStepId) => prevLastStepId + 1); // Update the ID of the last step
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

  const handleRemoveStep = (stepId) => {
    setIsFooterVisible(true); // Show the footer after removing a step

    setSteps((prevSteps) => {
      const updatedSteps = prevSteps.filter((step) => step.id !== stepId);
      return updatedSteps;
    });
  };

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

  useEffect(() => {
    if (steps.length === 0) {
      setIsFooterVisible(true); // Show the footer if there are no steps
      setLastStepId(1); // Reset the last step ID to 1
    } else if (steps.length === 1) {
      setIsFooterVisible(true); // Show the footer if there's only one step
      setLastStepId(steps[0].id); // Set the last step ID to the current step
    } else {
      const lastStep = steps[steps.length - 1];
      if (lastStep.isImagePasted) {
        setLastStepId(lastStep.id); // Update the ID of the last step
      }
    }
  }, [steps]);

  const handleShowTime = () => {
    setIsFooterVisible(false); // Hide the footer when "Copy to clipboard" is clicked
  };

  const handleShowFooter = () => {
    setIsFooterVisible(true);
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
            handleAddNextStep={lastStepId === step.id ? handleAddNextStep : undefined}
            handleImagePasted={() => handleImagePasted(step.id)}
            handleDeleteImage={() => handleDeleteImage(step.id)}
            isImagePasted={step.isImagePasted}
          />

          {/* Show the "Add Next Step" button only on the last step */}
          {lastStepId === step.id && step.isImagePasted && (
            <div className="buttons-container" data-html2canvas-ignore="true">
              <Buttons
                handleAddNextStep={handleAddNextStep}
                isImagePasted={step.isImagePasted}
                handleShowTime={handleShowTime}
                handleShowFooter={handleShowFooter}
              />
            </div>
          )}
        </div>
      ))}
      {isFooterVisible ? <Footer /> : <Time />}
    </div>
  );
}