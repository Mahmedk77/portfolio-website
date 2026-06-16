import type { Metadata } from "next";

import { Space_Grotesk } from "next/font/google";
import "../globals.css";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Topbar from "@/components/shared/Topbar";
import RightSidebar from "@/components/shared/RightSidebar";


const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Muhammad Ahmed — Portfolio",
  description: "Software Engineer from NUST Pakistan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased`}>
        <main className="flex flex-row h-screen">
          <LeftSidebar />
          <section className="flex min-h-screen flex-1 flex-col overflow-hidden">
            <Topbar />
            <div className="main-scroll-container px-4.5 sm:px-8 md:px-12 lg:px-16 py-10 lg:py-16 bg-[rgb(15,15,15)] w-full overflow-y-scroll max-h-screen no-scrollbar">
              {children}
            </div>
          </section>
          <RightSidebar />
        </main>
      </body>
    </html>
  );
}
