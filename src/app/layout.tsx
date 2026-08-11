import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import { siteConfig } from "@/data/content";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "The Founders Experience | A Community for Startup Founders",
    template: "%s | The Founders Experience",
  },
  description:
    "A community where founders and startup leaders connect, share real experiences, learn from one another, and build stronger companies together.",
  openGraph: {
    title: "The Founders Experience | A Community for Startup Founders",
    description:
      "A community where founders and startup leaders connect, share real experiences, learn from one another, and build stronger companies together.",
    url: siteConfig.url,
    siteName: "The Founders Experience",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Founders Experience | A Community for Startup Founders",
    description:
      "A community where founders and startup leaders connect, share real experiences, learn from one another, and build stronger companies together.",
  },
  keywords: [
    "founder community",
    "startup founders",
    "startup events",
    "founder network",
    "startup operators",
    "brand partnerships",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
