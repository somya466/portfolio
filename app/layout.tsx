import type { Metadata } from "next";
import { Header, Footer } from "./components/shell";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Shristi Kumari | Law, code & curiosity", template: "%s | Shristi Kumari" },
  description: "Meet Shristi Kumari, a first-year B.A. LL.B. student in Patna exploring the intersection of law, technology, and data science.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header />{children}<Footer /></body></html>;
}
