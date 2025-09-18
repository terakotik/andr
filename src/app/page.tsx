
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle2, ChevronRight, Landmark, Briefcase, Scale, FileText } from 'lucide-react';
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

  const featuredServices = [
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: translations.home.featuredServices.management.title,
      description: translations.home.featuredServices.management.description,
      details: translations.home.featuredServices.management.details,
    },
    {
      icon: <Landmark className="h-10 w-10 text-primary" />,
      title: translations.home.featuredServices.financial.title,
      description: translations.home.featuredServices.financial.description,
      details: translations.home.featuredServices.financial.details,
    },
    {
      icon: <Scale className="h-10 w-10 text-primary" />,
      title: translations.home.featuredServices.planning.title,
      description: translations.home.featuredServices.planning.description,
      details: translations.home.featuredServices.planning.details,
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: translations.home.featuredServices.accreditive.title,
      description: translations.home.featuredServices.accreditive.description,
      details: translations.home.featuredServices.accreditive.details,
    },
  ];

  const projectLinks = [
    { name: 'ANDRGOLD', description: translations.home.ourProjects.gold, href: '/projects/gold' },
    { name: 'ANDRSHOP', description: translations.home.ourProjects.shop, href: '/projects/shop' },
  ];

  return (
    <div className="flex flex-col">

      <section className="relative bg-background py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0"
            >
                <source src="https://videos.pexels.com/video-files/853874/853874-hd_1920_1080_25fps.mp4" type="video/mp4" />
            </video>
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
                <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-primary hover:text-primary-foreground hover:border-primary">
                  <Link href="/consulting">
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

      {/* Featured Services Section */}
      <section className="py-16 md:py-24 bg-secondary/50" id="services">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">{translations.home.consultingDirections.title}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {translations.home.consultingDirections.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {featuredServices.map((service, index) => (
              <div key={service.title} className="flex flex-col">
                <Card className="flex-grow rounded-lg">
                  <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left p-6">
                      <div className="p-4 bg-primary/10 rounded-full w-fit flex-shrink-0">
                          {service.icon}
                      </div>
                      <div className="md:ml-6 mt-4 md:mt-0 w-full">
                          <CardTitle className="font-headline text-xl mb-2">{service.title}</CardTitle>
                          <CardDescription>{service.description}</CardDescription>
                      </div>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={service.title} className="border-t">
                      <AccordionTrigger className="px-6 justify-start text-sm text-primary hover:underline">
                        {translations.home.learnMore}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6 text-muted-foreground">
                        <p className="mb-4">{service.details}</p>
                        <Button asChild variant="outline">
                          <Link href="https://wa.me/6289530825574" target="_blank">{translations.home.orderButton}</Link>
                        </Button>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-background py-16 md:py-24" id="projects">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">{translations.home.ourProjects.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projectLinks.map((project) => (
              <Card key={project.name} className="hover:shadow-xl transition-shadow duration-300 rounded-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
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
      <section className="bg-secondary/50 py-16 md:py-24" id="about">
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
                    <Link href="/consulting">{translations.home.whyChooseUs.aboutUsButton}</Link>
                </Button>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
              <div className="text-center space-y-4 mb-12">
                  <h2 className="text-3xl md:text-4xl font-headline font-bold">{translations.home.testimonials.title}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {translations.home.testimonials.reviews.map((testimonial: { name: string; title: string; avatar: string; text: string; }) => (
                      <Card key={testimonial.name} className="bg-secondary/50 rounded-lg">
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

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-secondary/50" id="contact">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">{translations.home.startCollaboration.title}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
             {translations.home.startCollaboration.subtitle}
            </p>
          </div>
          <Card className="max-w-2xl mx-auto rounded-lg">
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

    

    



    
