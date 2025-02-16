"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { useInView } from 'react-intersection-observer'

const videoSlides = [
  '/a.mp4',
  '/b.mp4',
  
  // Add more video paths as needed
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % videoSlides.length)
    }, 10000) // Change slide every 10 seconds

    return () => clearInterval(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="relative min-h-[100vh] flex items-center justify-center text-center overflow-hidden">
      {videoSlides.map((video, index) => (
        <video
          key={video}
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      <motion.div
        ref={ref}
        className="relative z-20 container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.span
          variants={itemVariants}
          className="inline-block text-[#FF7F32] mb-4"
        >
          WELCOME TO DELECTA
        </motion.span>
        
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl mx-auto"
        >
          Creating Unforgettable Dining Experiences for Your Guests
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          Ridiculus praesent sollicitudin congue donec fusce pede elit pulvinar ornare blandit
          fringilla. Ultrices primis quam imperdiet justo mi purus ultricies risus eget.
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <Button 
            className="bg-[#FF7F32] hover:bg-[#FF7F32]/90 text-white rounded-full px-8 py-6 text-lg"
          >
            Order Now
          </Button>
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[url('/wave.svg')] bg-repeat-x bg-bottom z-30" />
    </div>
  )
}