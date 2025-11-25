import { Github, Linkedin, Mail, Twitter, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
    return (
        <footer className="bg-black border-t border-neutral-800 pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-8 mb-20">
                    <div className="space-y-2">
                        <p className="text-neutral-500 font-medium tracking-wide text-sm uppercase">Get in touch</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Ready to start a <span className="text-primary">project?</span>
                        </h2>
                        <p className="text-neutral-400 max-w-lg mx-auto text-lg">
                            Let&apos;s collaborate and build something amazing together.
                        </p>
                    </div>

                    <div className="w-full max-w-md relative">
                        <div className="flex items-center gap-2 p-2 bg-neutral-900/50 border border-neutral-800 rounded-lg backdrop-blur-sm">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-transparent border-none outline-none px-4 text-neutral-300 placeholder:text-neutral-600"
                            />
                            <Button size="icon" className="bg-neutral-800 hover:bg-neutral-700 text-white rounded-md h-10 w-10 shrink-0">
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10 border-t border-neutral-900">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold tracking-tighter text-white">
                            VP<span className="text-primary">.</span>
                        </span>
                        <span className="text-neutral-600">/</span>
                        <a href="mailto:vipul03pandey@gmail.com" className="text-neutral-500 hover:text-white transition-colors text-sm">
                            vipul03pandey@gmail.com
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="https://github.com/vip03pandey" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white rounded-md border border-neutral-800 transition-all duration-300">
                            <Github className="h-5 w-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/vipul-pandey-a802a224a/" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white rounded-md border border-neutral-800 transition-all duration-300">
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="mailto:vipul03pandey@gmail.com" className="p-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white rounded-md border border-neutral-800 transition-all duration-300">
                            <Mail className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-10 text-xs text-neutral-600">
                    <p>© {new Date().getFullYear()} Vipul Pandey. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-neutral-400 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
