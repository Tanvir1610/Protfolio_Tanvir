import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="particles-bg">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle animate-particle-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-arc-reactor animate-hologram-flicker font-mono">
              [JARVIS] PERSONAL PROFILE
            </h2>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-energy-flow" />
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
            {">"} Initializing biographical data and mission parameters...
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <Card className="jarvis-interface card-3d animate-hologram-flicker relative overflow-hidden">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary" />

              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-arc-reactor font-mono">MISSION BRIEFING</CardTitle>
                <div className="absolute top-0 left-0 w-full h-0.5 bg-primary animate-jarvis-scan" />
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base font-mono">
                  {">"} B.Tech Information Technology operative stationed at G H Patel College of Engineering &
                  Technology, Anand, Gujarat. Primary mission: Advancing technological frontiers through web
                  development, AI/ML research, and creative innovation protocols.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base font-mono">
                  {">"} Secondary capabilities include professional video editing and graphic design systems.
                  Specialized in combining technical precision with artistic vision for enhanced user experiences.
                </p>

                <div className="pt-4 space-y-3">
                  <div className="flex items-center gap-3 p-2 bg-primary/10 rounded border border-primary/30">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                    <span className="text-xs sm:text-sm font-mono text-foreground">
                      STATUS: B.Tech IT (2022-2026) - ACTIVE
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-accent/10 rounded border border-accent/30">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                    <span className="text-xs sm:text-sm font-mono text-foreground">
                      MISSION: CodeAlpha Front-End Developer - COMPLETED
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-primary/10 rounded border border-primary/30">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                    <span className="text-xs sm:text-sm font-mono text-foreground">
                      ALLIANCE: IEEE GCET Student Branch - ACTIVE
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="hud-element card-3d animate-iron-man-float relative overflow-hidden">
              <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse" />
              <div className="flex items-center gap-4 p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 arc-reactor animate-arc-reactor flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-arc-reactor font-mono">PRIMARY OBJECTIVE</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-mono">
                    Creating innovative solutions that make a difference
                  </p>
                </div>
              </div>
            </Card>

            <Card
              className="hud-element card-3d animate-iron-man-float relative overflow-hidden"
              style={{ animationDelay: "2s" }}
            >
              <div className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full animate-pulse" />
              <div className="flex items-center gap-4 p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 arc-reactor animate-arc-reactor flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-iron-man font-mono">VISION PROTOCOL</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-mono">
                    Bridging technology and creativity for superior UX
                  </p>
                </div>
              </div>
            </Card>

            <Card
              className="hud-element card-3d animate-iron-man-float relative overflow-hidden"
              style={{ animationDelay: "4s" }}
            >
              <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse" />
              <div className="flex items-center gap-4 p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 arc-reactor animate-arc-reactor flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gold font-mono">CORE VALUES</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-mono">
                    Innovation, quality, and continuous learning
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
