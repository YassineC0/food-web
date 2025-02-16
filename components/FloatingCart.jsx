"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { useCart } from "../contexts/CartContext"
import { Button } from "@/components/ui/button"

export default function FloatingCart() {
  const { cartCount } = useCart()

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link href="/checkout">
        <Button className="rounded-full w-16 h-16 bg-black hover:bg-gray-800 text-white shadow-lg">
          <ShoppingCart className="h-6 w-6" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Button>
      </Link>
    </div>
  )
}

