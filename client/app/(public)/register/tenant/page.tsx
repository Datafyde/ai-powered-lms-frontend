import Register from "@/components/auth/register/Register";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register Your Organization | Datafied AI LMS",
  description:
    "Sign up your organization on Datafied AI LMS — the smart learning platform for teams. Streamline employee training, compliance tracking, and personalized learning paths.",
  keywords: [
    "LMS for organizations",
    "corporate training software",
    "employee learning management",
    "Datafied AI LMS",
    "HR compliance training",
    "team onboarding LMS",
    "enterprise e-learning",
    "AI-powered LMS platform",
  ],
};

export default async function TenantRegistrationPage() {
  return <Register />;
}
