import OrLogin from "@/components/auth/login/OrLogin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organization Admin Portal | Datafied AI LMS",
  description:
    "Access your organization's LMS dashboard to manage training programs, users, and reports.",
  keywords: [
    "LMS admin login",
    "HR training portal",
    "Datafied AI enterprise login",
    "employee training dashboard",
    "corporate learning portal",
  ],
};

export default async function OrganizationLoginPage() {
  return <OrLogin />;
}
