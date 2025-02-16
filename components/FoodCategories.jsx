"use client"

"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

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
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="relative aspect-square rounded-full overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-2 md:p-4">
                <h3 className="text-white text-lg md:text-2xl font-bold text-center mb-1 md:mb-2">{category.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

