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
    <div className="border-4 border-gray-600">
      {steps.map((step, index) => (
        <div key={step.id} className="main-container border-4 border-red-300">
          <div className="counter-container">
            <Counter counter={index + 1} />
            <button
              className="delete-button p-3 ml-10 bg-red-600 text-gray-50 rounded-xl shadow-xl"
              onClick={() => handleDeleteStep(step.id)}
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
            <div className="buttons-container">
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
