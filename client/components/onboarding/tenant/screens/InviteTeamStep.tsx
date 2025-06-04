"use client";
import React, { useState } from "react";

type Props = { onSkip: () => void; onBack: () => void; onNext: () => void };

const InviteTeamStep = ({ onBack, onSkip, onNext }: Props) => {
  const [emails, setEmails] = useState<string>("");

  const handleInvite = () => {
    // handle the invite logic
    onNext();
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Invite Your Team</h2>
      <p className="text-gray-600">
        Enter email addresses separated by commas.
      </p>
      <textarea
        className="w-full border p-2 rounded"
        rows={3}
        placeholder="e.g., user1@example.com, user2@example.com"
        value={emails}
        onChange={(e) => setEmails(e.target.value)}
      />
      <div className="flex justify-between mt-4">
        <button onClick={onBack} className="text-gray-600 hover:underline">
          Back
        </button>
        <div className="space-x-2">
          <button onClick={onSkip} className="text-gray-500 hover:underline">
            Skip
          </button>
          <button
            onClick={handleInvite}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Invite & Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default InviteTeamStep;
