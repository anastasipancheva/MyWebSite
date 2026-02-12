import { Github, Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/30 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          {"2026 Anastasia Pancheva. All rights reserved."}
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/anastasipancheva"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-all duration-300 hover:text-primary hover:-translate-y-0.5"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://t.me/anastasipancheva"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-all duration-300 hover:text-primary hover:-translate-y-0.5"
            aria-label="Telegram"
          >
            <Send className="h-5 w-5" />
          </a>
          <a
            href="https://vk.com/anastasipancheva"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-all duration-300 hover:text-primary hover:-translate-y-0.5"
            aria-label="VK"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.847 2.473 2.27 4.64 2.862 4.64.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.253-1.406 2.15-3.574 2.15-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
