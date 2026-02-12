"use client"

import { useEffect, useMemo, useState } from "react"

const roles = [
  "Programmer",
  "Data Analyst",
  "ML Engineer",
  "Frontend Developer",
]

function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297
  return x - Math.floor(x)
}

function FloatingSymbol({ children, className }: { children: string; className: string }) {
  return (
      <div
          className={`absolute text-4xl md:text-6xl font-mono text-primary/20 select-none transition-transform duration-1000 hover:text-primary/40 hover:scale-110 ${className}`}
      >
        <div className="rounded-2xl border border-border/30 bg-card/50 backdrop-blur-sm p-3 md:p-4">
          {children}
        </div>
      </div>
  )
}

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const particles = useMemo(
      () =>
          Array.from({ length: 50 }).map((_, i) => ({
            left: `${seededRandom(i * 3 + 1) * 100}%`,
            top: `${seededRandom(i * 3 + 2) * 100}%`,
            delay: `${seededRandom(i * 3 + 3) * 5}s`,
            duration: `${2 + seededRandom(i * 3 + 4) * 4}s`,
          })),
      []
  )

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        }, 100)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
      } else {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
      <section
          id="home"
          className="relative flex min-h-screen items-center overflow-hidden px-6"
      >
        {/* Particle background */}
        <div className="pointer-events-none absolute inset-0">
          {particles.map((p, i) => (
              <div
                  key={i}
                  className="absolute h-1 w-1 rounded-full bg-primary/30"
                  style={{
                    left: p.left,
                    top: p.top,
                    animationDelay: p.delay,
                    animation: `pulse ${p.duration} ease-in-out infinite`,
                  }}
              />
          ))}
          {/* Grid lines */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-primary/10" />
          <div className="absolute bottom-20 left-1/2 h-4 w-px bg-primary/40" />
          <div className="absolute bottom-20 left-1/2 h-px w-4 bg-primary/40 -translate-x-full" />
        </div>

        {/* Floating code symbols */}
        <FloatingSymbol className="right-[15%] top-[25%] hidden md:block">
          {"{ }"}
        </FloatingSymbol>
        <FloatingSymbol className="right-[25%] top-[55%] hidden md:block">
          {"< />"}
        </FloatingSymbol>
        <FloatingSymbol className="right-[35%] top-[55%] hidden md:block">
          {"( )"}
        </FloatingSymbol>

        <div className="relative z-10 mx-auto max-w-6xl w-full">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-5xl font-extrabold leading-tight text-foreground md:text-7xl animate-fade-in-up">
              {"Anastasia"}
              <br />
              {"Pancheva"}
            </h1>
            <div className="mb-10 flex items-center text-lg text-primary md:text-2xl font-mono">
              <span>{displayText}</span>
              <span className="ml-1 inline-block h-6 w-0.5 animate-blink border-r-2 border-primary md:h-8" />
            </div>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <a
                  href="#portfolio"
                  className="group relative overflow-hidden rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
              >
                <span className="relative z-10">View Work</span>
                <div className="absolute inset-0 -translate-x-full bg-foreground/10 transition-transform duration-500 group-hover:translate-x-0" />
              </a>
              <a
                  href="#contact"
                  className="group rounded-lg border border-primary/50 px-8 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary/10 hover:border-primary hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}
