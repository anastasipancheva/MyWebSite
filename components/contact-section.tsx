"use client"

import { AnimatedSection } from "./animated-section"
import { Send, Github, MapPin } from "lucide-react"

interface ContactCard {
  icon: typeof Send
  title: string
  value: string
  href?: string
}

const contacts: ContactCard[] = [
  {
    icon: Send,
    title: "Telegram",
    value: "@anastasipancheva",
    href: "https://t.me/anastasipancheva",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "anastasipancheva",
    href: "https://github.com/anastasipancheva",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Remote / Russia",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <AnimatedSection className="mb-4 text-center">
          <h2 className="text-4xl font-extrabold text-foreground md:text-5xl">
            {"Get In "}
            <span className="italic text-primary">Touch</span>
          </h2>
        </AnimatedSection>
        <AnimatedSection className="mb-16 text-center" delay={100}>
          <p className="text-muted-foreground">
            {"Have a project in mind? Let's work together!"}
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {contacts.map((contact, i) => {
            const Icon = contact.icon
            const content = (
              <div className="group flex items-center gap-5 rounded-2xl border border-border/30 bg-card p-6 transition-all duration-500 hover:border-primary/30 hover:bg-card/80 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {contact.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {contact.value}
                  </p>
                </div>
              </div>
            )

            return (
              <AnimatedSection key={contact.title} animation="fade-in-up" delay={i * 100}>
                {contact.href ? (
                  <a href={contact.href} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
