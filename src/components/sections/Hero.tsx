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
                <div className="absolute top-[-50%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(245,197,24,0.15)_0%,rgba(0,0,0,0)_50%)] animate-spotlight opacity-0" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col items-start gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-sm font-medium text-yellow-300"
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
                                borderRadius="0.5rem"
                                className="bg-primary text-primary-foreground font-semibold border-none hover:bg-primary/90"
                            >
                                <span className="flex items-center gap-2">View Projects <ArrowRight className="h-4 w-4" /></span>
                            </Button>

                            {/* Standard Button for Resume, but styled sharply */}
                            <a href="https://drive.google.com/file/d/1fD0OtFtfN_7Cx5vWe5a2KEJPoWtlCi20/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="inline-flex h-12 w-40 items-center justify-center rounded-md border border-neutral-800 bg-neutral-950 text-sm font-medium text-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                                <span className="flex items-center gap-2"><FileText className="h-4 w-4" /> Resume</span>
                            </a>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex gap-4 text-neutral-500"
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

                    {/* Code Snippet Component */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="hidden lg:block relative"
                    >
                        <div className="relative rounded-xl bg-[#0a0a0a] border border-neutral-800 shadow-2xl overflow-hidden">
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-900/50">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                <div className="ml-2 text-xs text-neutral-500 font-mono">developer.ts</div>
                            </div>
                            <div className="p-6 overflow-x-auto">
                                <pre className="font-mono text-sm leading-relaxed">
                                    <code className="text-neutral-300">
                                        <span className="text-purple-400">const</span> <span className="text-yellow-400">developer</span> <span className="text-purple-400">=</span> <span className="text-neutral-300">{`{`}</span>{'\n'}
                                        {'  '}<span className="text-blue-400">name</span>: <span className="text-green-400">&apos;Vipul Pandey&apos;</span>,{'\n'}
                                        {'  '}<span className="text-blue-400">role</span>: <span className="text-green-400">&apos;Full Stack Developer&apos;</span>,{'\n'}
                                        {'  '}<span className="text-blue-400">skills</span>: <span className="text-neutral-300">[</span>{'\n'}
                                        {'    '}<span className="text-green-400">&apos;React&apos;</span>, <span className="text-green-400">&apos;Next.js&apos;</span>, <span className="text-green-400">&apos;Node.js&apos;</span>,{'\n'}
                                        {'    '}<span className="text-green-400">&apos;TypeScript&apos;</span>, <span className="text-green-400">&apos;AI Integration&apos;</span>{'\n'}
                                        {'  '}<span className="text-neutral-300">]</span>,{'\n'}
                                        {'  '}<span className="text-blue-400">hardWorker</span>: <span className="text-orange-400">true</span>,{'\n'}
                                        {'  '}<span className="text-blue-400">quickLearner</span>: <span className="text-orange-400">true</span>,{'\n'}
                                        {'  '}<span className="text-blue-400">problemSolver</span>: <span className="text-orange-400">true</span>,{'\n'}
                                        {'  '}<span className="text-blue-400">hireable</span>: <span className="text-purple-400">function</span>() <span className="text-neutral-300">{`{`}</span>{'\n'}
                                        {'    '}<span className="text-purple-400">return</span> <span className="text-orange-400">true</span>;{'\n'}
                                        {'  '}<span className="text-neutral-300">{`}`}</span>{'\n'}
                                        <span className="text-neutral-300">{`}`}</span>;
                                    </code>
                                </pre>
                            </div>
                        </div>
                        {/* Decorative Glow */}
                        <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-full opacity-20" />
                    </motion.div>
                </div>
            </div>
        </Section>
    )
}
