import type { Metadata, Viewport } from "next";
import { Arimo, Geist_Mono, Montserrat, Open_Sans } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import { siteConfig } from "@/data/content";
import { themeColors, themeInitScript } from "@/lib/theme";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Founders Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Founders Experience | A Community for Startup Founders",
    description:
      "A community where founders and startup leaders connect, share real experiences, learn from one another, and build stronger companies together.",
    images: ["/og-image.png"],
  },
  keywords: [
    "founder community",
    "startup founders",
    "startup events",
    "startup operators",
    "brand partnerships",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg?v=8", type: "image/svg+xml" },
      { url: "/favicon.ico?v=8", sizes: "any" },
      { url: "/favicon-16x16.png?v=8", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png?v=8", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.svg?v=8",
    apple: [{ url: "/apple-touch-icon.png?v=8", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  applicationName: "The Founders Experience",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: themeColors.light },
    { media: "(prefers-color-scheme: dark)", color: themeColors.dark },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${arimo.variable} ${openSans.variable} ${geistMono.variable} h-full`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script
          id="tfe-theme-init"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
