import TenantAnalytics from "@/components/dashboard/super-admin/tenants/views/TenantAnalytics";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics Dashboard | Datafied AI LMS",
  description:
    "Track training performance, learner progress, and course effectiveness with real-time analytics and AI-powered insights.",
  keywords: [
    "LMS analytics",
    "training metrics",
    "learner progress tracking",
    "course performance",
    "Datafied AI insights",
    "training ROI",
    "completion rates",
    "skill gap analysis",
    "corporate training analytics",
    "AI learning analytics",
  ],
};

export default function TenantAnalyticsPage() {
  return <TenantAnalytics />;
}
