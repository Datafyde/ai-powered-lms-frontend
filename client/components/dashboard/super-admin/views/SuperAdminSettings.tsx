import React from "react";

type Props = {};

const SuperAdminSettings = (props: Props) => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Settings</h1>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Admin Name
          </label>
          <input
            type="text"
            defaultValue="Super Admin"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            defaultValue="admin@example.com"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Notification Preferences
          </label>
          <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
            <option>Email Only</option>
            <option>SMS Only</option>
            <option>Email & SMS</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default SuperAdminSettings;
