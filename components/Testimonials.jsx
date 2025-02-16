"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Facebook, Twitter, Instagram, PinIcon as Pinterest, Dribbble } from "lucide-react"
import { useInView } from "react-intersection-observer"

const testimonials = [
  {
    id: 1,
    text: "Convallis donec volutpat semper eget conubia lobortis auctor odio facilisi fusce netus venenatis imperdiet sodales luctus pharetra sapien placerat justo neque laculis vestibulum penatibus urna",
    name: "Johny Rews",
    position: "CEO SABERNITE",
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    text: "Outstanding service and delicious food! The attention to detail and flavors are exceptional.",
    name: "Sarah Johnson",
    position: "Food Critic",
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    text: "A culinary experience that keeps me coming back. The menu variety is impressive!",
    name: "Michael Chen",
    position: "Regular Customer",
    avatar: "/placeholder.svg",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-8">
          <motion.div
            ref={ref}
            className="md:col-span-4"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
          >
            <motion.span variants={headerVariants} className="text-[#FF7F32] font-medium">
              TESTIMONIAL
            </motion.span>
            <motion.h2 variants={headerVariants} className="text-4xl font-bold mt-2 mb-8">
              Hear What Our Happy Clients Are Saying
            </motion.h2>
            <div className="flex gap-4">
              <Facebook className="w-6 h-6 text-[#FF7F32] cursor-pointer hover:text-[#FF7F32]/80" />
              <Twitter className="w-6 h-6 text-[#FF7F32] cursor-pointer hover:text-[#FF7F32]/80" />
              <Instagram className="w-6 h-6 text-[#FF7F32] cursor-pointer hover:text-[#FF7F32]/80" />
              <Pinterest className="w-6 h-6 text-[#FF7F32] cursor-pointer hover:text-[#FF7F32]/80" />
              <Dribbble className="w-6 h-6 text-[#FF7F32] cursor-pointer hover:text-[#FF7F32]/80" />
            </div>
          </motion.div>

          <div className="md:col-span-8 relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <p className="text-gray-600 text-lg mb-6">{testimonials[currentIndex].text}</p>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{testimonials[currentIndex].name}</h4>
                  <p className="text-[#FF7F32]">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-[#FF7F32]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

