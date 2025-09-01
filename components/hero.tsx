"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThreeHero } from "./three-hero"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <ThreeHero />
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-4 py-20 md:py-28">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-balance text-4xl font-bold md:text-6xl"
        >
          Tanvir — Full‑Stack Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="max-w-xl text-muted-foreground leading-relaxed"
        >
          I build performant, animated web apps with Next.js, TypeScript, Tailwind CSS, and modern databases. Explore my
          best work, read tutorials, and get in touch.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <Button asChild>
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
