"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

// Updated skill data with proficiency percentages
const skills = [
  { name: "WordPress", proficiency: 95 },
  { name: "Tailwind CSS", proficiency: 80 },
  { name: "ReactJs", proficiency: 75 },
  { name: "nodeJs", proficiency: 85 },
  { name: "php", proficiency: 80 },
  { name: "expressJs", proficiency: 78 },
  { name: "Javascript", proficiency: 92 },
  { name: "SEO", proficiency: 75 },
  { name: "Elementor", proficiency: 90 },
  { name: "NestJS", proficiency: 82 },
  { name: "Bootstrap", proficiency: 88 },
  { name: "React Router", proficiency: 85 },
  { name: "Next.js", proficiency: 80 },
  { name: "AngularJS", proficiency: 75 },
]

export default function Skills() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="space-y-8">
      {/* Mobile Carousel - Only visible on mobile */}
      <div className="md:hidden">
        <ScrollArea className="w-full whitespace-nowrap pb-6">
          <motion.div
            className="flex w-max space-x-4 p-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {skills.map((skill, index) => (
              <motion.div key={skill.name} variants={cardVariants} whileHover="hover">
                <Card className="min-w-[200px] overflow-hidden border border-border">
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg mb-2 text-[#0F172A] dark:text-white">{skill.name}</h3>
                    <div className="w-full h-2 bg-[#F7F8FA] dark:bg-[#0F172A]/50 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#3B3B98] dark:bg-[#F4B942]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <p className="text-right mt-1 text-sm text-[#0F172A]/70 dark:text-white/70">{skill.proficiency}%</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* Grid Layout - For all screen sizes, but primary display for tablet and desktop */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skills.map((skill, index) => (
          <motion.div key={`grid-${skill.name}`} variants={cardVariants} whileHover="hover">
            <Card className="overflow-hidden border border-border h-full">
              <CardContent className="p-4">
                <h3 className="font-medium mb-2 text-[#0F172A] dark:text-white">{skill.name}</h3>
                <div className="w-full h-2 bg-[#F7F8FA] dark:bg-[#0F172A]/50 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#3B3B98] dark:bg-[#F4B942]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
                <motion.p
                  className="text-right mt-1 text-sm text-[#0F172A]/70 dark:text-white/70"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                  viewport={{ once: true }}
                >
                  {skill.proficiency}%
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
