"use client";

import Link from "next/link";
import { ChevronDown, Menu, X, Globe } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage, languages, Language } from '@/context/language-context';
import { ContactModal } from "@/components/contact-modal";
import { useIsMobile } from "@/hooks/use-mobile";

export function Header() {
  const { language, setLanguage, translations } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsModalOpen(true);
    if (isMenuOpen) {
      closeMenu();
    }
  };
  
  const navLinks = [
    { href: "/#about", label: translations.header.about },
    { href: "/consulting", label: translations.header.consulting },
    { href: "/#contact", label: translations.header.contact, onClick: handleContactClick },
  ];

  const projectLinks = [
    { href: "/projects/gold", label: "ANDROGOLD" },
    { href: "/projects/shop", label: "ANDRESHOP" },
  ];

  return (
    <>
      <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex flex-col -my-2" onClick={closeMenu}>
              <span className="text-2xl font-bold text-primary uppercase tracking-wider font-headline">ANDRGLOBAL</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-body">Consulting</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={link.onClick}
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
                {translations.header.projects}
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
                      {Object.values(languages).map((lang: Language) => (
                          <DropdownMenuItem key={lang.code} onSelect={() => setLanguage(lang.code)}>
                              {lang.name} {language === lang.code && <span className="ml-auto">✓</span>}
                          </DropdownMenuItem>
                      ))}
                  </DropdownMenuContent>
              </DropdownMenu>

            <Button onClick={handleContactClick} className="hidden md:flex">
              {translations.header.contactUs}
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
          <div className="md:hidden bg-background border-t absolute top-full left-0 w-full">
            <nav className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-foreground/80 hover:text-foreground text-lg"
                  onClick={link.onClick || closeMenu}
                >
                  {link.label}
                </Link>
              ))}
               <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-between w-full text-foreground/80 hover:text-foreground text-lg">
                  {translations.header.projects}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[calc(100vw-2rem)]">
                  {projectLinks.map((link) => (
                    <DropdownMenuItem key={link.label} asChild>
                      <Link href={link.href} onClick={closeMenu}>{link.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button asChild className="w-full mt-2" size="lg">
                <Link href="/#contact" onClick={handleContactClick}>{translations.header.contactUs}</Link>
              </Button>
            </nav>
          </div>
        )}
      </header>
      {isClient && <ContactModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />}
    </>
  );
}
