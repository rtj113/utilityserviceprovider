"use client";
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import CallToAction from "./components/cta"
import 'tailwindcss/tailwind.css'
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {

  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className="bg-white">
        <Navbar />
        { children }
        <CallToAction />
        <Footer />
      </body>
    </html>
  )
}
