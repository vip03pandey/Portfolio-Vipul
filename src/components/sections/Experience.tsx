"use client"

import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

const experiences = [
    {
        company: "Artixio Lifesciences Private Limited",
        role: "Software Development Engineer Intern",
        period: "August 2025 - Present",
        location: "Remote",
        description: [
            "Developed a document Q&A system using LangChain and vector embeddings, enabling users to query regulatory documents with sub-5-second response times.",
            "Built a containerized platform that ingests 29K+ FDA drug records, transforms nested JSON into 300K+ entries, and loads them into PostgreSQL with duplicate detection.",
            "Designed and optimized API endpoints to streamline project, accelerating regulatory workflows by 40%.",
            "Designed a React + TypeScript dashboard with custom hooks for state management, featuring role-based file access, advanced filtering, and collaborative review workflow."
        ],
        skills: ["LangChain", "PostgreSQL", "React", "TypeScript", "Docker", "API Design"]
    }
]

export function Experience() {
    return (
        <Section id="experience" className="bg-black">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Professional Experience</h2>
                    <p className="max-w-[700px] text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        My journey in the tech industry and the value I've delivered.
                    </p>
                </div>
                <div className="mx-auto max-w-3xl space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-0">
                            {/* Timeline line for desktop */}
                            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-neutral-800 -translate-x-1/2" />

                            <div className="relative z-10">
                                <Card className="glass-card border-neutral-800 bg-neutral-900/50 rounded-none hover:border-yellow-500/50 transition-all duration-300">
                                    <CardHeader>
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                            <div className="flex items-center gap-2">
                                                <div className="p-2 rounded-none bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                                                    <Briefcase className="h-4 w-4" />
                                                </div>
                                                <div>
                                                    <CardTitle className="text-xl text-white">{exp.role}</CardTitle>
                                                    <CardDescription className="text-base font-medium text-neutral-400">{exp.company}</CardDescription>
                                                </div>
                                            </div>
                                            <div className="text-sm text-yellow-300 bg-yellow-500/10 border border-yellow-500/20 px-3 py-1 rounded-none w-fit">
                                                {exp.period}
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <ul className="list-disc list-outside ml-5 space-y-2 text-neutral-400">
                                            {exp.description.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {exp.skills.map((skill) => (
                                                <Badge key={skill} variant="secondary" className="bg-neutral-800 text-neutral-300 hover:bg-neutral-700 rounded-none border border-white/5">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
