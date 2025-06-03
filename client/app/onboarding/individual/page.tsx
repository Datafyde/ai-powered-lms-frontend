import IOnboarding from "@/components/onboarding/individual/IOnboarding";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Individual Onboarding | Datafied",
  description: "Start your journey as an individual learner on Datafied.",
};

export default async function IndividualOnboardingPage() {
  return <IOnboarding />;
}
