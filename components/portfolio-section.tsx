"use client"

import Image from "next/image"
import { AnimatedSection } from "./animated-section"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  title: string
  description: string
  image?: string
  tags: string[]
  githubUrl: string
  demoUrl?: string
}

const projects: Project[] = [
  {
    title: "Customer Behavior Analysis",
    description:
      "Исследование покупательского поведения клиентов и анализ чувствительности спроса к цене. Визуализация данных, построение графиков распределения клиентов по городам и анализ ключевых метрик.",
    image: "/analysis.png",
    tags: ["Python", "Pandas", "Matplotlib", "Data Analysis", "ML"],
    githubUrl: "https://github.com/anastasipancheva/analysis",
  },
  {
    title: "TutorHub",
    description:
      "Платформа-галерея репетиторов с информацией о преподавателях, рейтингами, ценами и возможностью покупки курсов. Полноценное веб-приложение с адаптивным дизайном.",
    image: "/tutorhub.png",
    tags: ["TypeScript", "React", "Next.js", "Full Stack"],
    githubUrl: "https://github.com/anastasipancheva/TutorHub",
  },
  {
    title: "AnyWay",
    description:
      "Мини-приложение для гранта в Сколково. Личный кабинет школьника, желающего выиграть олимпиаду и поступить в вуз мечты. Система достижений, календарь событий и трекинг прогресса.",
    image: "/anyway.png",
    tags: ["TypeScript", "EdTech", "Skolkovo", "Mini App"],
    githubUrl: "https://github.com/anastasipancheva/AnyWay",
  },
  {
    title: "Balance - Yoga & Pilates",
    description:
      "Сайт студии йоги и пилатеса с информацией о направлениях, тренерах и залах. Выполнен на чистейшем HTML, CSS и JavaScript с красивыми анимациями.",
    image: "/yoga.png",
    tags: ["HTML", "CSS", "JavaScript", "Frontend"],
    githubUrl: "https://github.com/anastasipancheva/frontend",
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <AnimatedSection animation="scale-in" delay={index * 150}>
      <div className="group flex h-full flex-col rounded-2xl border border-border/30 bg-card overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
        <div className="relative h-52 w-full overflow-hidden bg-secondary">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-secondary text-sm text-muted-foreground">
              Project Screenshot
            </div>
          )}
          <div className="absolute inset-0 bg-primary/0 transition-all duration-500 group-hover:bg-primary/10" />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-3 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
            {project.title}
          </h3>
          <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="mb-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-primary/20 px-3 py-1 text-xs font-medium text-primary/80 transition-all duration-300 hover:border-primary/50 hover:text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center gap-2 rounded-lg border border-primary/30 px-4 py-2.5 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary/10 hover:border-primary/60 hover:-translate-y-0.5"
            >
              <Github className="h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-12" />
              GitHub
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
              >
                <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="mb-4 text-center">
          <h2 className="text-4xl font-extrabold text-foreground md:text-5xl">
            {"Port"}
            <span className="italic text-primary">folio</span>
          </h2>
        </AnimatedSection>
        <AnimatedSection className="mb-16 text-center" delay={100}>
          <p className="text-muted-foreground">My Recent Projects</p>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
