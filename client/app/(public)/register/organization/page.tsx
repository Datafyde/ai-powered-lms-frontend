import IRegister from "@/components/auth/register/IRegister";
import OrRegister from "@/components/auth/register/OrRegister";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started for Organizations | Datafied AI LMS",
  description:
    "Datafied AI LMS for teams: Train employees, track compliance, and customize learning paths. Book a demo or start your free trial.",
  keywords: [
    "corporate LMS",
    "employee training platform",
    "Datafied AI for businesses",
    "SCORM compliant LMS",
    "HR training software",
  ],
};

export default async function OrganizationRegistrationPage() {
  return <OrRegister />;
}
