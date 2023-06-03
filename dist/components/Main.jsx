import React, { useState } from "react";
import Upload from "./Upload";
import Counter from "./Counter";
import Buttons from "./Buttons";


export default function Main() {
  const [steps, setSteps] = useState([{ id: 1, showButtons: false }]);

  const handleAddNextStep = () => {
    const newStep = {
      id: steps.length + 1,
      showButtons: false
    };
    setSteps((prevSteps) => [...prevSteps, newStep]);
  };

  const handleImagePasted = (stepId) => {
    setSteps((prevSteps) => {
      return prevSteps.map((step) => {
        if (step.id === stepId) {
          return {
            ...step,
            showButtons: true
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
        // If all steps are deleted, remove all steps
        return [];
      } else {
        const updatedSteps = remainingSteps.map((step, index) => {
          if (index === remainingSteps.length - 1) {
            // Show the "Add Next Step" button in the last remaining step
            return {
              ...step,
              showButtons: true
            };
          }
          return {
            ...step,
            id: index + 1,
            showButtons: step.showButtons
          };
        });
  
        return updatedSteps;
      }
    });
  };
 
  const handleDeleteImage = (stepId) => {
    setSteps((prevSteps) => {
      return prevSteps.map((step) => {
        if (step.id === stepId) {
          return {
            ...step,
            showButtons: false
          };
        }
        return step;
      });
    });
  };

  const handleAddNextStepClick = (stepId) => {
    setSteps((prevSteps) => {
      const updatedSteps = prevSteps.map((step) => {
        if (step.id === stepId) {
          return {
            ...step,
            showButtons: false
          };
        }
        return step;
      });
  
      const newStep = {
        id: updatedSteps.length + 1,
        showButtons: false
      };
  
      return [...updatedSteps, newStep];
    });
  };

  return (
    <div className="">
      {steps.map((step, index) => (
        <div key={step.id} className="main-container my-0 mx-auto w-11/12 bg-gray-800 mb-5 rounded">
          <div className="counter-container">
            <Counter counter={index + 1} />
            
            <button
              className="delete-button button-animation py-2 px-4 ml-5 bg-gray-900 text-gray-400 hover:bg-gray-700 transition-all duration-75 font-bold rounded shadow-xl"
              onClick={() => handleDeleteStep(step.id)}
              data-html2canvas-ignore="true"
            >
              Remove step
            </button>
            
          </div>
          <Upload
            handleAddNextStep={() => handleAddNextStepClick(step.id)}
            handleImagePasted={() => handleImagePasted(step.id)}
            handleDeleteImage={() => handleDeleteImage(step.id)}
            isImagePasted={step.showButtons}
          />

          {step.showButtons && steps.indexOf(step) === steps.length - 1 && (
            <div
                className={`buttons-container`}
                data-html2canvas-ignore="true"
            >
              <Buttons
                handleAddNextStep={() => handleAddNextStepClick(step.id)}
                isImagePasted={step.showButtons}
              />
            </div>
          )}

        </div>
      ))}
    </div>
  );
}