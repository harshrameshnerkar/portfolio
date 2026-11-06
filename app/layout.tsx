import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#080808",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://harshrameshnerkar.vercel.app"),
  title: "Harsh Nerkar — AI / ML & Autonomous Systems Engineer",
  description: "Portfolio of Harsh Ramesh Nerkar, AI / ML Engineer building intelligent, human-centered systems — from autonomous multi-agent systems and enterprise RAG to real-time computer vision.",
  keywords: [
    "Harsh Nerkar",
    "Harsh Ramesh Nerkar",
    "AI Engineer",
    "Machine Learning Engineer",
    "Autonomous Agents",
    "Computer Vision",
    "Nagpur",
    "India"
  ],
  authors: [{ name: "Harsh Ramesh Nerkar", url: "https://harshrameshnerkar.vercel.app" }],
  creator: "Harsh Ramesh Nerkar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harshrameshnerkar.vercel.app",
    title: "Harsh Nerkar — AI / ML & Autonomous Systems Engineer",
    description: "Portfolio of Harsh Ramesh Nerkar, AI / ML Engineer building intelligent, human-centered systems.",
    siteName: "Harsh Ramesh Nerkar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Nerkar — AI / ML & Autonomous Systems Engineer",
    description: "Portfolio of Harsh Ramesh Nerkar, AI / ML Engineer building intelligent systems.",
  },
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
