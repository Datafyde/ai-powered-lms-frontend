import SuperAdminHome from "@/components/dashboard/super-admin/views/SuperAdminHome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Super Admin Dashboard",
  description: "View platform insights, usage metrics, and recent activity.",
  keywords: ["dashboard", "overview", "super admin", "platform metrics"],
};

export default function SuperAdminHomePage() {
  return <SuperAdminHome />;
}
