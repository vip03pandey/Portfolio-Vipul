"use client"

import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Github, Linkedin, Mail, FileText, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
    return (
        <Section className="flex min-h-[90vh] flex-col justify-center">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-start gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
                    >
                        🚀 Available for new opportunities
                    </motion.div>
                    <div className="space-y-2">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
                        >
                            Hi, I&apos;m <span className="text-gradient-primary">Vipul Pandey</span>
                        </motion.h1>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-2xl font-medium text-muted-foreground sm:text-3xl md:text-4xl"
                        >
                            Full Stack Developer & AI Enthusiast
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="max-w-[600px] text-lg text-muted-foreground md:text-xl"
                    >
                        I build scalable web applications and intelligent AI solutions. Passionate about transforming ideas into seamless digital experiences.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Button size="lg" className="gap-2">
                            View Projects <ArrowRight className="h-4 w-4" />
                        </Button>
                        <Button size="lg" variant="outline" className="gap-2" asChild>
                            <a href="https://drive.google.com/file/d/1fD0OtFtfN_7Cx5vWe5a2KEJPoWtlCi20/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                                <FileText className="h-4 w-4" /> Resume
                            </a>
                        </Button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex gap-4 text-muted-foreground"
                    >
                        <a href="https://github.com/vip03pandey" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                            <Github className="h-6 w-6" />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/vipul-pandey-a802a224a/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                            <Linkedin className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="mailto:vipul03pandey@gmail.com" className="hover:text-primary transition-colors">
                            <Mail className="h-6 w-6" />
                            <span className="sr-only">Email</span>
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute right-0 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />
        </Section>
    )
}
