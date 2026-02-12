"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface AnimatedSectionProps {
    children: ReactNode
    className?: string
    // Добавим строковый тип, чтобы он не ругался на старые анимации из других файлов
    animation?: any
    delay?: number
}

export function AnimatedSection({
                                    children,
                                    className,
                                    animation = "fade-in-up",
                                    delay = 0,
                                }: AnimatedSectionProps) {

    const variants = {
        "fade-in-up": { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
        "fade-in": { initial: { opacity: 0 }, animate: { opacity: 1 } },
        "scale-in": { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
    }

    // Если пришло название анимации, которой нет в списке, берем "fade-in-up"
    const selectedVariant = variants[animation as keyof typeof variants] || variants["fade-in-up"];

    return (
        <motion.div
            className={className}
            initial={selectedVariant.initial}
            whileInView={selectedVariant.animate}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.6,
                delay: delay / 1000,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    )
}