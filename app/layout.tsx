import type { ReactNode } from "react";
import "../src/index.css";
import { Toaster } from "../src/components/ui/sonner";
import { Footer } from "../src/components/Footer";
import HeaderBridge from "./_components/HeaderBridge";
import FloatingDonateBridge from "./_components/FloatingDonateBridge";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen flex flex-col bg-background">
        <HeaderBridge />
        <main className="flex-1">{children}</main>
        <FloatingDonateBridge />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
