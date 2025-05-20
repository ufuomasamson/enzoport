"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#3B3B98] blob-animation"
          initial={{ opacity: 0.05 }}
          animate={{ opacity: 0.05 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#F4B942] blob-animation"
          initial={{ opacity: 0.05 }}
          animate={{ opacity: 0.05 }}
          style={{ animationDelay: "-5s" }}
        />
      </div>

      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
        <div className="flex justify-center md:order-2">
          <div className="relative">
            <Image
              src="/samson-profile.png"
              alt="Samson U. Enzo smiling"
              width={400}
              height={400}
              className="rounded-full drop-shadow-lg object-cover"
              priority
            />
          </div>
        </div>

        <div className="text-center md:text-left md:order-1">
          <motion.h1
            className="text-4xl font-bold tracking-tight text-[#0F172A] dark:text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I&apos;m Samson U. Enzo
          </motion.h1>
          <motion.p
            className="mt-4 text-xl text-[#0F172A]/80 dark:text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Web Designer & No-Code Developer
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              className="bg-[#3B3B98] hover:bg-[#3B3B98]/90 text-white transition-all duration-400 ease-in-out"
              onClick={() => scrollToSection("projects")}
            >
              View Work
            </Button>
            <Button
              variant="outline"
              className="border-[#3B3B98] text-[#3B3B98] hover:bg-[#3B3B98]/10 dark:border-[#F4B942] dark:text-[#F4B942] dark:hover:bg-[#F4B942]/10 transition-all duration-400 ease-in-out"
              onClick={() => scrollToSection("contact")}
            >
              Hire Me
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
