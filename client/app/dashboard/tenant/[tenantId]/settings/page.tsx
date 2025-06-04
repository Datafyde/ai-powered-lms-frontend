import TenantSettings from "@/components/dashboard/super-admin/tenants/views/TenantSettings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings | Admin Dashboard",
  description: "Manage your account and notification preferences",
  keywords: ["settings", "super admin", "preferences"],
};

export default function TenantSettingsPage() {
  return <TenantSettings />;
}
