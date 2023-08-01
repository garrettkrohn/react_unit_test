import React from "react";
import { useState } from "react";

const useStepper = () => {
  const [step, setStep] = useState(0);
  const maximumStep = 2;
  const minimumStep = 0;

  const increment = () => {
    if (step < maximumStep) {
      setStep(step + 1);
    }
  };

  const decrement = () => {
    if (step > minimumStep) {
      setStep(step - 1);
    }
  };

  return {
    step,
    setStep,
    increment,
    decrement,
  };
};

export default useStepper;
