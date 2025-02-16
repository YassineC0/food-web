"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Pizza } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Column - Who We Are */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-[#FF7F32] font-medium">WHO WE ARE</span>
            <h2 className="text-4xl font-bold leading-tight">
              Passionate About Catering,
              <br />
              Dedicated to Excellence
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
              pulvinar dapibus leo.
            </p>
            <Button className="bg-[#FF7F32] hover:bg-[#FF7F32]/90 text-white">Learn More</Button>
          </motion.div>

          {/* Center Column - Video/Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-lg overflow-hidden"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hCR5ukEq7j65h2o9uVn0UxHfrTYB4H.png"
              alt="Chef preparing food"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-[#FF7F32] rounded-full flex items-center justify-center text-white hover:bg-[#FF7F32]/90 transition-colors">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Right Column - Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Opening hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Mon - Wednes:</span>
                  <span>10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Thu - Sat:</span>
                  <span>10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sun:</span>
                  <span>10:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-[#FF7F32]/10">
                  <Pizza className="w-8 h-8 text-[#FF7F32]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Exceptional Quality</h4>
                  <p className="text-gray-600">Turpis lacus nisl nibh hendrerit cubilia leo fusce himenaeos ut</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

