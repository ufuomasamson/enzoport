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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.98, transition: { duration: 0.1 } },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  }

  const blobVariants = {
    animate: {
      scale: [1, 1.05, 1],
      rotate: [0, 5, 0],
      transition: {
        duration: 15,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#3B3B98] opacity-5"
          variants={blobVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#F4B942] opacity-5"
          variants={blobVariants}
          animate="animate"
          style={{ animationDelay: "-5s" }}
        />
      </div>

      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
        <motion.div
          className="flex justify-center md:order-2"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="relative" variants={imageVariants} animate={["visible", "float"]}>
            <Image
              src="/samson-profile.png"
              alt="Samson U. Enzo smiling"
              width={400}
              height={400}
              className="rounded-full drop-shadow-lg object-cover"
              priority
            />
            <motion.div
              className="absolute -bottom-2 -right-2 bg-[#F4B942] w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 200 }}
            >
              10+
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center md:text-left md:order-1"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl font-bold tracking-tight text-[#0F172A] dark:text-white sm:text-5xl lg:text-6xl"
            variants={itemVariants}
          >
            Hi, I&apos;m Samson U. Enzo
          </motion.h1>
          <motion.p className="mt-4 text-xl text-[#0F172A]/80 dark:text-white/80" variants={itemVariants}>
            Web Designer & No-Code Developer
          </motion.p>
          <motion.div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start" variants={itemVariants}>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button
                className="bg-[#3B3B98] hover:bg-[#3B3B98]/90 text-white transition-all duration-400 ease-in-out"
                onClick={() => scrollToSection("projects")}
              >
                View Work
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button
                variant="outline"
                className="border-[#3B3B98] text-[#3B3B98] hover:bg-[#3B3B98]/10 dark:border-[#F4B942] dark:text-[#F4B942] dark:hover:bg-[#F4B942]/10 transition-all duration-400 ease-in-out"
                onClick={() => scrollToSection("contact")}
              >
                Hire Me
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
