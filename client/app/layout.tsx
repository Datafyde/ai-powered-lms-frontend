import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Datafied AI Powered LMS | Online Learning for Teams & Individuals",
  description:
    "Datafied AI Powered LMS is a powerful LMS SaaS platform for organizations and individuals to create, manage, and track learning experiences.",
  keywords: [
    "LMS",
    "online learning",
    "SaaS learning platform",
    "course management",
    "team training",
    "e-learning",
    "learning management system",
    "education platform",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
