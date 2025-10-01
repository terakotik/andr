
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle2, ChevronRight, Landmark, Briefcase, Scale, FileText, Globe, ShoppingCart, Gem } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ContactForm } from '@/components/contact-form';
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from '@/context/language-context';

export default function Home() {
  const { translations } = useLanguage();
  const heroInvestImage = PlaceHolderImages.find(p => p.id === 'hero-invest');

  const projectLinks = [
    { name: 'ANDRGOLD', icon: <Gem className="h-10 w-10 text-primary"/>, description: translations.home.ourProjects.gold, href: '/projects/gold' },
    { name: 'ANDRSHOP', icon: <ShoppingCart className="h-10 w-10 text-primary"/>, description: translations.home.ourProjects.shop, href: '/projects/shop' },
    { name: 'Consulting', icon: <Briefcase className="h-10 w-10 text-primary"/>, description: translations.home.ourProjects.consulting, href: '/consulting' },
  ];

  const consultingServices = [
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: translations.consulting.services.management.title,
      description: translations.consulting.services.management.description,
    },
    {
      icon: <Landmark className="h-10 w-10 text-primary" />,
      title: translations.consulting.services.financial.title,
      description: translations.consulting.services.financial.description,
    },
    {
      icon: <Scale className="h-10 w-10 text-primary" />,
      title: translations.consulting.services.planning.title,
      description: translations.consulting.services.planning.description,
    },
     {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: translations.consulting.services.accreditive.title,
      description: translations.consulting.services.accreditive.description,
    },
  ];

  return (
    <div className="flex flex-col">

      <section className="relative bg-background py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black">
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
              <Card key={project.name} className="hover:shadow-xl transition-shadow duration-300 rounded-lg flex flex-col">
                <CardHeader className="flex-row items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full w-fit flex-shrink-0">
                      {project.icon}
                    </div>
                    <CardTitle className="font-headline text-2xl text-primary">{project.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  <Button asChild variant="outline">
                    <Link href={project.href}>{translations.home.learnMore}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="bg-background py-16 md:py-24" id="about">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg group">
                <Image
                    src="https://img.freepik.com/premium-photo/urban-business-man-casual-businessman-wearing-suit-jacket-portrait-mature-businessman-ambitions_265223-140824.jpg?semt=ais_hybrid&w=740&q=80"
                    alt={translations.home.whyChooseUs.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint="businessman portrait"
                />
                <div className="absolute inset-0 bg-primary/10"></div>
            </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">{translations.home.whyChooseUs.title}</h2>
            <p className="text-lg text-muted-foreground">
            {translations.home.whyChooseUs.subtitle}
            </p>
            <ul className="space-y-4">
              {translations.home.whyChooseUs.points.map((point: string) => (
                <li key={point} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                  <span className="text-lg text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
             <div className="pt-4">
                 <Button asChild size="lg" variant="outline">
                    <Link href="/#contact">{translations.home.whyChooseUs.aboutUsButton}</Link>
                </Button>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-secondary/50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
              <div className="text-center space-y-4 mb-12">
                  <h2 className="text-3xl md:text-4xl font-headline font-bold">{translations.home.testimonials.title}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {translations.home.testimonials.reviews.map((testimonial: { name: string; title: string; avatar: string; text: string; }) => (
                      <Card key={testimonial.name} className="bg-card rounded-lg">
                          <CardContent className="p-6">
                              <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                              <div className="flex items-center gap-4">
                                  <Avatar>
                                      <div className="relative w-full h-full">
                                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                        <div className="absolute inset-0 bg-primary/10 rounded-full"></div>
                                      </div>
                                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <div>
                                      <p className="font-semibold">{testimonial.name}</p>
                                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                  </div>
                              </div>
                          </CardContent>
                      </Card>
                  ))}
              </div>
          </div>
      </section>

      {/* Consulting Services Section */}
      <section className="py-16 md:py-24" id="services">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold">{translations.consulting.consultingServicesSection.title}</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {translations.consulting.consultingServicesSection.subtitle}
                </p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                {consultingServices.map((service) => (
                <Card key={service.title} className="flex flex-col md:flex-row items-center md:items-start overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/50 transform hover:-translate-y-1 text-center md:text-left rounded-lg">
                    <div className="p-6 flex-shrink-0">
                      <div className="p-4 bg-secondary/50 rounded-full w-fit">
                        {service.icon}
                      </div>
                    </div>
                    <div className="p-6 pt-0 md:pt-6 md:border-l border-border/70 w-full">
                      <CardTitle className="font-headline text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </div>
                </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-background" id="contact">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">{translations.home.startCollaboration.title}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
             {translations.home.startCollaboration.subtitle}
            </p>
          </div>
          <Card className="max-w-2xl mx-auto rounded-lg bg-secondary/50">
              <CardHeader>
                <CardTitle>{translations.home.startCollaboration.formTitle}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                  <ContactForm />
              </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
