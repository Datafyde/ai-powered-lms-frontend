// app/onboarding/page.tsx
"use client";

import { useRouter } from "next/navigation";

export default function OnboardingLanding() {
  const router = useRouter();

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-center">
        Choose Onboarding Type
      </h2>
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => router.push("/onboarding/individual")}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Individual
        </button>
        <button
          onClick={() => router.push("/onboarding/organization")}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Organization
        </button>
      </div>
    </div>
  );
}
