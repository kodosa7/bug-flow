import React, { useState } from "react";
import Upload from "./Upload";
import Counter from "./Counter";
import Buttons from "./Buttons";
import Footer from "./Footer";
import Time from "./Time";

export default function Main() {
  const [steps, setSteps] = useState([{ id: 1, isImagePasted: false }]);
  const [isFooterVisible, setIsFooterVisible] = useState(true); // State variable for footer visibility

  const handleAddNextStep = () => {
    const newStep = {
      id: steps.length + 1,
      isImagePasted: false,
    };
    setSteps((prevSteps) => [...prevSteps, newStep]);
    setIsFooterVisible(true); // Show the footer when adding a new step
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

  // const handleRemoveStep = (stepId) => {
  //   setSteps((prevSteps) => {
  //     return prevSteps.filter((step) => step.id !== stepId);
  //   });
  //   setIsFooterVisible(true); // Show the footer after removing a step
  // };


    // working
  const handleRemoveStep = (stepId) => {
    console.log("steps.length", steps.length);
    console.log("stepId", stepId);
    setIsFooterVisible(true); // Show the footer after removing a step

    if (steps.length === 1) {
      console.log("setps.length is 1, resetting")
      setSteps([{ id: 0, isImagePasted: false }]); // Set the initial state

    } else {
      console.log("steps.length above 1, continuing")
      setSteps((prevSteps) => {
        return prevSteps.filter((step) => step.id !== stepId);
      });
    };
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

  const handleShowTime = () => {
    setIsFooterVisible(false); // Hide the footer when "Copy to clipboard" is clicked
  };

  const handleShowFooter = () => {
    setIsFooterVisible(true);
  }

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
