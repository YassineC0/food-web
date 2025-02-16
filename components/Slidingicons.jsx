"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { ClipboardList, UtensilsCrossed, Dumbbell, Wine, Users } from "lucide-react"

const icons = [
  { icon: ClipboardList, label: "Menu" },
  { icon: UtensilsCrossed, label: "Catering" },
  { icon: Dumbbell, label: "Healthy" },
  { icon: Wine, label: "Drinks" },
  { icon: Users, label: "Dining" },
]

export default function SlidingIcons() {
  const controls = useAnimation()

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        x: [-1000, 0],
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        },
      })
    }
    animate()
  }, [controls])

  return (
    <div className="py-12 bg-white overflow-hidden">
      <motion.div animate={controls} className="flex gap-24">
        {[...icons, ...icons].map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <item.icon className="w-16 h-16 text-[#FF7F32]" />
            <span className="text-gray-600 font-medium">{item.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

