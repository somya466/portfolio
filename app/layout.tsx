import type { Metadata } from "next";
import { Header, Footer } from "./components/shell";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Shristi Kumari | Technology, curiosity & possibility", template: "%s | Shristi Kumari" },
  description: "Meet Shristi Kumari, a technology enthusiast in Patna exploring Python, web development, and data science alongside her B.A. LL.B. studies.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header />{children}<Footer /></body></html>;
}
