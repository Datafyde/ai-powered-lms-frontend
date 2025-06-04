import RegistrationSuccess from "@/components/auth/registration-success/RegistrationSuccess";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registration Successful | Datafied AI LMS",
  description:
    "Your organization has been successfully registered with Datafied AI LMS. Check your email to verify your account and begin setting up your enterprise learning platform.",
  keywords: [
    "LMS registration complete",
    "organization signup success",
    "corporate LMS onboarding",
    "Datafied AI setup",
    "enterprise learning portal",
    "team training platform",
    "account verification",
    "LMS welcome",
    "HR training system ready",
    "AI-powered learning setup",
  ],
};

export default async function TenantRegistrationSuccessPage() {
  return <RegistrationSuccess />;
}
