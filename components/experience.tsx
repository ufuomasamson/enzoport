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
  // Animation variants
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  }

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    }),
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3 + 0.2,
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
    hover: {
      y: -5,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  const dateVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  }

  return (
    <div className="relative">
      {/* Timeline line */}
      <motion.div
        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#3B3B98]/20 dark:bg-[#F4B942]/20 transform md:-translate-x-1/2"
        initial={{ scaleY: 0, originY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.1 }}
      />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            {/* Timeline dot */}
            <motion.div
              className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#3B3B98] dark:bg-[#F4B942] transform -translate-x-1/2 mt-6"
              custom={index}
              variants={dotVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            />

            {/* Date */}
            <motion.div
              className="md:w-1/2 pl-12 md:pl-0 md:pr-12 mb-4 md:mb-0 md:text-right"
              custom={index}
              variants={dateVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="inline-flex items-center text-[#0F172A]/70 dark:text-white/70">
                <Calendar className="h-4 w-4 mr-2 md:hidden" />
                <span>{exp.period}</span>
                <Calendar className="h-4 w-4 ml-2 hidden md:inline-block" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="md:w-1/2 pl-12 md:pl-12 md:pr-0"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.1 }}
            >
              <Card className="border border-border overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.3 + 0.4, duration: 0.5, type: "spring", stiffness: 200 }}
                      viewport={{ once: true }}
                    >
                      <Briefcase className="h-5 w-5 mr-2 text-[#3B3B98] dark:text-[#F4B942] flex-shrink-0 mt-1" />
                    </motion.div>
                    <div>
                      <motion.h3
                        className="text-lg font-bold text-[#0F172A] dark:text-white"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.3 + 0.5, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        {exp.role} at {exp.company}
                      </motion.h3>
                      <motion.p
                        className="mt-2 text-[#0F172A]/80 dark:text-white/80"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.3 + 0.6, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        {exp.description}
                      </motion.p>
                      <motion.p
                        className="mt-2 text-[#0F172A]/80 dark:text-white/80 font-medium"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.3 + 0.7, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-[#3B3B98] dark:text-[#F4B942]">Achievement:</span> {exp.achievements}
                      </motion.p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
