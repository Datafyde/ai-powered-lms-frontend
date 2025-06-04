import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onboarding | Datafied AI Lms Platform",
  description:
    "Complete your onboarding to start using Datafied AI Lms's features.",
  keywords: [
    "onboarding",
    "Datafied AI Lms",
    "tenant registration",
    "LMS setup",
  ],
};

export default function TenantOnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-6">
      <div className="max-w-4xl mx-auto">
        {/* Shared header/logo can go here */}
        <header className="mb-6 text-center">
          <h1 className="text-2xl font-semibold">
            Welcome to Datafied AI Lms Platform Onboarding
          </h1>
          <p className="text-gray-600 text-sm">
            Just a few steps to get started...
          </p>
        </header>

        {children}
      </div>
    </main>
  );
}
