import OrOnboarding from "@/components/onboarding/organization/OrOnboarding";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organization Onboarding | Datafied",
  description: "Set up your organization's LMS workspace on Datafied.",
};

export default async function OrganizationOnboarding() {
  return <OrOnboarding />;
}
