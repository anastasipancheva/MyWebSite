"use client"

import { AnimatedSection } from "./animated-section" // Убедись, что файл animated-section.tsx обновлен (код ниже)
import { Crown, Music, Layers, BookOpen, Coffee, Gamepad2 } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface InterestCardProps {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
  links?: { label: string; href: string }[]
  delay: number
}

function InterestCard({ icon: Icon, title, description, tags, links, delay }: InterestCardProps) {
  return (
      <AnimatedSection animation="scale-in" delay={delay}>
        <div className="group h-full rounded-2xl border border-border/30 bg-card p-6 transition-all duration-500 hover:border-primary/30 hover:bg-card/80 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
          <div className="mb-6 inline-flex rounded-xl bg-primary/15 p-3 transition-all duration-300 group-hover:bg-primary/25 group-hover:scale-110">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mb-3 text-lg font-bold text-foreground">{title}</h3>
          <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
          {links && links.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {links.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 px-3 py-1 text-xs font-medium text-primary transition-all duration-300 hover:bg-primary/10 hover:border-primary/60"
                    >
                      {link.label}
                    </a>
                ))}
              </div>
          )}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
                <span
                    key={tag}
                    className="rounded-full border border-primary/20 px-3 py-1 text-xs font-medium text-primary/80 transition-all duration-300 hover:border-primary/50 hover:text-primary"
                >
              {tag}
            </span>
            ))}
          </div>
        </div>
      </AnimatedSection>
  )
}

const interests: Omit<InterestCardProps, "delay">[] = [
  {
    icon: Layers,
    title: "Data Science & ML",
    description: "Увлекаюсь анализом данных и машинным обучением. Исследую покупательское поведение, строю модели прогнозирования.",
    tags: ["Python", "Pandas", "Scikit-learn"],
  },
  {
    icon: Crown,
    title: "Веб-разработка",
    description: "Создаю современные веб-приложения с использованием React, Next.js и TypeScript.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: Coffee,
    title: "Репетиторство",
    description: "Активно преподаю математику и русский на уровне 1-11 классов.",
    tags: ["Математика", "Репетитор", "Русский"],
  },
  {
    icon: Music,
    title: "Воздушная гимнастика",
    description: "Хожу на воздушное кольцо и полотна, делаю трюки на высоте.",
    tags: ["Спорт", "2 спортивный разряд"],
  },
  {
    icon: BookOpen,
    title: "Физиология сна",
    description: "Читаю книги и слушаю подкасты о психосоматике и сне человека.",
    tags: ["Сны", "Научный подход"],
  },
  {
    icon: Gamepad2,
    title: "Междисциплинарный подход",
    description: "Объединяю творчество, технологии и личностное развитие.",
    tags: ["Креативность", "Внимание к деталям"],
  },
]

export function InterestsSection() {
  return (
      <section id="interests" className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection className="mb-4 text-center" animation="fade-in">
            <h2 className="text-4xl font-extrabold text-foreground md:text-5xl">
              {"Personal "}
              <span className="italic text-primary">Interests</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection className="mb-16 text-center" delay={100} animation="fade-in">
            <p className="text-muted-foreground">{"Beyond Code & Development"}</p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {interests.map((interest, i) => (
                <InterestCard
                    key={interest.title}
                    {...interest}
                    delay={i * 100}
                />
            ))}
          </div>
        </div>
      </section>
  )
}