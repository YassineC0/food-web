"use client"

"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Plus, Minus, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useCart } from "../contexts/CartContext"
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer"
const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "CHEESE, PIZZA",
    price: 12.00,
    image: "/pizza.jpg",
    slug: "margherita-pizza"
  },
  {
    id: 2,
    name: "Beef Burger",
    category: "CREAMY, BURGER",
    price: 5.00,
    originalPrice: 8.00,
    image: "/burger.jpg",
    sale: true,
    slug: "beef-burger"
  },
  {
    id: 3,
    name: "Grilled Flank Steak",
    category: "BEEF, STEAK",
    price: 14.00,
    image: "/steak.jpg",
    slug: "grilled-flank-steak"
  },
  {
    id: 4,
    name: "7ercha",
    category: "BBQ, MEAT",
    price: 8.00,
    image: "/hercha.jpg",
    slug: "barbecue-chicken"
  },
  {
    id: 5,
    name: "Melwi",
    category: "BBQ, MEAT",
    price: 8.00,
    image: "/melwi.jpg",
    slug: "barbecue-chicken"
  },
  {
    id: 6,
    name: "Eggs",
    category: "BBQ, MEAT",
    price: 8.00,
    image: "/eggs.jpg",
    slug: "barbecue-chicken"
  },
  {
    id: 7,
    name: "Selou",
    category: "BBQ, MEAT",
    price: 8.00,
    image: "/sellou.jpg",
    slug: "barbecue-chicken"
  },
  {
    id: 8,
    name: "Chebakia",
    category: "BBQ, MEAT",
    price: 8.00,
    image: "/chebakia.jpg",
    slug: "barbecue-chicken"
  },
  {
    id: 9,
    name: "L",
    category: "BBQ, MEAT",
    price: 8.00,
    image: "/chicken.jpg",
    slug: "barbecue-chicken"
  },
  {
    id: 10,
    name: "Barbecue Chicken",
    category: "BBQ, MEAT",
    price: 8.00,
    image: "/chicken1.jpg",
    slug: "barbecue-chicken"
  },
  {
    id: 11,
    name: "Barbecue Chicken",
    category: "BBQ, MEAT",
    price: 8.00,
    image: "/chicken2.jpg",
    slug: "barbecue-chicken"
  },
  {
    id: 12,
    name: "Barbecue Chicken",
    category: "BBQ, MEAT",
    price: 8.00,
    image: "/chicken.jpg",
    slug: "barbecue-chicken"
  },
  // Add more 
  //
]

export default function PopularMenu() {
  const { addToCart } = useCart()
  const [quantities, setQuantities] = useState(menuItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {}))
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const handleQuantityChange = (id, change) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] + change),
    }))
  }

  const handleAddToCart = (item) => {
    addToCart({ ...item, quantity: quantities[item.id] })
  }

  return (
    <section ref={ref} className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Popular Menu</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                width={300}
                height={200}
                className="w-full h-32 md:h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-sm md:text-xl">{item.name}</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm md:text-base">{item.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-4">{item.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg md:text-2xl font-bold text-black">${item.price.toFixed(2)}</span>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="rounded-full w-6 h-6 md:w-8 md:h-8"
                    >
                      <Minus className="h-3 w-3 md:h-4 md:w-4" />
                    </Button>
                    <span className="mx-1 md:mx-2 font-bold text-sm md:text-base">{quantities[item.id]}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="rounded-full w-6 h-6 md:w-8 md:h-8"
                    >
                      <Plus className="h-3 w-3 md:h-4 md:w-4" />
                    </Button>
                  </div>
                </div>
                <Button
                  className="w-full mt-2 md:mt-4 bg-black hover:bg-gray-800 text-white text-xs md:text-sm py-1 md:py-2"
                  onClick={() => handleAddToCart(item)}
                >
                  <ShoppingCart className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" /> Add to Cart
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}