import SuperAdminSettings from "@/components/dashboard/super-admin/views/SuperAdminSettings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings | Super Admin Dashboard",
  description: "Manage your account and notification preferences",
  keywords: ["settings", "super admin", "preferences"],
};

export default function SuperAdminSettingsPage() {
  return <SuperAdminSettings />;
}
