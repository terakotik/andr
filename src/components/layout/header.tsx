
"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, Globe } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
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
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsModalOpen(true);
    if (isMenuOpen) {
      closeMenu();
    }
  };
  
  const navLinks = [
    { href: "/", label: translations.header.home },
    { href: "/#footer-projects", label: translations.header.about },
    { href: "#", label: translations.header.contact, onClick: handleContactClick },
  ];
  

  return (
    <>
      <header className="bg-black text-white sticky top-0 z-50 border-b border-gray-800">
        <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
              <Image src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3Vld2RwdHdlbWp6eHkxaG0yMmh2bDJnYTQ2Mzl0b2dsbnBhMnRhaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U4FkC2VqpeNRHjTDQ5/giphy.gif" alt="AndrGlobal Logo" width={32} height={32} unoptimized className="rounded-full" />
              <span className="text-sm md:text-xl font-bold text-white uppercase font-headline tracking-wide">ANDR GLOBAL FINANCIAL</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={link.onClick}
                className={cn(
                  "text-gray-300 transition-colors hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
              <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800 hover:text-white">
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

            <Button onClick={handleContactClick} className="hidden md:flex rounded-full">
              {translations.header.contactUs}
            </Button>
            <Button
              ref={triggerRef}
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-gray-800 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div ref={menuRef} className="md:hidden bg-black border-t border-gray-800 absolute top-full left-0 w-full">
            <nav className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 hover:text-white text-lg"
                  onClick={(e) => {
                    if (link.onClick) {
                      handleContactClick(e);
                    } else {
                      closeMenu();
                    }
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="w-full mt-2 rounded-full" size="lg" onClick={(e) => {
                  handleContactClick(e as React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>);
              }}>
                <div role="button">{translations.header.contactUs}</div>
              </Button>
            </nav>
          </div>
        )}
      </header>
      {isClient && <ContactModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />}
    </>
  );
}
