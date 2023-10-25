import type { Metadata } from "next";

// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from "next/font/google";
import "../styles/globals.css";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Stackflow",
  description:
    "Stackflow is a stackoverflow clone using Next.js 13, Tailwind CSS",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          footerActionLink: "primary-text-gradient hover:text-primary-500",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.className} ${spaceGrotesk.className}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
