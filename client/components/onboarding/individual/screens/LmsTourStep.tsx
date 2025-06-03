import React from "react";

type Props = {
  onNext: () => void;
  onBack: () => void;
  onSkip?: () => void;
};

const LmsTourStep = ({ onBack, onNext, onSkip }: Props) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">
        Lets take you on a quick tour
      </h2>
      {/* form or content */}
      <div className="flex gap-4 mt-4">
        <button onClick={onBack} className="text-sm text-gray-600">
          Back
        </button>
        {onSkip && (
          <button
            onClick={onSkip}
            className="text-sm text-yellow-600 underline"
          >
            Skip this step
          </button>
        )}
        <button
          onClick={onNext}
          className="ml-auto bg-blue-600 text-white px-4 py-2 rounded"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default LmsTourStep;
