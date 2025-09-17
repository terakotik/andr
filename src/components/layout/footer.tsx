
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Twitter, Linkedin, Facebook } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

const socialLinks = [
  { name: 'Twitter', href: '#', icon: <Twitter className="h-5 w-5" /> },
  { name: 'LinkedIn', href: '#', icon: <Linkedin className="h-5 w-5" /> },
  { name: 'Facebook', href: '#', icon: <Facebook className="h-5 w-5" /> },
];

export function Footer() {
  const { translations } = useLanguage();

  const projectLinks = [
    { name: 'ANDRGOLD', description: translations.footer.projects.gold, href: '/projects/gold' },
    { name: 'ANDRSHOP', description: translations.footer.projects.shop, href: '/projects/shop' },
  ];
  
  const andrGoldImageUrl = "https://dalogo.ru/wp-content/uploads/2019/10/Sajjt-11132-SHokoladnyjj-mini-Slitok-zolota-New-3.jpg";


  return (
    <footer className="bg-secondary/50 text-secondary-foreground" id="footer-projects">
      <div className="container mx-auto px-4 md:px-6 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-left md:text-left">
          <div className="md:col-span-1">
            <h3 className="font-headline text-2xl font-semibold mb-2">{translations.footer.ourProjects.title}</h3>
            <p className="text-muted-foreground">
              {translations.footer.ourProjects.subtitle}
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {projectLinks.map((project) => (
              <div key={project.name} className={`bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow relative overflow-hidden group p-6`}>
                {project.name === 'ANDRGOLD' && (
                  <div 
                    className="absolute bottom-2 -right-6 w-32 h-32 bg-contain bg-center bg-no-repeat z-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url(${andrGoldImageUrl})` }}
                  ></div>
                )}
                 <div className="relative z-10">
                    <h4 className="font-headline text-xl font-bold text-primary">{project.name}</h4>
                    <p className="text-muted-foreground mt-2 mb-4">{project.description}</p>
                    <Button asChild variant="outline">
                      <Link href={project.href}>{translations.footer.learnMore}</Link>
                    </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-start text-left">
            <Link href="/" className="flex flex-col items-start mb-4">
              <span className="text-2xl font-bold text-primary uppercase font-headline tracking-normal">ANDRGLOBAL</span>
              <span className="text-xs uppercase tracking-normal text-muted-foreground font-body">financial</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs text-left">
              {translations.footer.companyDescription}
            </p>
          </div>
          
          <div className="text-left">
            <h4 className="font-headline font-semibold mb-4">{translations.footer.quickLinks.title}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/consulting" className="text-muted-foreground hover:text-foreground">{translations.footer.quickLinks.consulting}</Link></li>
              <li><Link href="/#about" className="text-muted-foreground hover:text-foreground">{translations.footer.quickLinks.about}</Link></li>
              <li><Link href="/#contact" className="text-muted-foreground hover:text-foreground">{translations.footer.quickLinks.contact}</Link></li>
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
            <h4 className="font-headline font-semibold mb-4">{translations.footer.subscribe.title}</h4>
            <form className="flex flex-col sm:flex-row gap-2">
              <Input type="email" placeholder={translations.footer.subscribe.placeholder} className="bg-background" />
              <Button type="submit">{translations.footer.subscribe.button}</Button>
            </form>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="text-left text-sm text-muted-foreground">
          © {new Date().getFullYear()} {translations.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
