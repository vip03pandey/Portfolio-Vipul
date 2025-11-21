"use client"

import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skills = {
    "Programming Languages": ["C++", "JavaScript", "Python", "TypeScript"],
    "Frontend Technologies": ["React.js", "Next.js", "Redux", "TailwindCSS", "HTML5", "CSS3", "ShadCN UI", "Aceternity UI"],
    "Backend Technologies": ["Node.js", "Express.js", "RESTful APIs"],
    "Databases": ["MongoDB", "PostgreSQL", "MySQL", "NeonDB", "Pinecone", "Prisma", "Drizzle ORM"],
    "Tools & Cloud": ["AWS S3", "Git", "GitHub", "Postman", "Clerk", "Supabase", "Redis", "Docker"],
    "AI/ML Technologies": ["LangChain", "Hugging Face", "LangGraph", "RAG"]
}

export function Skills() {
    return (
        <Section id="skills" className="overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Skills</h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        A comprehensive toolkit that enables me to build robust and scalable solutions.
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-8">
                {/* Row 1: Languages & Frontend */}
                <div className="relative flex overflow-hidden">
                    <div className="animate-marquee flex gap-4 whitespace-nowrap py-2">
                        {[...skills["Programming Languages"], ...skills["Frontend Technologies"]].map((skill, i) => (
                            <Badge key={`r1-${i}`} variant="secondary" className="text-lg py-2 px-4 bg-secondary/50 hover:bg-secondary/80 border border-white/5">
                                {skill}
                            </Badge>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {[...skills["Programming Languages"], ...skills["Frontend Technologies"]].map((skill, i) => (
                            <Badge key={`r1-dup-${i}`} variant="secondary" className="text-lg py-2 px-4 bg-secondary/50 hover:bg-secondary/80 border border-white/5">
                                {skill}
                            </Badge>
                        ))}
                        {[...skills["Programming Languages"], ...skills["Frontend Technologies"]].map((skill, i) => (
                            <Badge key={`r1-dup2-${i}`} variant="secondary" className="text-lg py-2 px-4 bg-secondary/50 hover:bg-secondary/80 border border-white/5">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Row 2: Backend & Databases */}
                <div className="relative flex overflow-hidden">
                    <div className="animate-marquee-reverse flex gap-4 whitespace-nowrap py-2">
                        {[...skills["Backend Technologies"], ...skills["Databases"]].map((skill, i) => (
                            <Badge key={`r2-${i}`} variant="secondary" className="text-lg py-2 px-4 bg-secondary/50 hover:bg-secondary/80 border border-white/5">
                                {skill}
                            </Badge>
                        ))}
                        {[...skills["Backend Technologies"], ...skills["Databases"]].map((skill, i) => (
                            <Badge key={`r2-dup-${i}`} variant="secondary" className="text-lg py-2 px-4 bg-secondary/50 hover:bg-secondary/80 border border-white/5">
                                {skill}
                            </Badge>
                        ))}
                        {[...skills["Backend Technologies"], ...skills["Databases"]].map((skill, i) => (
                            <Badge key={`r2-dup2-${i}`} variant="secondary" className="text-lg py-2 px-4 bg-secondary/50 hover:bg-secondary/80 border border-white/5">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Row 3: Tools & AI */}
                <div className="relative flex overflow-hidden">
                    <div className="animate-marquee flex gap-4 whitespace-nowrap py-2">
                        {[...skills["Tools & Cloud"], ...skills["AI/ML Technologies"]].map((skill, i) => (
                            <Badge key={`r3-${i}`} variant="secondary" className="text-lg py-2 px-4 bg-secondary/50 hover:bg-secondary/80 border border-white/5">
                                {skill}
                            </Badge>
                        ))}
                        {[...skills["Tools & Cloud"], ...skills["AI/ML Technologies"]].map((skill, i) => (
                            <Badge key={`r3-dup-${i}`} variant="secondary" className="text-lg py-2 px-4 bg-secondary/50 hover:bg-secondary/80 border border-white/5">
                                {skill}
                            </Badge>
                        ))}
                        {[...skills["Tools & Cloud"], ...skills["AI/ML Technologies"]].map((skill, i) => (
                            <Badge key={`r3-dup2-${i}`} variant="secondary" className="text-lg py-2 px-4 bg-secondary/50 hover:bg-secondary/80 border border-white/5">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    )
}
