"use client"

import { Button } from "@/components/ui/moving-border"
import { Section } from "@/components/ui/section"
import { Github, Linkedin, Mail, FileText, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
    return (
        <Section className="flex min-h-[90vh] flex-col justify-center relative overflow-hidden bg-black">
            {/* Spotlight Effect */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-50%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15)_0%,rgba(0,0,0,0)_50%)] animate-spotlight opacity-0" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-start gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center rounded-none border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300"
                    >
                        🚀 Available for new opportunities
                    </motion.div>
                    <div className="space-y-2">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white"
                        >
                            Hi, I&apos;m <span className="text-gradient-primary">Vipul Pandey</span>
                        </motion.h1>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-2xl font-medium text-neutral-400 sm:text-3xl md:text-4xl"
                        >
                            Full Stack Developer & AI Enthusiast
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="max-w-[600px] text-lg text-neutral-500 md:text-xl"
                    >
                        I build scalable web applications and intelligent AI solutions. Passionate about transforming ideas into seamless digital experiences.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Button
                            borderRadius="0rem"
                            className="bg-black text-white border-neutral-800 hover:bg-neutral-900"
                        >
                            <span className="flex items-center gap-2">View Projects <ArrowRight className="h-4 w-4" /></span>
                        </Button>

                        {/* Standard Button for Resume, but styled sharply */}
                        <a href="https://drive.google.com/file/d/1fD0OtFtfN_7Cx5vWe5a2KEJPoWtlCi20/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="inline-flex h-16 w-40 items-center justify-center border border-neutral-800 bg-black text-sm font-medium text-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                            <span className="flex items-center gap-2"><FileText className="h-4 w-4" /> Resume</span>
                        </a>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex gap-4 text-neutral-500"
                    >
                        <a href="https://github.com/vip03pandey" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                            <Github className="h-6 w-6" />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/vipul-pandey-a802a224a/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                            <Linkedin className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="mailto:vipul03pandey@gmail.com" className="hover:text-blue-400 transition-colors">
                            <Mail className="h-6 w-6" />
                            <span className="sr-only">Email</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </Section>
    )
}
