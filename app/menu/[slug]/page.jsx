"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, RefreshCw } from "lucide-react"

export default function ProductDetail({ params }) {
  const [quantity, setQuantity] = useState(1)

  // This would normally come from an API or database
  const product = {
    name: "Beef Burger",
    category: "Creamy, Burger",
    price: 5.0,
    originalPrice: 8.0,
    discount: 16,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LNszGJrwsPkg1Oag3dTUSY8hRbtql0.png",
    description:
      "The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games. non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock flounder",
    sku: "BE45VGRT",
    reviews: 7,
    rating: 4.5,
    inStock: true,
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative">
          {product.discount && (
            <div className="absolute top-4 left-4 bg-red-500 text-white rounded-full w-16 h-16 flex items-center justify-center">
              <span className="text-sm font-bold">-{product.discount}%</span>
            </div>
          )}
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={600}
            height={600}
            className="w-full rounded-lg"
          />
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-gray-600 mb-2">{product.category}</p>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              {product.originalPrice && (
                <span className="text-gray-500 line-through text-xl">${product.originalPrice.toFixed(2)}</span>
              )}
              <span className="text-red-500 text-3xl font-bold">${product.price.toFixed(2)}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {"★".repeat(Math.floor(product.rating))}
                {"☆".repeat(5 - Math.floor(product.rating))}
              </div>
              <span className="text-gray-600">({product.reviews} Review)</span>
            </div>
          </div>

          {product.inStock ? (
            <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded">In Stock</div>
          ) : (
            <div className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded">Out of Stock</div>
          )}

          <p className="text-gray-700">{product.description}</p>

          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded">
              <button
                className="px-4 py-2 border-r hover:bg-gray-100"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                className="w-16 text-center p-2"
              />
              <button className="px-4 py-2 border-l hover:bg-gray-100" onClick={() => setQuantity(quantity + 1)}>
                +
              </button>
            </div>
            <Button className="bg-red-500 hover:bg-red-600 text-white px-8">Add To Cart</Button>
            <Button variant="outline" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <RefreshCw className="h-5 w-5" />
            </Button>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>2-day Delivery</span>
              <span className="text-gray-500">— Speedy and reliable parcel delivery!</span>
            </div>
          </div>

          <div className="border-t pt-4">
            <p className="text-gray-600">SKU: {product.sku}</p>
            <p className="text-gray-600">
              Category: <span className="text-black">Computer, Speaker, Headphone</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

