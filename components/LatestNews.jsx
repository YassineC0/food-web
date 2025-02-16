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
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Latest Foods News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={400}
                height={300}
                className="w-full object-cover h-40 md:h-48"
              />
              <div className="p-4 md:p-6">
                <p className="text-gray-600 text-sm mb-2">{item.date}</p>
                <h3 className="font-semibold text-lg md:text-xl mb-3 md:mb-4">{item.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg md:text-xl font-bold">${item.price.toFixed(2)}</span>
                  <Button variant="outline" className="rounded-full text-sm md:text-base">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF7F32]"></span>
          <span className="w-2 h-2 rounded-full bg-gray-200"></span>
          <span className="w-2 h-2 rounded-full bg-gray-200"></span>
          <span className="w-2 h-2 rounded-full bg-gray-200"></span>
        </div>
      </div>
    </section>
  )
}