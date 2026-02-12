"use client"

import { AnimatedSection } from "./animated-section"

interface ExperienceItem {
  company: string
  role: string
  period: string
  description: string
  tags: string[]
}

const experiences: ExperienceItem[] = [
  {
    company: "AnyWay",
    role: "Frontend Developer, TypeScript",
    period: "2025",
    description:
      "Разработка мини-приложения для гранта в Сколково. Выполняла по заказу. Личный кабинет школьника для подготовки к олимпиадам и поступлению в вуз мечты. Реализация на TypeScript. Интеграция в самописного тг бота на Python.",
    tags: ["TypeScript", "Frontend", "EdTech", "Skolkovo"],
  },
  {
    company: "TutorHub",
    role: "Fullstack Developer",
    period: "2025",
    description:
      "Разработка платформы-галереи репетиторов с возможностью просмотра информации, покупки курсов и записи на занятия. TypeScript + React + Next.js.",
    tags: ["React", "Next.js", "TypeScript", "Full Stack"],
  },
  {
    company: "Data Analysis Research",
    role: "Data Analyst, ML Engineer",
    period: "2025",
    description:
      "Исследование покупательского поведения клиентов, анализ чувствительности спроса к цене. Визуализация данных в Python, практика в использовании библиотек для анализа данных и их визуализации.",
    tags: ["Python", "Pandas", "ML", "Data Analysis"],
  },
  {
    company: "Balance Studio",
    role: "Frontend Developer",
    period: "2025",
    description:
      "Разработка сайта студии йоги и пилатеса на чистом HTML, CSS и JavaScript. Адаптивная верстка и плавные анимации.",
    tags: ["HTML", "CSS", "JavaScript", "Frontend"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="mb-4 text-center">
          <h2 className="text-4xl font-extrabold text-foreground md:text-5xl">
            {"Work "}
            <span className="italic text-primary">Experience</span>
          </h2>
        </AnimatedSection>
        <AnimatedSection className="mb-16 text-center" delay={100}>
          <p className="text-muted-foreground">My Professional Journey</p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-primary/20 md:block" />
          <div className="absolute left-6 top-0 h-full w-0.5 bg-primary/20 md:hidden" />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0
              return (
                <AnimatedSection
                  key={exp.company}
                  animation={isLeft ? "slide-in-left" : "slide-in-right"}
                  delay={i * 150}
                >
                  <div className="relative flex items-center gap-8 md:gap-0">
                    {/* Mobile layout */}
                    <div className="md:hidden pl-14 w-full">
                      {/* Dot on the line */}
                      <div className="absolute left-[18px] top-6 h-4 w-4 rounded-full border-4 border-primary bg-background z-10" />
                      
                      <div className="group rounded-2xl border border-border/30 bg-card p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                        <div className="mb-2 inline-block rounded-full border border-primary/30 px-3 py-1 text-xs font-medium text-primary">
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-foreground">
                            {exp.company}
                          </h3>
                          <div className="h-3 w-3 rounded-full border-2 border-primary bg-background" />
                        </div>
                        <p className="mb-3 font-semibold text-primary">
                          {exp.role}
                        </p>
                        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-primary/20 px-3 py-1 text-xs font-medium text-primary/80 transition-all duration-300 hover:border-primary/50 hover:text-primary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Desktop layout */}
                    <div className="hidden md:flex w-full items-center">
                      {/* Left side */}
                      <div className="w-[calc(50%-2rem)] pr-8">
                        {isLeft ? (
                          <div className="group rounded-2xl border border-border/30 bg-card p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-xl font-bold text-foreground">
                                {exp.company}
                              </h3>
                              <div className="h-3 w-3 rounded-full border-2 border-primary bg-background" />
                            </div>
                            <p className="mb-3 font-semibold text-primary">
                              {exp.role}
                            </p>
                            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                              {exp.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {exp.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full border border-primary/20 px-3 py-1 text-xs font-medium text-primary/80 transition-all duration-300 hover:border-primary/50 hover:text-primary"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-end">
                            <span className="inline-block rounded-full border border-primary/30 px-5 py-2 text-sm font-medium text-primary">
                              {exp.period}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Center dot */}
                      <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center">
                        <div className="h-4 w-4 rounded-full border-4 border-primary bg-background z-10" />
                      </div>

                      {/* Right side */}
                      <div className="w-[calc(50%-2rem)] pl-8">
                        {!isLeft ? (
                          <div className="group rounded-2xl border border-border/30 bg-card p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-xl font-bold text-foreground">
                                {exp.company}
                              </h3>
                              <div className="h-3 w-3 rounded-full border-2 border-primary bg-background" />
                            </div>
                            <p className="mb-3 font-semibold text-primary">
                              {exp.role}
                            </p>
                            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                              {exp.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {exp.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full border border-primary/20 px-3 py-1 text-xs font-medium text-primary/80 transition-all duration-300 hover:border-primary/50 hover:text-primary"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <span className="inline-block rounded-full border border-primary/30 px-5 py-2 text-sm font-medium text-primary">
                            {exp.period}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
