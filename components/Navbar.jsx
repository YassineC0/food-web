"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-2">
            <Image src="/placeholder.svg" alt="Logo" width={30} height={30} className="rounded-full" />
          </div>
          <span className="text-white text-xl font-bold">DELECTA</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-white hover:text-gray-200 transition-colors">
            Home
          </Link>
          <Link href="/menu" className="text-white hover:text-gray-200 transition-colors">
            Menu
          </Link>
          <Link href="/about" className="text-white hover:text-gray-200 transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-200 transition-colors">
            Contact Us
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="#" className="text-white hover:text-gray-200 transition-colors">
            <Facebook className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-white hover:text-gray-200 transition-colors">
            <Instagram className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-white hover:text-gray-200 transition-colors">
            <Twitter className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-white hover:text-gray-200 transition-colors">
            <Youtube className="w-5 h-5" />
          </Link>
          <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-6">Order Now</Button>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/" className="text-white hover:text-gray-200 transition-colors">
              Home
            </Link>
            <Link href="/menu" className="text-white hover:text-gray-200 transition-colors">
              Menu
            </Link>
            <Link href="/about" className="text-white hover:text-gray-200 transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-200 transition-colors">
              Contact Us
            </Link>
            <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-6 w-full">Order Now</Button>
          </div>
        </div>
      )}
    </div>
  )
}

