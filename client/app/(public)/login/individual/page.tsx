import ILogin from "@/components/auth/login/ILogin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log In to Your Learner Account | Datafied AI LMS",
  description:
    "Access your personalized learning dashboard. Continue your courses, view progress, and connect with instructors.",
  keywords: [
    "LMS login for students",
    "Datafied AI sign in",
    "learner portal",
    "online course login",
    "resume learning",
  ],
};

export default async function IndividualLoginPage() {
  return <ILogin />;
}
