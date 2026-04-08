import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/ui/LenisProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mayank — Developer",
  description:
    "Full-stack developer building real-world products. Currently working on KaamSetu — a hyperlocal job marketplace for India's informal workers.",
  keywords: [
    "Mayank Sangwan",
    "developer",
    "full-stack",
    "React",
    "Node.js",
    "portfolio",
  ],
  authors: [{ name: "Mayank Sangwan" }],
  openGraph: {
    title: "Mayank — Developer",
    description: "Full-stack developer building real-world products.",
    url: "https://mayank.tech",
    siteName: "Mayank",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayank — Developer",
    description: "Full-stack developer building real-world products.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="bg-bg-primary text-text-primary antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}