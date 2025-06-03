import React from "react";

type Props = { onSkip: () => void; onNext: () => void };

const OrWelcomeStep = ({ onSkip, onNext }: Props) => {
  return (
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-bold">Welcome to Your LMS Dashboard</h2>
      <p className="text-gray-600">
        Let’s get your organization set up in a few easy steps.
      </p>
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={onSkip}
          className="text-sm text-gray-500 hover:underline"
        >
          Skip
        </button>
        <button
          onClick={onNext}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default OrWelcomeStep;
