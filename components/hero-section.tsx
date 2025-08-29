"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Arc reactor energy particles */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-energy-flow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background:
                  i % 3 === 0
                    ? "rgba(0, 212, 255, 0.8)"
                    : i % 3 === 1
                      ? "rgba(220, 20, 60, 0.8)"
                      : "rgba(255, 215, 0, 0.8)",
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* JARVIS interface grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                   linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
                 `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className="absolute inset-0 perspective-1000">
        {/* Main arc reactor */}
        <div
          className="absolute w-32 h-32 arc-reactor animate-arc-reactor animate-iron-man-float"
          style={{
            top: "15%",
            left: "10%",
            transform: `translateX(${mousePosition.x * 0.03}px) translateY(${mousePosition.y * 0.03}px)`,
          }}
        />

        {/* HUD elements */}
        <div
          className="absolute w-24 h-16 hud-element animate-hologram-flicker"
          style={{
            top: "25%",
            right: "15%",
            transform: `translateX(${mousePosition.x * -0.02}px) translateY(${mousePosition.y * -0.02}px)`,
          }}
        >
          <div className="p-2 text-xs text-arc-reactor font-mono">STATUS: ONLINE</div>
        </div>

        <div
          className="absolute w-20 h-20 border-2 border-accent/50 rounded-full animate-iron-man-float"
          style={{
            top: "60%",
            right: "20%",
            animationDelay: "2s",
            transform: `translateX(${mousePosition.x * -0.015}px) translateY(${mousePosition.y * -0.015}px)`,
          }}
        >
          <div className="w-full h-full border-2 border-gold/30 rounded-full animate-arc-reactor" />
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <br /><br /><br />
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-arc-reactor animate-hologram-flicker">
              TANVIRAHMAD
            </h1>
            <div className="text-2xl md:text-3xl mb-4 font-mono">
              <span className="text-arc-reactor">&gt; Full-Stack Developer</span>
              <span className="text-iron-man mx-2">|</span>
              <span className="text-gold">Video Editor</span>
              <span className="text-iron-man mx-2">|</span>
              <span className="text-arc-reactor">Graphic Designer</span>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-mono">
              <span className="text-arc-reactor">[JARVIS]</span> Initializing advanced technology systems...
              <br />
              Specializing in web development, AI/ML, and creative design solutions.
            </p>
          </div>

          <Card className="p-8 jarvis-interface card-3d animate-arc-reactor max-w-2xl mx-auto mb-8">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="hud-element p-4 rounded">
                <div className="text-3xl font-bold text-arc-reactor font-mono">15+</div>
                <div className="text-sm text-muted-foreground font-mono">TECHNOLOGIES</div>
              </div>
              <div className="hud-element p-4 rounded">
                <div className="text-3xl font-bold text-iron-man font-mono">10+</div>
                <div className="text-sm text-muted-foreground font-mono">PROJECTS</div>
              </div>
              <div className="hud-element p-4 rounded">
                <div className="text-3xl font-bold text-gold font-mono">2026</div>
                <div className="text-sm text-muted-foreground font-mono">GRADUATE</div>
              </div>
            </div>

            {/* Arc reactor center piece */}
            <div className="flex justify-center mt-6">
              <div className="w-16 h-16 arc-reactor animate-arc-reactor" />
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="relative overflow-hidden group text-lg px-8 py-4 bg-gradient-to-r from-primary to-accent border border-primary/50 font-mono"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="relative z-10">&gt; INITIALIZE PROJECTS</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 left-0 w-full h-0.5 bg-arc-reactor animate-energy-flow" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="relative overflow-hidden group text-lg px-8 py-4 bg-transparent border-2 border-accent/50 font-mono text-iron-man hover:text-foreground"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="relative z-10">&gt; ESTABLISH CONTACT</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-iron-man animate-energy-flow" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="relative">
          <div className="w-6 h-6 arc-reactor animate-arc-reactor" />
          <div className="absolute inset-0 w-6 h-6 border-2 border-primary rounded-full animate-ping" />
          <div
            className="absolute inset-0 w-6 h-6 border-2 border-accent rounded-full animate-ping"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </div>
    </section>
  )
}
