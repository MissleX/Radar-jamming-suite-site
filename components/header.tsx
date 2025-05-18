"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Shield, Github } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-emerald-500" />
          <span className="text-lg font-bold">RadarJam</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#how-it-works" className="text-sm font-medium hover:text-emerald-400 transition-colors">
            How It Works
          </Link>
          <Link href="#demos" className="text-sm font-medium hover:text-emerald-400 transition-colors">
            Demos
          </Link>
          <Link href="#docs" className="text-sm font-medium hover:text-emerald-400 transition-colors">
            Documentation
          </Link>
          <Link href="#legal" className="text-sm font-medium hover:text-emerald-400 transition-colors">
            Legal & Ethics
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-emerald-400 transition-colors">
            About
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Button className="bg-emerald-600 hover:bg-emerald-700">Download</Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col space-y-4 py-4 px-4">
            <Link href="#how-it-works" className="text-sm font-medium" onClick={toggleMenu}>
              How It Works
            </Link>
            <Link href="#demos" className="text-sm font-medium" onClick={toggleMenu}>
              Demos
            </Link>
            <Link href="#docs" className="text-sm font-medium" onClick={toggleMenu}>
              Documentation
            </Link>
            <Link href="#legal" className="text-sm font-medium" onClick={toggleMenu}>
              Legal & Ethics
            </Link>
            <Link href="#about" className="text-sm font-medium" onClick={toggleMenu}>
              About
            </Link>
            <div className="pt-2">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Download</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
