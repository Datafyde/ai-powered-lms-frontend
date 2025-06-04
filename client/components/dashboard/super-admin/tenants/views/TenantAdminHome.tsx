import React from "react";

type Props = {};

const TenantAdminHome = (props: Props) => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Tenant Overview</h1>
      <p className="text-gray-600">Here’s a summary of your LMS environment.</p>

      {/* Dashboard Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold">Total Courses</h2>
          <p className="text-2xl font-bold text-blue-600">32</p>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold">Instructors</h2>
          <p className="text-2xl font-bold text-purple-600">6</p>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold">Learners</h2>
          <p className="text-2xl font-bold text-green-600">210</p>
        </div>
      </div>

      {/* Analytics Snapshot */}
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-4">Activity Snapshot</h2>
        <ul className="divide-y divide-gray-200">
          <li className="py-2 flex justify-between">
            <span>
              5 learners enrolled in <strong>AI Foundations</strong>
            </span>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </li>
          <li className="py-2 flex justify-between">
            <span>
              <strong>Jane Doe</strong> published a new course
            </span>
            <span className="text-sm text-gray-500">Today</span>
          </li>
          <li className="py-2 flex justify-between">
            <span>
              <strong>Intro to NLP</strong> course updated
            </span>
            <span className="text-sm text-gray-500">Yesterday</span>
          </li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
        <h2 className="text-lg font-semibold text-indigo-700">
          Get Started Faster
        </h2>
        <p className="text-sm text-indigo-600 mt-1">
          Head over to the <strong>Courses</strong> section to begin building
          your first AI-powered lesson.
        </p>
      </div>
    </div>
  );
};

export default TenantAdminHome;
