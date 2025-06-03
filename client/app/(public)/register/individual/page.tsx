import IRegister from "@/components/auth/register/IRegister";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up as a Learner | Datafied AI LMS",
  description:
    "Start learning with Datafied AI LMS. Access personalized courses, track progress, and earn certificates. Free trial available.",
  keywords: [
    "free LMS for individuals",
    "online learning platform",
    "Datafied AI LMS signup",
    "self-paced courses",
    "certification courses",
  ],
};

export default async function IndividualRegistrationPage() {
  return <IRegister />;
}
