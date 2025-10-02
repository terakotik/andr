
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Twitter, Linkedin, Facebook, ChevronRight, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

const socialLinks = [
  { name: 'Twitter', href: '#', icon: <Twitter className="h-5 w-5" /> },
  { name: 'LinkedIn', href: '#', icon: <Linkedin className="h-5 w-5" /> },
  { name: 'Facebook', href: '#', icon: <Facebook className="h-5 w-5" /> },
];

export function Footer() {
  const { translations } = useLanguage();

  const projectLinks = [
    { name: translations.footer.quickLinks.gold, href: '/projects/gold' },
    { name: translations.footer.quickLinks.shop, href: '/projects/shop' },
    { name: translations.footer.quickLinks.consulting, href: '/consulting' },
  ];
  
  const andrGoldImageUrl = "https://dalogo.ru/wp-content/uploads/2019/10/Sajjt-11132-SHokoladnyjj-mini-Slitok-zolota-New-3.jpg";
  const officeAddress = "Alamanda Office, Jl. Bypass Ngurah Rai Br. Kerthayasa No.67 5th Floor";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`;


  return (
    <footer className="bg-secondary/50 text-secondary-foreground" id="footer-projects">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <Separator className="my-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-start text-left">
            <Link href="/" className="flex flex-col items-start mb-4">
               <span className="text-xl font-bold text-primary uppercase font-headline tracking-wide">ANDR GLOBAL FINANCIAL</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs text-left">
              {translations.footer.companyDescription}
            </p>
          </div>
          
          <div className="text-left">
            <h4 className="font-headline font-semibold mb-4">{translations.footer.quickLinks.title}</h4>
            <ul className="space-y-2 text-sm">
              {projectLinks.map(link => (
                 <li key={link.name}><Link href={link.href} className="text-muted-foreground hover:text-foreground">{link.name}</Link></li>
              ))}
              <li><Link href="/#about" className="text-muted-foreground hover:text-foreground">{translations.footer.quickLinks.about}</Link></li>
              <li><Link href="/#contact" className="text-muted-foreground hoverText-foreground">{translations.footer.quickLinks.contact}</Link></li>
            </ul>
          </div>
          
          <div className="text-left">
            <h4 className="font-headline font-semibold mb-4">{translations.footer.followUs.title}</h4>
            <div className="flex justify-start gap-4">
              {socialLinks.map(link => (
                <Button key={link.name} variant="ghost" size="icon" asChild>
                    <Link href={link.href} aria-label={link.name} className="text-muted-foreground hover:text-foreground">
                        {link.icon}
                    </Link>
                </Button>
              ))}
            </div>
          </div>

          <div className="text-left">
            <h4 className="font-headline font-semibold mb-4">{translations.footer.ourOffice.title}</h4>
            <div className="text-sm text-muted-foreground space-y-3">
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-primary transition-colors">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{officeAddress}</span>
                </a>
                <a href="tel:+6289530825574" className="flex items-center gap-3 hover:text-primary transition-colors">
                    <Phone className="w-4 h-4 shrink-0" />
                    <span>+62 895 308 25574 (WhatsApp)</span>
                </a>
                <a href="mailto:sale@andrgf.id" className="flex items-center gap-3 hover:text-primary transition-colors">
                    <Mail className="w-4 h-4 shrink-0" />
                    <span>sale@andrgf.id</span>
                </a>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {translations.footer.copyright}</p>
          <a href="https://www.1target.ru/" target="_blank" rel="noopener noreferrer" className="transition-colors developer-link">
            {translations.footer.developerCredit}
          </a>
        </div>
      </div>
    </footer>
  );
}
