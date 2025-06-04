import React from "react";

type Props = { onBack: () => void; onNext: () => void };

const SSOSecurityStep = ({ onBack, onNext }: Props) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">SSO & Security Setup</h2>
      <p className="text-gray-600">
        Configure your organization's single sign-on (SSO) and security
        settings. You can skip this step for now and set it up later.
      </p>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            SSO Provider (optional)
          </label>
          <input
            type="text"
            placeholder="e.g., Okta, Auth0"
            className="w-full mt-1 px-3 py-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Enforce 2FA for Admins
          </label>
          <select className="w-full mt-1 px-3 py-2 border rounded-md">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </form>

      <div className="flex justify-between mt-6">
        <button
          onClick={onBack}
          className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
        >
          Back
        </button>

        <div className="space-x-2">
          <button
            onClick={onNext}
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SSOSecurityStep;
