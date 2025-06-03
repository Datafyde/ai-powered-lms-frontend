import React from "react";

type Props = {
  onNext: () => void;
};

const WelcomeStep = ({ onNext }: Props) => {
  return (
    <div>
      <h2 className="text-xl font-bold">Welcome to Datafied Ai LMS 🎉</h2>
      <p className="mt-2 text-sm text-gray-600">Let’s get you set up...</p>
      <button
        onClick={onNext}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Continue
      </button>
    </div>
  );
};

export default WelcomeStep;
