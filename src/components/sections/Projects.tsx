import { Section } from "@/components/ui/section"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Code2, Terminal, Globe } from "lucide-react"
import Image from "next/image"

const projects = [
    {
        title: "StyleNest E-Commerce",
        description: "Scalable e-commerce with real-time cart, order processing, and PayPal integration.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[10rem] rounded-none overflow-hidden relative">
                <Image
                    src="/projects/stylenest.png"
                    alt="StyleNest E-Commerce"
                    fill
                    className="object-cover object-center group-hover/bento:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-black/20 group-hover/bento:bg-black/0 transition-colors duration-200" />
            </div>
        ),
        icon: <Globe className="h-4 w-4 text-neutral-500" />,
        tech: ["MERN Stack", "Redux", "PayPal SDK", "TailwindCSS"],
        links: { demo: "https://e-commerce-app-fxv2.vercel.app/", github: "https://github.com/vip03pandey/eCommerce-App" }
    },
    {
        title: "ChatPDF AI Assistant",
        description: "RAG-based PDF interaction system with OpenAI, Pinecone, and Clerk auth.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[10rem] rounded-none overflow-hidden relative">
                <Image
                    src="/projects/chatpdf.png"
                    alt="ChatPDF AI Assistant"
                    fill
                    className="object-cover object-center group-hover/bento:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-black/20 group-hover/bento:bg-black/0 transition-colors duration-200" />
            </div>
        ),
        icon: <Terminal className="h-4 w-4 text-neutral-500" />,
        tech: ["Next.js", "OpenAI", "AWS S3", "Pinecone", "Clerk"],
        links: { demo: "https://chat-pdf-pied.vercel.app/", github: "https://github.com/vip03pandey/Chat-PDF" }
    },
    {
        title: "Open Scroll Blog",
        description: "Full-stack blog platform with AI title suggestions and optimized pagination.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[10rem] rounded-none overflow-hidden relative">
                <Image
                    src="/projects/openscroll.png"
                    alt="Open Scroll Blog"
                    fill
                    className="object-cover object-center group-hover/bento:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-black/20 group-hover/bento:bg-black/0 transition-colors duration-200" />
            </div>
        ),
        icon: <Code2 className="h-4 w-4 text-neutral-500" />,
        tech: ["React", "Node.js", "MongoDB", "OpenAI API"],
        links: { demo: "https://blog-app-djb5-git-main-vip03pandeys-projects.vercel.app/", github: "https://github.com/vip03pandey/Blog-App" }
    }
]

export function Projects() {
    return (
        <Section id="projects" className="bg-black">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Featured Projects</h2>
                    <p className="max-w-[700px] text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Building the future, one line of code at a time.
                    </p>
                </div>
                <BentoGrid className="max-w-6xl mx-auto">
                    {projects.map((project, i) => (
                        <BentoGridItem
                            key={i}
                            title={project.title}
                            description={
                                <div className="flex flex-col gap-4">
                                    <span className="text-neutral-400 text-sm">{project.description}</span>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <Badge key={t} variant="outline" className="text-[10px] border-blue-500/20 bg-blue-500/5 text-blue-200 rounded-none">
                                                {t}
                                            </Badge>
                                        ))}
                                    </div>
                                    <div className="flex gap-3 mt-2">
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-400 hover:text-blue-400 flex items-center gap-1 transition-colors">
                                            <Github className="h-3 w-3" /> Code
                                        </a>
                                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-400 hover:text-blue-400 flex items-center gap-1 transition-colors">
                                            <ExternalLink className="h-3 w-3" /> Live
                                        </a>
                                    </div>
                                </div>
                            }
                            header={project.header}
                            icon={project.icon}
                            className=""
                        />
                    ))}
                </BentoGrid>
            </div>
        </Section>
    )
}
