"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, TextIcon as Telegram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Link href="/" className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="text-[#FF7F32]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c-4.4 0-8 3.6-8 8v10h16V10c0-4.4-3.6-8-8-8zm6 16H6v-8c0-3.3 2.7-6 6-6s6 2.7 6 6v8z" />
                <path d="M15 8c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zM9 8c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z" />
              </svg>
            </div>
            <span className="font-bold text-xl">FOOD</span>
          </Link>

          <nav className="flex gap-6 mb-4 md:mb-0">
            <Link href="/" className="hover:text-[#FF7F32] transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#FF7F32] transition-colors">
              About Us
            </Link>
            <Link href="/products" className="hover:text-[#FF7F32] transition-colors">
              Products
            </Link>
            <Link href="/quality" className="hover:text-[#FF7F32] transition-colors">
              Quality
            </Link>
          </nav>

          <div className="flex gap-4">
            <Link href="#" className="text-[#FF7F32] hover:text-[#FF7F32]/80 transition-colors">
              <Telegram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-[#FF7F32] hover:text-[#FF7F32]/80 transition-colors">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-[#FF7F32] hover:text-[#FF7F32]/80 transition-colors">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-[#FF7F32] hover:text-[#FF7F32]/80 transition-colors">
              <Facebook className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

