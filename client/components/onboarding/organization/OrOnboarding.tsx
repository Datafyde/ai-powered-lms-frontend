"use client";

import React, { useState } from "react";
import organizationSteps from "@/constants/onboarding/or.constants";

const OrOnboarding = () => {
  const [stepIndex, setStepIndex] = useState(0);

  const CurrentStep = organizationSteps[stepIndex].component;

  const goNext = () => {
    if (stepIndex < organizationSteps.length - 1)
      setStepIndex((prev) => prev + 1);
  };

  const goBack = () => {
    if (stepIndex > 0) setStepIndex((prev) => prev - 1);
  };

  const skipStep = () => {
    const current = organizationSteps[stepIndex];
    if (current.skippable) goNext();
  };

  return (
    <div>
      <CurrentStep onNext={goNext} onBack={goBack} onSkip={skipStep} />
      <div className="text-sm text-gray-500 text-center mt-4">
        Step {stepIndex + 1} of {organizationSteps.length}
      </div>
    </div>
  );
};

export default OrOnboarding;
