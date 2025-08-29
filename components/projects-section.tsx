"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  const projects = [
    {
      title: "NuroLm",
      description:
        "AI-based system for analyzing MRI scans and identifying neurological patterns using machine learning and web development technologies.",
      technologies: ["Machine Learning", "Web Development", "AI"],
      category: "AI/ML",
      link: "#",
    },
    {
      title: "CVMU Conference Website",
      description:
        "Developed a comprehensive college event website for CVMU Conference management with modern web technologies.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Web Development",
      link: "#",
    },
    {
      title: "Word Block Puzzle Game",
      description:
        "Fun and challenging game where players arrange letter blocks to form target words. Features 10+ levels with eye-catching UI and responsive design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Game Development",
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions and creative implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group bg-card/50 backdrop-blur-md border-hologram card-3d animate-glow overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="relative">
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 bg-primary/20 rounded-full text-xs text-primary border border-primary/30">
                    {project.category}
                  </div>
                </div>
                <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-accent/10 text-accent text-xs rounded border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-hologram group-hover:bg-primary/10 transition-all duration-300 bg-transparent"
                  >
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-accent">Achievements & Recognition</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card/30 backdrop-blur-md border-hologram card-3d">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center animate-glow flex-shrink-0">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Top 5,000 Finalist</h4>
                  <p className="text-sm text-muted-foreground">Build With India Hackathon Finale at Google Office</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/30 backdrop-blur-md border-hologram card-3d">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center animate-glow flex-shrink-0">
                  <span className="text-2xl">📚</span>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">Reading Techniques Quiz</h4>
                  <p className="text-sm text-muted-foreground">Scored 60/100 - February 2023</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/30 backdrop-blur-md border-hologram card-3d">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center animate-glow flex-shrink-0">
                  <span className="text-2xl">💻</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">ShlokaDecode Participant</h4>
                  <p className="text-sm text-muted-foreground">NSUT Delhi Team Imperials</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/30 backdrop-blur-md border-hologram card-3d">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center animate-glow flex-shrink-0">
                  <span className="text-2xl">🎨</span>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">CSS Battle Competitor</h4>
                  <p className="text-sm text-muted-foreground">AIT Pune Team vhoratanvir1610</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
