"use client";

import tenantOnboardingSteps from "@/constants/onboarding";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TenantOnboarding = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const router = useRouter();
  const tenantId = "dghsjs";

  const CurrentStep = tenantOnboardingSteps[stepIndex].component;

  const goNext = () => {
    if (stepIndex < tenantOnboardingSteps.length - 1)
      setStepIndex((prev) => prev + 1);
  };

  const goBack = () => {
    if (stepIndex > 0) setStepIndex((prev) => prev - 1);
  };

  const skipStep = () => {
    const current = tenantOnboardingSteps[stepIndex];
    if (current.skippable) goNext();
  };

  const completed = () => {
    router.push(`/dashboard/tenant/${tenantId}`);
  };

  return (
    <div>
      <CurrentStep
        onNext={goNext}
        onBack={goBack}
        onSkip={skipStep}
        onCompleted={completed}
      />
      <div className="text-sm text-gray-500 text-center mt-4">
        Step {stepIndex + 1} of {tenantOnboardingSteps.length}
      </div>
    </div>
  );
};

export default TenantOnboarding;
