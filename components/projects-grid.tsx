"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { projects } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { TiltCard } from "./tilt-card"

export function ProjectsGrid({ limit }: { limit?: number }) {
  const items = limit ? projects.slice(0, limit) : projects
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {items.map((p, idx) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.03, duration: 0.4 }}
        >
          <TiltCard>
            <div className="flex h-full flex-col gap-3">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <Link
                  href={p.href}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  Repo <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
              <p className="text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="rounded-full">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </TiltCard>
        </motion.div>
      ))}
    </div>
  )
}
