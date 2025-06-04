import TenantsList from "@/components/dashboard/super-admin/views/TenantsList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tenant Management | Super Admin Dashboard",
  description: "View, onboard, and manage all registered tenants.",
  keywords: ["tenants", "management", "super admin", "organizations", "users"],
};

export default function TenantsListPage() {
  return <TenantsList />;
}
