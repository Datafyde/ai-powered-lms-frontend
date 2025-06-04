import Login from "@/components/auth/login/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tenant Admin Login | Datafied AI LMS",
  description:
    "Log in to the Datafied AI LMS admin portal to manage courses, monitor team progress, and streamline organizational learning.",
  keywords: [
    "LMS admin login",
    "Datafied AI LMS login",
    "organization training portal",
    "corporate learning dashboard",
    "employee training management",
    "enterprise LMS access",
    "admin training platform",
  ],
};

export default async function TenantLoginPage() {
  return <Login />;
}
