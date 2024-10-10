import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Header/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Montserrat, Poppins } from "next/font/google";

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
const montsrrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montsrrat",
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Personal Protfolio",
  description: "Protfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[000000]">
      <body
        className={`${montsrrat.variable} ${poppins.variable} antialiased bg-[#1E1E1E] text-white`}
      >
        <div>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
