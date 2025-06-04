"use client";

import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type Props = {};

const RegistrationSuccess = (props: Props) => {
  const router = useRouter();

  // Auto-redirect after 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/onboarding/tenant"); // Update to your actual onboarding route
    }, 3000);
    return () => clearTimeout(timeout);
  }, [router]);
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md max-w-md text-center">
        <CheckCircle className="mx-auto text-green-500 w-16 h-16 mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Welcome to Datafied AI LMS 🎓
        </h1>
        <p className="text-gray-600 mb-4">
          Your AI-powered learning platform is ready.
        </p>
        <p className="text-gray-500 mb-6">
          Redirecting you to onboarding to set up your workspace...
        </p>
        <button
          onClick={() => router.push("/onboarding")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg text-sm transition"
        >
          Start Onboarding Now
        </button>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
