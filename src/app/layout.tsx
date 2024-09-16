'use client'
import localFont from "next/font/local";
import { Button } from "@/components/ui/button"
import { MenuIcon, XIcon, GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from 'lucide-react'
import Image from 'next/image';

import "./globals.css";
import { useState } from "react";
import Link from "next/link";

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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-100 antialiased`}
      >
        <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center bg-slate-100">
            <div className="flex items-center space-x-2">
              <Image src="/favicon.ico" alt="Favicon" width={32} height={32} />
              <h1 className="text-2xl font-bold font-mono">
                Praveen Kumar Gangapuram
              </h1>
            </div>
            <nav className="hidden md:flex space-x-4">
              <Link href="/" className="hover:text-primary transition-colors font-mono">Home</Link>
              <Link href="/education" className="hover:text-primary transition-colors font-mono">Education</Link>
              <Link href="/project" className="hover:text-primary transition-colors font-mono">Projects</Link>
              <Link href="/contact" className="hover:text-primary transition-colors font-mono">Contact</Link>
            </nav>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </Button>
          </div>
          {isMenuOpen && (
            <nav className="md:hidden bg-background/95 backdrop-blur-sm">
              <div className="container mx-auto px-4 py-2 flex flex-col space-y-2 bg-slate-100">
                <Link href="/" className="hover:text-primary transition-colors" onClick={toggleMenu}>Home</Link>
                <Link href="/education" className="hover:text-primary transition-colors" onClick={toggleMenu}>Education</Link>
                <Link href="/project" className="hover:text-primary transition-colors" onClick={toggleMenu}>Projects</Link>
                <Link href="/contact" className="hover:text-primary transition-colors" onClick={toggleMenu}>Contact</Link>
              </div>
            </nav>
          )}
        </header>
        {children}
        <footer className="bg-muted py-8">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center space-x-4 mb-4">
              <a href="https://github.com/praveen18071999" className="text-muted-foreground hover:text-primary transition-colors">
                <GithubIcon />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://x.com/praveen18071999" className="text-muted-foreground hover:text-primary transition-colors">
                <TwitterIcon />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://www.linkedin.com/in/praveen-gangapuram-956659191/" className="text-muted-foreground hover:text-primary transition-colors">
                <LinkedinIcon />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="pgangapu@buffalo.edu" className="text-muted-foreground hover:text-primary transition-colors">
                <MailIcon />
                <span className="sr-only">Email</span>
              </a>
            </div>
            <p className="text-muted-foreground">&copy; 2023 Jane Doe. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
