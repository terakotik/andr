"use client";

import Link from "next/link";
import { ChevronDown, Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AndrGlobalLogo } from "@/components/icons";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: "/#about", label: "О нас" },
  { href: "/consulting", label: "Консалтинг" },
  { href: "/#contact", label: "Контакты" },
];

const projectLinks = [
  { href: "/projects/gold", label: "ANDROGOLD" },
  { href: "/projects/shop", label: "ANDRESHOP" },
];

const languages = [
    { code: 'RU', name: 'Русский' },
    { code: 'EN', name: 'English' },
    { code: 'CN', name: '中文' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState('RU');

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold text-primary">
          <AndrGlobalLogo className="h-7 w-7" />
          <span>AndrGlobal</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-foreground/80 transition-colors hover:text-foreground",
                (pathname === link.href || (link.href.includes('#') && pathname === '/')) && "text-foreground font-semibold"
              )}
            >
              {link.label}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-foreground/80 transition-colors hover:text-foreground focus:outline-none">
              Наши проекты
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {projectLinks.map((link) => (
                <DropdownMenuItem key={link.label} asChild>
                  <Link href={link.href}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex items-center gap-2">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Globe className="h-5 w-5" />
                        <span className="sr-only">Выбрать язык</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {languages.map((lang) => (
                        <DropdownMenuItem key={lang.code} onSelect={() => setCurrentLang(lang.code)}>
                            {lang.name} {currentLang === lang.code && <span className="ml-auto">✓</span>}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>

          <Button asChild className="hidden md:flex">
            <Link href="/#contact">Связаться с нами</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="flex flex-col gap-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-foreground/80 hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
             <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-between w-full text-foreground/80 hover:text-foreground">
                Наши проекты
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[calc(100vw-2rem)]">
                {projectLinks.map((link) => (
                  <DropdownMenuItem key={link.label} asChild>
                    <Link href={link.href} onClick={() => setIsMenuOpen(false)}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button asChild className="w-full mt-2">
              <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>Связаться с нами</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
