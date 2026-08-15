import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),

  title: {
    default: "Islam Sherif | Frontend Developer & AI Enthusiast",
    template: "%s | Islam Sherif",
  },

  description:
    "Islam Sherif — Frontend Developer & AI Enthusiast building modern web experiences, applications, automation tools and intelligent solutions.",

  keywords: [
    "Islam Sherif",
    "Frontend Developer",
    "React Developer",
    "JavaScript Developer",
    "Next.js Developer",
    "AI Enthusiast",
    "Web Developer",
    "Egypt Developer",
    "React",
    "Next.js",
    "JavaScript",
    "Python",
  ],

  authors: [
    {
      name: "Islam Sherif",
      url: DATA.url,
    },
  ],

  creator: "Islam Sherif",

  openGraph: {
    title: "Islam Sherif | Frontend Developer & AI Enthusiast",
    description:
      "Frontend Developer & AI Enthusiast building modern web experiences and intelligent solutions.",
    url: DATA.url,
    siteName: "Islam Sherif Portfolio",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  twitter: {
    card: "summary_large_image",
    title: "Islam Sherif | Frontend Developer & AI Enthusiast",
    description:
      "Frontend Developer & AI Enthusiast building modern web experiences and intelligent solutions.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          geist.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <TooltipProvider delayDuration={0}>

            <div className="absolute inset-0 top-0 left-0 right-0 h-[120px] overflow-hidden z-0 pointer-events-none">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={2}
                gridGap={2}
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black, transparent)",
                }}
              />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
              {children}
            </div>

            <Navbar />

          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
                                   }
