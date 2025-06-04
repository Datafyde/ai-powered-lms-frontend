import Sidebar from "@/components/dashboard/super-admin/Sidebar";
import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Super Admin Dashboard",
  description: "View platform insights, usage metrics, and recent activity.",
  keywords: ["dashboard", "overview", "super admin", "platform metrics"],
};

export default function SuperAdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto bg-gray-50">{children}</main>
    </div>
  );
}
