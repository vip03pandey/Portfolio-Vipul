"use client"

import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Brain, Rocket, Users } from "lucide-react"

export function About() {
    return (
        <Section id="about" className="bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 md:grid-cols-2 lg:gap-24 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            About Me
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            I am a final year B.Tech student in Electronics & Communication Engineering at Jaypee Institute of Information Technology.
                            My journey in tech is driven by a passion for solving complex problems through code.
                        </p>
                        <p className="text-lg text-muted-foreground">
                            Currently working as a Software Development Engineer Intern at Artixio Lifesciences, I specialize in building full-stack applications
                            and integrating AI/ML capabilities to enhance user experiences. I love working with the MERN stack, Next.js, and exploring the latest in Generative AI.
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="flex items-center gap-2">
                                <Code2 className="h-5 w-5 text-primary" />
                                <span className="font-medium">Full Stack Dev</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Brain className="h-5 w-5 text-primary" />
                                <span className="font-medium">AI Integration</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Rocket className="h-5 w-5 text-primary" />
                                <span className="font-medium">Performance Optimization</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="h-5 w-5 text-primary" />
                                <span className="font-medium">Collaborative</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary to-purple-600 opacity-20 blur-xl" />
                        <Card className="relative glass-card border-none bg-card/50">
                            <CardContent className="p-8 space-y-4">
                                <div className="flex justify-between items-center border-b border-border/50 pb-4">
                                    <span className="font-semibold">Experience</span>
                                    <span className="text-muted-foreground">Internship</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-border/50 pb-4">
                                    <span className="font-semibold">Education</span>
                                    <span className="text-muted-foreground">B.Tech (2026)</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-border/50 pb-4">
                                    <span className="font-semibold">Projects</span>
                                    <span className="text-muted-foreground">5+ Major Builds</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold">Location</span>
                                    <span className="text-muted-foreground">Noida, India</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </Section>
    )
}
