"use client"

import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Github, Phone } from "lucide-react"

export function Contact() {
    return (
        <Section id="contact" className="bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>
                <div className="mx-auto max-w-md">
                    <Card className="glass-card border-border/50">
                        <CardContent className="p-6 flex flex-col gap-4">
                            <Button size="lg" className="w-full gap-2" asChild>
                                <a href="mailto:vipul03pandey@gmail.com">
                                    <Mail className="h-4 w-4" /> Say Hello
                                </a>
                            </Button>
                            <div className="flex justify-center gap-4 pt-4">
                                <a href="https://www.linkedin.com/in/vipul-pandey-a802a224a/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors">
                                    <Linkedin className="h-5 w-5" />
                                    <span className="sr-only">LinkedIn</span>
                                </a>
                                <a href="https://github.com/vip03pandey" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors">
                                    <Github className="h-5 w-5" />
                                    <span className="sr-only">GitHub</span>
                                </a>
                                <a href="tel:+919958843063" className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors">
                                    <Phone className="h-5 w-5" />
                                    <span className="sr-only">Phone</span>
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Section>
    )
}
