import ForgotPassword from "@/components/auth/forgot-password/ForgotPassword";
import ResetPassword from "@/components/auth/reset-password/ResetPassword";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password | Datafied AI LMS",
  description:
    "Create a new secure password for your Datafied AI LMS account. Enter your new password to regain access to your organization's learning management system.",
  keywords: [
    "password reset",
    "new password setup",
    "LMS account recovery",
    "Datafied AI password change",
    "secure password reset",
    "organization LMS access",
    "admin password recovery",
    "enterprise learning portal",
    "account security",
  ],
};

export default async function TenantResetPasswordPage() {
  return <ResetPassword />;
}
