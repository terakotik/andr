
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ChevronRight, Briefcase, Gem, ShoppingCart } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

export default function Home() {
  const { translations } = useLanguage();

  const projectLinks = [
    { name: translations.home.ourProjects.goldTitle, icon: <Gem className="h-12 w-12 text-primary"/>, description: translations.home.ourProjects.gold, href: '/projects/gold' },
    { name: translations.home.ourProjects.shopTitle, icon: <ShoppingCart className="h-12 w-12 text-primary"/>, description: translations.home.ourProjects.shop, href: '/projects/shop' },
    { name: translations.home.ourProjects.consultingTitle, icon: <Briefcase className="h-12 w-12 text-primary"/>, description: translations.home.ourProjects.consulting, href: '/consulting' },
  ];

  return (
    <div className="flex flex-col">

      <section className="relative bg-background py-16 md:py-24 text-white">
        <div className="absolute top-0 left-0 w-full h-full bg-black overflow-hidden">
          <iframe 
            src="https://player.vimeo.com/video/407547341?background=1&autoplay=1&loop=1&byline=0&title=0"
            className="absolute top-1/2 left-1/2 w-[177.77vh] min-w-[100vw] h-[56.25vw] min-h-[100vh] -translate-x-1/2 -translate-y-1/2 z-0 opacity-30 object-cover"
            frameBorder="0" 
            allow="autoplay; fullscreen" 
            allowFullScreen
          ></iframe>
          <div className="pixel-overlay" style={{backgroundSize: '3px 3px'}}></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[60vh]">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-headline font-bold text-white">
                {translations.home.hero.title}
              </h1>
              <p className="text-lg text-gray-200">
                {translations.home.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" variant="outline" asChild className="rounded-full border-white text-white hover:bg-primary hover:text-primary-foreground hover:border-primary">
                  <Link href="/#projects">
                    <ChevronRight className="mr-2 h-4 w-4" />
                    {translations.home.hero.servicesButton}
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-full w-full">
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-secondary/50 py-16 md:py-24" id="projects">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">{translations.home.ourProjects.title}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {translations.home.consultingDirections.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projectLinks.map((project) => (
              <Link key={project.name} href={project.href} className="group block">
                <Card className="bg-card border rounded-lg p-8 h-full flex flex-col transition-all duration-300 group-hover:border-primary group-hover:shadow-lg">
                  <CardHeader className="flex-row items-center gap-4 p-0 mb-4">
                      <div className="p-3 bg-primary/10 rounded-full w-fit flex-shrink-0">
                        {project.icon}
                      </div>
                      <CardTitle className="font-headline text-3xl text-primary">{project.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col p-0">
                    <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
                    <Button variant="outline" className="mt-auto">
                      {translations.home.learnMore}
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
