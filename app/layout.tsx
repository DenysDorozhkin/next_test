import type { Metadata } from "next";
import { Inter } from "next/font/google";

import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";
import "./styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next App: Home",
  description: "Something...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TheHeader />
        <main className="container">{children}</main>
        <TheFooter />
      </body>
    </html>
  );
}
