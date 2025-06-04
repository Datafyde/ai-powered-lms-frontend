"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    { label: "Overview", href: "/dashboard/super-admin" },
    { label: "Tenants", href: "/dashboard/super-admin/tenants" },
    { label: "Settings", href: "/dashboard/super-admin/settings" },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white p-4">
      <h2 className="text-lg font-bold mb-6">Super Admin</h2>
      <ul className="space-y-3">
        {links.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href === "/dashboard/super-admin" &&
              pathname === "/dashboard/super-admin");

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={clsx(
                  "block px-4 py-2 rounded transition",
                  isActive ? "bg-gray-800 text-blue-400" : "hover:bg-gray-700"
                )}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
