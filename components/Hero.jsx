"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"

export default function Hero() {
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
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
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
    <div className="relative min-h-[100vh] flex items-center justify-center text-center">
      <div
        className="absolute inset-0 bg-black/50 z-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      />

      <motion.div
        ref={ref}
        className="relative z-20 container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.span variants={itemVariants} className="inline-block text-[#FF7F32] mb-4">
          WELCOME TO DELECTA
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 max-w-4xl mx-auto"
        >
          Creating Unforgettable Dining Experiences for Your Guests
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-gray-200 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-6 md:mb-8"
        >
          Ridiculus praesent sollicitudin congue donec fusce pede elit pulvinar ornare blandit fringilla. Ultrices
          primis quam imperdiet justo mi purus ultricies risus eget.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-6 text-lg">Order Now</Button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[url('/wave.svg')] bg-repeat-x bg-bottom z-30" />
    </div>
  )
}

