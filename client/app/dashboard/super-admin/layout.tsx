import Link from "next/link";
import { ReactNode } from "react";

export default function SuperAdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-lg font-bold mb-6">Super Admin</h2>
        <ul className="space-y-3">
          <li>
            <Link href="/dashboard/super-admin">Overview</Link>
          </li>
          <li>
            <Link href="/dashboard/super-admin/tenants">Tenants</Link>
          </li>
          <li>
            <Link href="/dashboard/super-admin/settings">Settings</Link>
          </li>
        </ul>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto bg-gray-50">{children}</main>
    </div>
  );
}
