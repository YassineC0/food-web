"use client"

import Image from "next/image"
import { motion } from 'framer-motion'

const categories = [
  {
    name: "Main Dish",
    image: "/maindish.jpg",
  },
  {
    name: "Appetizers",
    image: "/appetizers.jpg",
  },
  {
    name: "Drink Recipes",
    image: "/drinks.jpg",
  },
  {
    name: "Breakfast",
    image: "/breakfast.jpg",
  },
]

export default function FoodCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Popular Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="relative aspect-square rounded-full overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-4">
                <h3 className="text-white text-2xl font-bold text-center mb-2">{category.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

