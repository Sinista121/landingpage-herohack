import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { semanticColors } from "@heroui/theme";
import { useTheme } from "next-themes";
import Overlay from "@/components/overlay";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-full">
            <Overlay />
            <Navbar />
            <main className="flex flex-col container mx-auto w-full h-full">
              {children}
            </main>
            <footer className="relative z-50 w-full flex items-center justify-center mt-20 py-3 border-t border-gray-600 bg-background/50 text-foreground">
              <h1>Links</h1>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
