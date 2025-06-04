"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const TenantSidebar = () => {
  const pathname = usePathname();

  // Extract tenantId from path like: /dashboard/tenant/abc123/...
  const pathParts = pathname.split("/");
  const tenantId = pathParts[3]; // index 0 is '', 1 = dashboard, 2 = tenant, 3 = tenantId

  const base = `/dashboard/tenant/${tenantId}`;

  const links = [
    { label: "Overview", href: `${base}` },
    { label: "Courses", href: `${base}/courses` },
    { label: "Instructors", href: `${base}/instructors` },
    { label: "Learners", href: `${base}/learners` },
    { label: "Analytics", href: `${base}/analytics` },
    { label: "Settings", href: `${base}/settings` },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white p-4">
      <h2 className="text-lg font-bold mb-6">Datafied Learning Institute</h2>
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

export default TenantSidebar;
