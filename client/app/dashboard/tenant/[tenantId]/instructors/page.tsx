import TenantInstructors from "@/components/dashboard/super-admin/tenants/views/TenantInstructors";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instructors | Admin Dashboard",
  description:
    "View and manage all instructors in your organization. Assign courses, track engagement, and oversee training activities.",
  keywords: [
    "LMS instructors",
    "manage trainers",
    "organization instructors",
    "course assignments",
    "Datafied AI educators",
    "training team management",
    "instructor list",
    "admin instructor dashboard",
  ],
};
export default function TenantInstructorsPage() {
  return <TenantInstructors />;
}
