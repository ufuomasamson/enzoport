"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

// Sample project data
const projectsData = [
  {
    id: 1,
    title: "Secret Garden Real Estate",
    description: "Luxury real estate platform with property listings and interactive search functionality.",
    image: "/secret-garden-real-estate.webp",
    technologies: ["WordPress", "MLS API", "PHP"],
    demoUrl: "https://i.ibb.co/1f0H82Dn/Secret-Garden-Real-Estate-Website.webp",
  },
  {
    id: 2,
    title: "Euphoria Payment Platform",
    description: "Secure payment processing platform with user-friendly dashboard and analytics.",
    image: "/euphoria-payment-platform.webp",
    technologies: ["ReactJs", "NodeJs", "Stripe API"],
    demoUrl: "https://i.ibb.co/Rkb9gMtS/Euphoria-Payment-platform.webp",
  },
  {
    id: 3,
    title: "Construction Company Website",
    description: "Professional website for a construction firm showcasing services and completed projects.",
    image: "/construction-company.webp",
    technologies: ["WordPress", "Javascript", "Elementor"],
    demoUrl: "https://i.ibb.co/c4LKMDn/Construction-Company.webp",
  },
  {
    id: 4,
    title: "Personal Dashboard",
    description: "Comprehensive productivity dashboard for tracking tasks, meetings, and personal development.",
    image: "/management-dashboard.webp",
    technologies: ["ReactJs", "Chart.js", "Tailwind"],
    demoUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dashboard%20for%20a%20Management%20Product-Kc1a4rsEsTlEXh9yHhcXI0DBBD9jPN.webp",
  },
  {
    id: 5,
    title: "Call Monitoring System",
    description: "Real-time call center monitoring dashboard with agent tracking and performance analytics.",
    image: "/call-monitoring-dashboard.webp",
    technologies: ["ReactJs", "NodeJs", "Socket.io"],
    demoUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Call%20Monitoring%20Dashboard-GQSX2QcN0YphWLTV51IfZQkGJ9bQYg.webp",
  },
  {
    id: 6,
    title: "Fashion E-commerce Store",
    description: "Stylish e-commerce platform for fashion products with category navigation and featured collections.",
    image: "/fashion-ecommerce-website.jpeg",
    technologies: ["WordPress", "WooCommerce", "PHP"],
    demoUrl:
      "https://sjc.microlink.io/TCQoYL4UNgzp2EArYSMBUxmNPqzUOGteOL34HdBs7Vb5O_4zs_zxjE4eUk5D-e-y7XgFjlrfyNcYxCZZiA6mzQ.jpeg",
  },
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectsData.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: project.id * 0.1 }}
          viewport={{ once: true }}
          onMouseEnter={() => setHoveredId(project.id)}
          onMouseLeave={() => setHoveredId(null)}
          className="transition-all duration-400 ease-in-out"
          style={{
            transform: hoveredId === project.id ? "translateY(-6px)" : "translateY(0)",
          }}
        >
          <Card className="overflow-hidden h-full transition-all duration-400 ease-in-out border border-border hover:shadow-lg">
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover w-full transition-transform duration-400 ease-in-out hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={project.id <= 3}
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-[#0F172A] dark:text-white">{project.title}</h3>
              <p className="text-[#0F172A]/70 dark:text-white/70 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-[#F7F8FA] text-[#0F172A] dark:bg-[#0F172A]/50 dark:text-white/80"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1 border-[#3B3B98] text-[#3B3B98] hover:bg-[#3B3B98]/10 dark:border-[#F4B942] dark:text-[#F4B942] dark:hover:bg-[#F4B942]/10"
                asChild
              >
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  <span>Live Demo</span>
                </a>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
