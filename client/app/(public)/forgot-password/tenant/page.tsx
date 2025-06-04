import ForgotPassword from "@/components/auth/forgot-password/ForgotPassword";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password | Datafied AI LMS",
  description:
    "Reset your password to regain access to your organization's LMS dashboard. Enter your email to receive a secure reset link.",
  keywords: [
    "forgot password",
    "reset password",
    "LMS login help",
    "Datafied AI LMS access",
    "password recovery",
    "secure login",
    "organization admin portal",
    "enterprise LMS support",
  ],
};

export default async function TenantForgotPasswordPage() {
  return <ForgotPassword />;
}
