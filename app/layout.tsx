import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bot System Dashboard",
  description: "Next.js Dashboard built with TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} transition-colors duration-300 bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen">
            {/* Sidebar ثابتة */}
            <Sidebar />

            {/* Main content */}
            <div className="flex-1 flex flex-col">
              <main className="flex-1">{children}</main>

              {/* Footer */}
              <footer className="text-xs text-muted-foreground border-t border-border py-4 text-center bg-card transition-colors">
                © 2025{" "}
                <span className="font-medium text-foreground">Bot System</span>. All rights reserved.{" "}
                <span className="text-gray-400">Version 2.1.0</span> ·{" "}
                <span className="text-green-500 font-medium">
                  All systems operational ✅
                </span>
              </footer>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
