"use client"

import type React from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { type PropsWithChildren, useRef } from "react"
import { cn } from "@/lib/utils"

export function TiltCard({ children, className }: PropsWithChildren<{ className?: string }>) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10])

  function onMouseMove(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    x.set(px)
    y.set(py)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
      style={{ perspective: 1000 }}
      className={cn("group", className)}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="rounded-xl border bg-card text-card-foreground shadow-sm p-4 transition-transform duration-150"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
