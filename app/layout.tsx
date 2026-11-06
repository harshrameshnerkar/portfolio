import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#080808",
};

export const metadata: Metadata = {
  title: "Harsh Nerkar — AI / ML Engineer",
  description: "Portfolio of Harsh Ramesh Nerkar, AI / ML Engineer building intelligent, human-centered systems — from machine learning models and multi-agent AI to real-time computer vision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#080808] text-[#f8fafc] antialiased selection:bg-accent selection:text-black">
        {children}
      </body>
    </html>
  );
}
