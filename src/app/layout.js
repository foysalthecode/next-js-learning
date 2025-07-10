import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NextAuthSessionProvider from "@/Providers/NextAuthSessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "NEXT JS",
    template: "%s | NEXT JS",
  },
  keywords: ["Next.js", "React", "JavaScript", "learning", "playground"],
  description: "Learning next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextAuthSessionProvider>
        <body className={`${poppins.className} antialiased`}>
          <Navbar></Navbar>
          {children}
        </body>
      </NextAuthSessionProvider>
    </html>
  );
}
