import type { Metadata } from "next";
import { Noto_Sans, Comfortaa, Quando } from "next/font/google";
import "./globals.css";
import { styles } from "@/styles/styles";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const quando = Quando({
  variable: "--font-quando",
  subsets: ["latin"],
  weight: ["400"],
});
const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
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
  icons: {
    icon: "/logo.png", //Path relative to /public
    shortcut: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${styles.pageMinSize}  ${notoSans.variable} ${quando.variable} ${comfortaa.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
