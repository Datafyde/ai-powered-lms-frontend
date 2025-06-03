"use client";
import React, { useState } from "react";
import individualSteps from "@/constants/onboarding/ind.constants";

const IOnboarding = () => {
  const [stepIndex, setStepIndex] = useState(0);

  const CurrentStep = individualSteps[stepIndex].component;

  const goNext = () => {
    if (stepIndex < individualSteps.length - 1)
      setStepIndex((prev) => prev + 1);
  };

  const goBack = () => {
    if (stepIndex > 0) setStepIndex((prev) => prev - 1);
  };

  const skipStep = () => {
    const current = individualSteps[stepIndex];
    if (current.skippable) goNext();
  };
  return (
    <div>
      <CurrentStep onNext={goNext} onBack={goBack} onSkip={skipStep} />
      <div className="text-sm text-gray-500 text-center mt-4">
        Step {stepIndex + 1} of {individualSteps.length}
      </div>
    </div>
  );
};

export default IOnboarding;
