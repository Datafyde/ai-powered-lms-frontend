import React from "react";

type Props = {
  onBack: () => void;
};

const ProfileSetupStep = ({ onBack }: Props) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Set up your profile</h2>

      {/* Form fields go here */}
      <input
        type="text"
        placeholder="Full name"
        className="mb-4 p-2 border w-full"
      />

      <div className="flex justify-between">
        <button onClick={onBack} className="text-gray-600 hover:underline">
          Back
        </button>

        {/* <button
          onClick={onNext}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Continue
        </button> */}
      </div>
    </div>
  );
};

export default ProfileSetupStep;
