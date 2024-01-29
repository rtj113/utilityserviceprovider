"use client";
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import CallToAction from "./components/cta"
import 'tailwindcss/tailwind.css'
import "./globals.css";

export default function Layout({ children }) {

  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        { children }
      <CallToAction />
        <Footer />
      </body>
    </html>
  )
}
