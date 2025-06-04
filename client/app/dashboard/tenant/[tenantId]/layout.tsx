import Sidebar from "@/components/dashboard/super-admin/Sidebar";
import { ReactNode } from "react";
import { Metadata } from "next";
import TenantSidebar from "@/components/dashboard/super-admin/tenants/TenantSidebar";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "View platform insights, usage metrics, and recent activity.",
  keywords: ["dashboard", "overview", "super admin", "platform metrics"],
};

export default function TenantAdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <TenantSidebar />
      <main className="flex-1 p-6 overflow-y-auto bg-gray-50">{children}</main>
    </div>
  );
}
