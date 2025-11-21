"use client"

import { Section } from "@/components/ui/section"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
    {
        title: "StyleNest E-Commerce Platform",
        description: "A scalable e-commerce solution with real-time cart operations, order processing, and inventory management. Integrated PayPal SDK for secure payments.",
        tech: ["MERN Stack", "Redux", "PayPal SDK", "TailwindCSS"],
        links: { demo: "https://e-commerce-app-fxv2.vercel.app/", github: "https://github.com/vip03pandey/eCommerce-App" } // Placeholders as per resume "Website GitHub" text
    },
    {
        title: "ChatPDF AI Assistant",
        description: "Intelligent PDF interaction system using RAG with OpenAI. Features automated PDF embedding, secure auth with Clerk, and real-time chat interface.",
        tech: ["Next.js", "OpenAI", "AWS S3", "Pinecone", "Clerk"],
        links: { demo: "https://chat-pdf-pied.vercel.app/", github: "https://github.com/vip03pandey/Chat-PDF" }
    },
    {
        title: "Open Scroll Blog App",
        description: "Full-stack blogging platform with interactive commenting, AI-powered title suggestions, and optimized backend pagination for large datasets.",
        tech: ["React", "Node.js", "MongoDB", "OpenAI API"],
        links: { demo: "https://blog-app-djb5-git-main-vip03pandeys-projects.vercel.app/", github: "https://github.com/vip03pandey/Blog-App" }
    }
]

export function Projects() {
    return (
        <Section id="projects" className="bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        A selection of projects that demonstrate my technical expertise and problem-solving abilities.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <Card key={index} className="glass-card flex flex-col h-full hover:border-primary/50 transition-colors">
                            <CardHeader>
                                <CardTitle className="text-xl">{project.title}</CardTitle>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.tech.map((t) => (
                                        <Badge key={t} variant="outline" className="text-xs border-primary/20 bg-primary/5">
                                            {t}
                                        </Badge>
                                    ))}
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <CardDescription className="text-base">
                                    {project.description}
                                </CardDescription>
                            </CardContent>
                            <CardFooter className="flex gap-2 pt-4">
                                <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                        <Github className="h-4 w-4" /> Code
                                    </a>
                                </Button>
                                <Button size="sm" className="w-full gap-2" asChild>
                                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="h-4 w-4" /> Live Demo
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    )
}
