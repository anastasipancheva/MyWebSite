"use client"

import { AnimatedSection } from "./animated-section"
import { Github, Send } from "lucide-react"
import Image from "next/image" // Импортируем компонент для картинок

export function AboutSection() {
  return (
      <section id="about" className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection className="mb-4 text-center" animation="fade-in">
            <h2 className="text-4xl font-extrabold text-foreground md:text-5xl">
              {"About "}
              <span className="italic text-primary">Me</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection className="mb-16 text-center" delay={100} animation="fade-in">
            <p className="text-muted-foreground">Anastasia Pancheva</p>
          </AnimatedSection>

          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
            <AnimatedSection className="flex-1 space-y-6" animation="fade-in-up">
              <p className="leading-relaxed text-muted-foreground">
                {"Я аналитик и разработчик с опытом в создании комплексных программных решений. Специализируюсь на анализе данных, начинаю свой путь в машинном обучении, а также для себя занимаюсь веб-разработкой и проектированием баз данных."}
              </p>
              <p className="leading-relaxed text-muted-foreground">
                {"Мой опыт включает исследование покупательского поведения, разработку ML-моделей, создание веб-платформ на React/Next.js, проетирование собственной БД и реализация её на MySQL. Люблю решать сложные задачи и анализировать большие объёмы данных."}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                    href="https://github.com/anastasipancheva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-border/50 bg-card px-6 py-4 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                >
                  <Github className="h-5 w-5 text-foreground transition-colors duration-300 group-hover:text-primary" />
                  <span className="font-medium text-foreground transition-colors duration-300 group-hover:text-primary">
                  GitHub
                </span>
                </a>
                <a
                    href="https://t.me/anastasipancheva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-border/50 bg-card px-6 py-4 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                >
                  <Send className="h-5 w-5 text-foreground transition-colors duration-300 group-hover:text-primary" />
                  <span className="font-medium text-foreground transition-colors duration-300 group-hover:text-primary">
                  Telegram
                </span>
                </a>
                <a
                    href="https://vk.com/anastasipancheva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-border/50 bg-card px-6 py-4 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                >
                  <svg className="h-5 w-5 text-foreground transition-colors duration-300 group-hover:text-primary" viewBox="0 0 24 24" fill="currentColor"><path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.847 2.473 2.27 4.64 2.862 4.64.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.253-1.406 2.15-3.574 2.15-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/></svg>
                  <span className="font-medium text-foreground transition-colors duration-300 group-hover:text-primary">
                  VK
                </span>
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection
                className="relative flex-shrink-0"
                animation="scale-in"
                delay={200}
            >
              <div className="relative h-72 w-72 overflow-hidden rounded-2xl border border-border/30 lg:h-80 lg:w-80 shadow-2xl shadow-primary/10">
                <Image
                    src="/me.jpg"           // Путь к фото в public
                    alt="Anastasia Pancheva"
                    fill                   // Заполнит контейнер div
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    priority               // Загружать в первую очередь
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
  )
}