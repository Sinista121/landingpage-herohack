import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import NextLink from "next/link";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Overlay from "@/components/overlay";
import { LuBox } from "react-icons/lu";
import Seperator from "@/components/seperator";
import { FaFacebook, FaGithub, FaInstagram, FaSnapchat } from "react-icons/fa";

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
          <div className="relative h-full">
            <Overlay />
            <Navbar />
            <main className="relative z-10 flex flex-col container mx-auto w-full h-full">
              {children}
            </main>
            <footer className="hidden lg:flex flex-col gap-10 relative z-50 w-full py-20 px-40 border-t border-scrollColor bg-background/50 text-foreground">
              <div className="grid grid-cols-2 mb-10">
                <div className="gap-3 max-w-fit">
                  <NextLink
                    className="flex justify-start items-center gap-1"
                    href="/"
                  >
                    <LuBox className="text-xl" />
                    <p className="font-bold text-inherit">COM.</p>
                  </NextLink>
                </div>
                <div className="grid grid-cols-3">
                  <ul>
                    <li className="text-lg text-foreground/50 mb-2 font-semibold">
                      Product
                    </li>
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li>
                      <a href="/pricing">Pricing</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                  <ul>
                    <li className="text-lg text-foreground/50 mb-2 font-semibold">
                      Company
                    </li>
                    <li>Support</li>
                    <li>Blog</li>
                  </ul>
                  <ul>
                    <li className="text-lg text-foreground/50 mb-2 font-semibold">
                      Legal
                    </li>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Cookies</li>
                  </ul>
                </div>
              </div>
              <Seperator />
              <div className="flex items-center justify-between w-full mb-10">
                <h1 className="text-foreground/30">© 2025 Company.</h1>
                <div className="flex gap-3 text-2xl">
                  <FaFacebook />
                  <FaGithub />
                  <FaInstagram />
                  <FaSnapchat />
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
