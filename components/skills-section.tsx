"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "⚡", // Using energy symbol instead of generic computer
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React.js", level: 75 },
      ],
    },
    {
      title: "Backend & Data",
      icon: "🔧", // Using wrench for technical skills
      skills: [
        { name: "Python", level: 85 },
        { name: "SQL", level: 80 },
        { name: "Machine Learning", level: 70 },
        { name: "Data Engineering", level: 65 },
      ],
    },
    {
      title: "Creative Design",
      icon: "🎬", // Using film camera for video/design skills
      skills: [
        { name: "Video Editing", level: 90 },
        { name: "Graphic Design", level: 85 },
        { name: "UI/UX Design", level: 75 },
        { name: "Motion Graphics", level: 70 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="particles-bg">
        {[...Array(20)].map((_, i) => (
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-arc-reactor animate-hologram-flicker">
              [JARVIS] SKILL ANALYSIS
            </h2>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-energy-flow" />
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
            {">"} Analyzing combat capabilities and technical expertise...
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className="jarvis-interface card-3d animate-hologram-flicker relative overflow-hidden"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />

              <CardHeader className="text-center pb-6 relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 arc-reactor animate-arc-reactor mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl">{category.icon}</span>
                </div>
                <CardTitle className="text-lg sm:text-xl text-arc-reactor font-mono">
                  {category.title.toUpperCase()}
                </CardTitle>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary animate-jarvis-scan" />
              </CardHeader>

              <CardContent className="space-y-4 sm:space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm font-medium text-foreground font-mono">
                        {skill.name.toUpperCase()}
                      </span>
                      <span className="text-xs text-arc-reactor font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-2 sm:h-3 overflow-hidden border border-primary/30">
                      <div
                        className="h-full skill-bar rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-iron-man font-mono animate-hologram-flicker">
              [SYSTEM] CERTIFICATIONS VERIFIED
            </h3>
            <div className="w-32 h-0.5 bg-accent mx-auto mt-2 animate-energy-flow" />
          </div>

          <Card className="jarvis-interface card-3d max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full animate-pulse" />
            <div className="absolute top-4 left-4 text-xs text-primary font-mono">CERT_001</div>

            <div className="p-6 sm:p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-8 sm:w-12 sm:h-12 arc-reactor animate-arc-reactor mr-4" />
                <h4 className="text-lg sm:text-xl font-semibold text-arc-reactor font-mono">SQL MASTERY PROTOCOL</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base font-mono">
                {">"} Database manipulation and query optimization systems online. Advanced data extraction and analysis
                protocols verified. Combat-ready for complex data operations and strategic insights.
              </p>
              <div className="mt-4 text-xs sm:text-sm text-gold font-mono">
                ORGANIZATION: Charutar Vidya Mandal CVM | STATUS: VERIFIED
              </div>
              <div className="mt-4 w-full bg-muted/30 rounded-full h-1">
                <div className="w-full h-full skill-bar rounded-full" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
