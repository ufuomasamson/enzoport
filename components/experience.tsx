"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    id: 1,
    period: "2023-2024",
    role: "No-Code Developer",
    company: "Techtop International",
    description:
      "Led the development of custom no-code solutions for enterprise clients, resulting in 40% faster deployment times.",
    achievements: "Implemented automated workflows that reduced manual data entry by 65%.",
  },
  {
    id: 2,
    period: "2021-2023",
    role: "Web Designer",
    company: "Amatech",
    description: "Designed and developed responsive websites and e-commerce platforms for small to medium businesses.",
    achievements: "Increased client conversion rates by an average of 35% through UX improvements.",
  },
  {
    id: 3,
    period: "2019-2021",
    role: "Freelance Developer",
    company: "Self-employed",
    description: "Provided web design and development services to various clients across multiple industries.",
    achievements: "Built and maintained a portfolio of 20+ client websites with 100% satisfaction rate.",
  },
]

export default function Experience() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#3B3B98]/20 dark:bg-[#F4B942]/20 transform md:-translate-x-1/2" />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#3B3B98] dark:bg-[#F4B942] transform -translate-x-1/2 mt-6" />

            {/* Date */}
            <div className="md:w-1/2 pl-12 md:pl-0 md:pr-12 mb-4 md:mb-0 md:text-right">
              <div className="inline-flex items-center text-[#0F172A]/70 dark:text-white/70">
                <Calendar className="h-4 w-4 mr-2 md:hidden" />
                <span>{exp.period}</span>
                <Calendar className="h-4 w-4 ml-2 hidden md:inline-block" />
              </div>
            </div>

            {/* Content */}
            <div className="md:w-1/2 pl-12 md:pl-12 md:pr-0">
              <Card className="border border-border">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Briefcase className="h-5 w-5 mr-2 text-[#3B3B98] dark:text-[#F4B942] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-[#0F172A] dark:text-white">
                        {exp.role} at {exp.company}
                      </h3>
                      <p className="mt-2 text-[#0F172A]/80 dark:text-white/80">{exp.description}</p>
                      <p className="mt-2 text-[#0F172A]/80 dark:text-white/80 font-medium">
                        <span className="text-[#3B3B98] dark:text-[#F4B942]">Achievement:</span> {exp.achievements}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
