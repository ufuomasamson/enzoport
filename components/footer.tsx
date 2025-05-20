"use client"

import Link from "next/link"
import { Github, Linkedin, Instagram, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    }),
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.footer
      className="bg-[#F7F8FA] dark:bg-[#0F172A]/50 py-8 mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div className="mb-4 md:mb-0" variants={itemVariants}>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="text-lg font-bold text-[#3B3B98] dark:text-white"
            >
              Samson U. Enzo
            </a>
            <p className="text-sm text-[#0F172A]/70 dark:text-white/70 mt-1">
              © {new Date().getFullYear()} Samson U. Enzo. All rights reserved.
            </p>
          </motion.div>

          <div className="flex space-x-4">
            <motion.div custom={0} variants={iconVariants} whileHover="hover">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0F172A]/70 hover:text-[#3B3B98] dark:text-white/70 dark:hover:text-[#F4B942] transition-colors duration-400 ease-in-out"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div custom={1} variants={iconVariants} whileHover="hover">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0F172A]/70 hover:text-[#3B3B98] dark:text-white/70 dark:hover:text-[#F4B942] transition-colors duration-400 ease-in-out"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div custom={2} variants={iconVariants} whileHover="hover">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0F172A]/70 hover:text-[#3B3B98] dark:text-white/70 dark:hover:text-[#F4B942] transition-colors duration-400 ease-in-out"
                aria-label="Twitter Profile"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div custom={3} variants={iconVariants} whileHover="hover">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0F172A]/70 hover:text-[#3B3B98] dark:text-white/70 dark:hover:text-[#F4B942] transition-colors duration-400 ease-in-out"
                aria-label="Instagram Profile"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
