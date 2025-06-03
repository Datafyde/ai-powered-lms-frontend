import React from "react";

type Props = {};

const SuperAdminHome = (props: Props) => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Super Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold">Total Tenants</h2>
          <p className="text-2xl font-bold text-blue-600">124</p>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold">Monthly Revenue</h2>
          <p className="text-2xl font-bold text-green-600">$8,900</p>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold">Active Users</h2>
          <p className="text-2xl font-bold text-purple-600">4,321</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-4">Recent Tenant Signups</h2>
        <ul className="divide-y divide-gray-200">
          <li className="py-2 flex justify-between">
            <span>Acme Corp</span>
            <span className="text-sm text-gray-500">1 hour ago</span>
          </li>
          <li className="py-2 flex justify-between">
            <span>HealthPro Clinics</span>
            <span className="text-sm text-gray-500">Yesterday</span>
          </li>
          <li className="py-2 flex justify-between">
            <span>EduBright</span>
            <span className="text-sm text-gray-500">2 days ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SuperAdminHome;
