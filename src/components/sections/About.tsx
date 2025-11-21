import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Brain, Rocket } from "lucide-react"

export function About() {
    return (
        <Section id="about" className="bg-black">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">About Me</h2>
                    <p className="max-w-[700px] text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Passionate about technology, problem-solving, and continuous learning.
                    </p>
                </div>
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    <div className="space-y-4 text-neutral-400 text-lg">
                        <p>
                            I am a dedicated <span className="text-blue-400 font-semibold">Full Stack Developer</span> with a strong foundation in modern web technologies. My journey began with a curiosity for how things work, which evolved into a passion for building efficient and scalable applications.
                        </p>
                        <p>
                            I specialize in the <span className="text-white font-medium">MERN stack</span> (MongoDB, Express.js, React, Node.js) and have a keen interest in <span className="text-white font-medium">Artificial Intelligence</span>. I love exploring new tools and frameworks to stay ahead in the rapidly evolving tech landscape.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new places, reading tech blogs, or experimenting with new AI models.
                        </p>
                    </div>
                    <Card className="glass-card border-neutral-800 bg-neutral-900/50 rounded-none p-6 hover:border-blue-500/50 transition-all duration-300">
                        <CardContent className="p-0 space-y-6">
                            <h3 className="text-xl font-bold text-white mb-4 border-b border-neutral-800 pb-2">Key Highlights</h3>
                            <div className="grid gap-4">
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 p-1 bg-blue-500/10 rounded-none border border-blue-500/20">
                                        <Code2 className="h-5 w-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Full Stack Development</h4>
                                        <p className="text-sm text-neutral-400">Proficient in building end-to-end web applications using the MERN stack.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 p-1 bg-blue-500/10 rounded-none border border-blue-500/20">
                                        <Brain className="h-5 w-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">AI Integration</h4>
                                        <p className="text-sm text-neutral-400">Experience in integrating AI models (OpenAI) into web applications.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 p-1 bg-blue-500/10 rounded-none border border-blue-500/20">
                                        <Rocket className="h-5 w-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Performance Optimization</h4>
                                        <p className="text-sm text-neutral-400">Focused on writing clean, efficient, and optimized code.</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Section>
    )
}
