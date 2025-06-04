"use client";
import React, { useState } from "react";

type Props = { onBack: () => void; onNext: () => void };

const ProfileSetupStep = ({ onBack, onNext }: Props) => {
  const [orgName, setOrgName] = useState("");
  const [website, setWebsite] = useState("");

  const handleSubmit = () => {
    // handle logics
    onNext();
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Set Up Organization Profile</h2>
      <input
        type="text"
        placeholder="Organization Name"
        value={orgName}
        onChange={(e) => setOrgName(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Website URL (optional)"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <div className="flex justify-between mt-4">
        <button onClick={onBack} className="text-gray-600 hover:underline">
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ProfileSetupStep;
