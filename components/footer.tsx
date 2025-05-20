"use client"

import Link from "next/link"
import { Github, Linkedin, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#F7F8FA] dark:bg-[#0F172A]/50 py-8 mt-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
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
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0F172A]/70 hover:text-[#3B3B98] dark:text-white/70 dark:hover:text-[#F4B942] transition-colors duration-400 ease-in-out"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0F172A]/70 hover:text-[#3B3B98] dark:text-white/70 dark:hover:text-[#F4B942] transition-colors duration-400 ease-in-out"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0F172A]/70 hover:text-[#3B3B98] dark:text-white/70 dark:hover:text-[#F4B942] transition-colors duration-400 ease-in-out"
              aria-label="Twitter Profile"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0F172A]/70 hover:text-[#3B3B98] dark:text-white/70 dark:hover:text-[#F4B942] transition-colors duration-400 ease-in-out"
              aria-label="Instagram Profile"
            >
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
