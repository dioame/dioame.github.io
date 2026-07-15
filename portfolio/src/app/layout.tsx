import type { Metadata, Viewport } from "next";
import { DM_Sans, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import ChatBot from "@/components/chatbot/ChatBot";
import "./globals.css";
import { site } from "@/lib/content";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${site.fullName} — Full-stack developer · Portfolio`,
  description: site.description,
};

export const viewport: Viewport = {
  themeColor: "#061614",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-foreground">
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        {children}
        <ChatBot />
      </body>
    </html>
  );
}
