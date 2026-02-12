"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatedSection } from "./animated-section"

interface Skill {
  name: string
  level: number
}

interface SkillCategoryProps {
  title: string
  skills: Skill[]
  delay: number
}

function SkillBar({ name, level, isVisible }: Skill & { isVisible: boolean }) {
  return (
    <div className="group mb-6 last:mb-0">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
          {name}
        </span>
        <span className="text-sm font-semibold text-primary">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${level}%` : "0%",
            transitionDelay: "300ms",
          }}
        />
      </div>
    </div>
  )
}

function SkillCategory({ title, skills, delay }: SkillCategoryProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <AnimatedSection animation="scale-in" delay={delay}>
      <div
        ref={ref}
        className="rounded-2xl border border-border/30 bg-card p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
      >
        <div className="mb-6 flex items-center gap-3">
          <div className="h-6 w-1 rounded-full bg-primary" />
          <h3 className="text-xl font-bold text-primary">{title}</h3>
        </div>
        {skills.map((skill) => (
          <SkillBar key={skill.name} {...skill} isVisible={isVisible} />
        ))}
      </div>
    </AnimatedSection>
  )
}

const skillCategories: { title: string; skills: Skill[] }[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 89 },
      { name: "UML", level: 79 },
      { name: "Python", level: 90 },
      { name: "C#", level: 45 },
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 87 },
      { name: "Bootstrap", level: 81 },
      { name: "React", level: 79 },
      { name: "Next.js", level: 74 },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 70 },
      { name: "Jupyter / Notebooks", level: 85 },
      { name: "Figma", level: 72 },
      { name: "VS Code", level: 92 },
    ],
  },
  {
    title: "Specializations",
    skills: [
      { name: "Data Analysis", level: 88 },
      { name: "Machine Learning", level: 41 },
      { name: "Data Visualization", level: 85 },
      { name: "Statistical Analysis", level: 80 },
      { name: "Fullstack Development", level: 75 },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="mb-4 text-center">
          <h2 className="text-4xl font-extrabold text-foreground md:text-5xl">
            {"Technical "}
            <span className="italic text-primary">Skills</span>
          </h2>
        </AnimatedSection>
        <AnimatedSection className="mb-16 text-center" delay={100}>
          <p className="text-muted-foreground">
            Technologies I work with
          </p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((cat, i) => (
            <SkillCategory
              key={cat.title}
              title={cat.title}
              skills={cat.skills}
              delay={i * 150}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
