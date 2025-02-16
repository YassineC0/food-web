"use client"

import Image from "next/image"
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from "@/components/ui/button"

const newsItems = [
  {
    id: 1,
    title: "Burger with french fries and red cabbage salad",
    date: "Jan 15 2024",
    price: 35.00,
    image: "/popular1.jpg"
  },
  {
    id: 2,
    title: "Mexican tacos with beef in tomato sauce and salsa.",
    date: "Jan 15 2024",
    price: 25.00,
    image: "/popular2.jpg"
  },
  {
    id: 3,
    title: "Tortilla wrap with falafel and fresh salad. vegan tacos.",
    date: "Jan 15 2024",
    price: 25.00,
    image: "/popular3.jpg"
  }
]

export default function LatestNews() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-16 bg-[url('/food-pattern.jpg')] bg-fixed bg-cover">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-4">
            Our Latest Food News
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-200 max-w-2xl mx-auto">
            Discover our newest culinary creations and seasonal specials
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {newsItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={400}
                height={300}
                className="w-full object-cover h-48"
              />
              <div className="p-6">
                <p className="text-[#FF7F32] mb-2">{item.date}</p>
                <h3 className="font-semibold text-xl mb-4">{item.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">${item.price.toFixed(2)}</span>
                  <Button variant="outline" className="rounded-full hover:bg-[#FF7F32] hover:text-white transition-colors">
                    Read More
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}