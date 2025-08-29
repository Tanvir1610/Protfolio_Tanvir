"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "vhoratanvir1610@gmail.com",
      link: "mailto:vhoratanvir1610@gmail.com",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 6354686821",
      link: "tel:+916354686821",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "Connect with me",
      link: "#",
    },
    {
      icon: "🌐",
      label: "Website",
      value: "Portfolio",
      link: "#",
    },
    {
      icon: "💻",
      label: "GitHub",
      value: "View Code",
      link: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's create something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-8 bg-card/50 backdrop-blur-md border-hologram card-3d animate-glow">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary mb-4">Let's Connect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={contact.label}
                      href={contact.link}
                      className="flex items-center gap-4 p-3 rounded-lg bg-muted/20 hover:bg-primary/10 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:animate-glow">
                        <span className="text-xl">{contact.icon}</span>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{contact.label}</div>
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {contact.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Quick Message */}
            <div>
              <Card className="p-8 bg-card/50 backdrop-blur-md border-hologram card-3d animate-glow">
                <CardHeader>
                  <CardTitle className="text-2xl text-accent mb-4">Quick Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full p-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full p-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full p-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button className="w-full animate-glow">Send Message</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-border">
            <p className="text-muted-foreground">
              © 2024 TanvirAhmad. Crafted with passion and cutting-edge technology.
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
