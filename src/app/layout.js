import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Header/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Personal Protfolio",
  description: "Protfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[000000]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1E1E1E] text-white`}
      >
        <div className="max-w-[1420px] mx-auto">
          <Navbar></Navbar>
          {children}
          {/* <Footer></Footer> */}
          </div>
      </body>
    </html>
  );
}
