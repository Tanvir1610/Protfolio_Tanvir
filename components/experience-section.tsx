import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">Experience & Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on experience and continuous learning
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Work Experience */}
          <Card className="p-8 bg-card/50 backdrop-blur-md border-hologram card-3d animate-glow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl text-primary mb-2">Front-End Developer Intern</CardTitle>
                  <div className="text-lg text-accent mb-2">CodeAlpha</div>
                  <div className="text-sm text-muted-foreground">July 2024 - August 2024</div>
                </div>
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center animate-float">
                  <span className="text-2xl">💼</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>
                    Developed and maintained user interfaces for web applications using HTML, CSS, and JavaScript
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>
                    Collaborated with designers and back-end developers to implement responsive and user-friendly
                    interfaces
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Contributed to the optimization of website performance and accessibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Gained valuable experience in a fast-paced, collaborative environment</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="p-8 bg-card/50 backdrop-blur-md border-hologram card-3d animate-glow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl text-primary mb-2">
                    Bachelor of Technology - Information Technology
                  </CardTitle>
                  <div className="text-lg text-accent mb-2">G H Patel College of Engineering & Technology</div>
                  <div className="text-sm text-muted-foreground">Anand, Gujarat • 2022 - 2026</div>
                </div>
                <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center animate-float">
                  <span className="text-2xl">🎓</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing a Bachelor of Technology in Information Technology with a focus on modern web
                development, artificial intelligence, and machine learning. Expected graduation in 2026 with strong
                foundations in programming, data structures, and software engineering principles.
              </p>
            </CardContent>
          </Card>

          {/* Responsibilities */}
          <Card className="p-8 bg-card/50 backdrop-blur-md border-hologram card-3d animate-glow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl text-primary mb-2">IEEE GCET Student Branch</CardTitle>
                  <div className="text-lg text-accent mb-2">Member & Design Contributor</div>
                  <div className="text-sm text-muted-foreground">Active Member</div>
                </div>
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center animate-float">
                  <span className="text-2xl">⚡</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Designed certificates for IEEE Graphic Design Workshop</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Contributed to event branding and visual design initiatives</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Participated in technical workshops and skill development programs</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
