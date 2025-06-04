import TenantLearners from "@/components/dashboard/super-admin/tenants/views/TenantLearners";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learners | Admin Dashboard",
  description:
    "View and manage all learners in your organization. Track progress, assign courses, and monitor training completion.",
  keywords: [
    "LMS learners",
    "manage trainees",
    "organization learners",
    "training progress",
    "Datafied AI students",
    "learner dashboard",
    "employee training",
    "course completion",
    "admin learner management",
  ],
};

export default function TenantLearnersPage() {
  return <TenantLearners />;
}
