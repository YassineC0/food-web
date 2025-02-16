"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="container mx-auto bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-[#FF7F32] transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-[#FF7F32] transition-colors">
            About Us
          </Link>
          <div className="relative group">
            <Link href="/services" className="text-white hover:text-[#FF7F32] transition-colors">
              Services
            </Link>
          </div>
          <Link href="/contact" className="text-white hover:text-[#FF7F32] transition-colors">
            Contact Us
          </Link>
          <div className="relative group">
            <Link href="/pages" className="text-white hover:text-[#FF7F32] transition-colors">
              Pages
            </Link>
          </div>
        </div>

        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
            <Image src="/placeholder.svg" alt="Logo" width={60} height={60} className="rounded-full" />
          </div>
        </Link>

        <div className="flex items-center space-x-4">
          <Link href="#" className="text-white hover:text-[#FF7F32] transition-colors">
            <Facebook className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-white hover:text-[#FF7F32] transition-colors">
            <Instagram className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-white hover:text-[#FF7F32] transition-colors">
            <Twitter className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-white hover:text-[#FF7F32] transition-colors">
            <Youtube className="w-5 h-5" />
          </Link>
          <Button className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white rounded-full px-6">Order Now</Button>
        </div>
      </nav>
    </div>
  )
}

