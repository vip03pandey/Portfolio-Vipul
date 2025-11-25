"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
]

export function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tighter">
                    VP<span className="text-primary">.</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                    <a
                        href="mailto:vipul03pandey@gmail.com"
                        className="inline-flex h-9 items-center justify-center rounded-md border border-neutral-800 bg-neutral-950 px-4 py-2 text-sm font-medium text-neutral-300 shadow-sm hover:bg-neutral-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 transition-colors"
                    >
                        Hire Me
                    </a>
                </nav>

                {/* Mobile Nav Toggle */}
                <button
                    className="md:hidden p-2 text-muted-foreground hover:text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Nav Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-background border-b border-border/50 p-4 md:hidden flex flex-col gap-4 animate-accordion-down">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <a
                            href="mailto:vipul03pandey@gmail.com"
                            className="inline-flex h-9 w-full items-center justify-center rounded-md border border-neutral-800 bg-neutral-950 px-4 py-2 text-sm font-medium text-neutral-300 shadow-sm hover:bg-neutral-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 transition-colors"
                        >
                            Hire Me
                        </a>
                    </div>
                )}
            </div>
        </header>
    )
}
