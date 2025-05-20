"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechGrowth Inc.",
    image: "/professional-woman-headshot.png",
    quote:
      "Samson transformed our outdated website into a conversion machine. His understanding of both design and user experience is exceptional. We've seen a 45% increase in leads since the launch.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Startup Founder",
    company: "InnovateLab",
    image: "/professional-man-headshot.png",
    quote:
      "Working with Samson was a game-changer for our startup. He built our entire platform using no-code tools, saving us thousands in development costs while delivering a product that looks and feels custom-built.",
  },
  {
    id: 3,
    name: "Jessica Williams",
    role: "E-commerce Manager",
    company: "StyleHouse",
    image: "/diverse-professional-woman-headshots.png",
    quote:
      "Samson's expertise in e-commerce design helped us increase our conversion rate by 32%. He understood our brand and created a shopping experience that our customers love. Highly recommended!",
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Real Estate Broker",
    company: "Prime Properties",
    image: "/diverse-professional-man-headshot.png",
    quote:
      "The property listing website Samson created for us has revolutionized our business. It's beautiful, functional, and our clients find it incredibly easy to use. He delivered beyond our expectations.",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative">
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <Card className="border border-border">
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-[#3B3B98]/20 dark:text-[#F4B942]/20 mb-4" />
                  <p className="text-lg italic text-[#0F172A]/80 dark:text-white/80 mb-6">
                    "{testimonials[current].quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonials[current].image || "/placeholder.svg"}
                        alt={testimonials[current].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F172A] dark:text-white">{testimonials[current].name}</h4>
                      <p className="text-[#0F172A]/70 dark:text-white/70">
                        {testimonials[current].role}, {testimonials[current].company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-400 ease-in-out ${
                  index === current ? "bg-[#3B3B98] dark:bg-[#F4B942] w-4" : "bg-[#3B3B98]/30 dark:bg-[#F4B942]/30"
                }`}
                onClick={() => {
                  setCurrent(index)
                  setAutoplay(false)
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            prev()
            setAutoplay(false)
          }}
          className="rounded-full border-[#3B3B98] text-[#3B3B98] hover:bg-[#3B3B98]/10 dark:border-[#F4B942] dark:text-[#F4B942] dark:hover:bg-[#F4B942]/10"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            next()
            setAutoplay(false)
          }}
          className="rounded-full border-[#3B3B98] text-[#3B3B98] hover:bg-[#3B3B98]/10 dark:border-[#F4B942] dark:text-[#F4B942] dark:hover:bg-[#F4B942]/10"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
