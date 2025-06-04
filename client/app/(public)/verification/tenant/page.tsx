import Verification from "@/components/auth/verification/Verification";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify Your OTP | Datafied AI LMS",
  description:
    "Enter the OTP sent to your email to verify your identity and complete your organization's registration on Datafied AI LMS.",
  keywords: [
    "OTP verification",
    "email verification",
    "secure registration",
    "Datafied AI LMS",
    "organization signup",
    "LMS verification",
    "secure login",
    "identity verification",
  ],
};

export default async function TenantVerificationPage() {
  return <Verification />;
}
