import Link from "next/link";
import React from "react";

type Props = {
  setView: (value: "overview" | "tenants" | "settings") => void;
  view: "overview" | "tenants" | "settings";
};

const Sidebar = ({ setView, view }: Props) => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-6 space-y-4">
      <h2 className="text-2xl font-bold mb-6">SaaS Admin</h2>
      <ul className="space-y-2">
        <li>
          <button
            onClick={() => setView("overview")}
            className={view === "overview" ? "font-bold text-blue-600" : ""}
          >
            Dashboard
          </button>
        </li>
        <li>
          <button
            onClick={() => setView("tenants")}
            className={view === "tenants" ? "font-bold text-blue-600" : ""}
          >
            Tenants
          </button>
        </li>
        <li>
          <button
            onClick={() => setView("settings")}
            className={view === "settings" ? "font-bold text-blue-600" : ""}
          >
            Settings
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
