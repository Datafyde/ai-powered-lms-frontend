"use client";
import React from "react";

const mockTenants = [
  { id: "uhqy92292828", name: "Tenant A" },
  { id: "hds8723872", name: "Tenant B" },
];

export default function TenantsList() {
  const openTenantInNewTab = (tenant: { id: string; name: string }) => {
    const query = new URLSearchParams({
      name: tenant.name,
      id: tenant.id,
    }).toString();

    window.open(`/tenants/${tenant.id}?name=${tenant.name}`, "_blank");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Tenants</h2>
      <ul>
        {mockTenants.map((tenant) => (
          <li key={tenant.id} className="mb-2">
            <button
              onClick={() => openTenantInNewTab(tenant)}
              className="text-blue-600 hover:underline"
            >
              {tenant.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
