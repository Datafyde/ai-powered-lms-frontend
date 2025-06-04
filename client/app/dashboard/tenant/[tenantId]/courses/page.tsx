import TenantCourses from "@/components/dashboard/super-admin/tenants/views/TenantCourses";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses | Admin Dashboard",
  description:
    "Manage and organize your training courses. Create, assign, and track course progress across your organization.",
  keywords: [
    "LMS courses",
    "training programs",
    "course management",
    "e-learning content",
    "Datafied AI courses",
    "assign training",
    "course catalog",
    "admin course dashboard",
    "employee training",
    "compliance courses",
  ],
};

export default function TenantCoursesPage() {
  return <TenantCourses />;
}
