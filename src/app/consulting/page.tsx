"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { Briefcase, BarChart, Settings, Rocket, Users, ShieldCheck, FileText, Landmark, TrendingUp, Scale } from "lucide-react";
import Image from "next/image";
import {PlaceHolderImages} from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";

export default function ConsultingPage() {
    const { translations } = useLanguage();
    const targetAudienceImage = PlaceHolderImages.find(p => p.id === 'business-people');
    const teamImage = PlaceHolderImages.find(p => p.id === 'consulting-hero');

    const consultingServices = [
      {
        icon: <Briefcase className="h-10 w-10 text-primary" />,
        title: translations.consulting.services.management.title,
        description: translations.consulting.services.management.description,
      },
      {
        icon: <BarChart className="h-10 w-10 text-primary" />,
        title: translations.consulting.services.strategic.title,
        description: translations.consulting.services.strategic.description,
      },
      {
        icon: <Rocket className="h-10 w-10 text-primary" />,
        title: translations.consulting.services.marketing.title,
        description: translations.consulting.services.marketing.description,
      },
      {
        icon: <Settings className="h-10 w-10 text-primary" />,
        title: translations.consulting.services.it.title,
        description: translations.consulting.services.it.description,
      },
      {
        icon: <Users className="h-10 w-10 text-primary" />,
        title: translations.consulting.services.hr.title,
        description: translations.consulting.services.hr.description,
      },
      {
        icon: <ShieldCheck className="h-10 w-10 text-primary" />,
        title: translations.consulting.services.legal.title,
        description: translations.consulting.services.legal.description,
      },
      {
        icon: <FileText className="h-10 w-10 text-primary" />,
        title: translations.consulting.services.accounting.title,
        description: translations.consulting.services.accounting.description,
      },
    ];

    const financialServices = [
        {
            icon: <Landmark className="h-10 w-10 text-primary" />,
            title: translations.consulting.financialServices.planning.title,
            description: translations.consulting.financialServices.planning.description,
        },
        {
            icon: <TrendingUp className="h-10 w-10 text-primary" />,
            title: translations.consulting.financialServices.investment.title,
            description: translations.consulting.financialServices.investment.description,
        },
        {
            icon: <Scale className="h-10 w-10 text-primary" />,
            title: translations.consulting.financialServices.financing.title,
            description: translations.consulting.financialServices.financing.description,
        }
    ];

  return (
    <div>
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-headline font-bold">
                {translations.consulting.hero.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {translations.consulting.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link href="#services">{translations.consulting.hero.servicesButton}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#contact-consulting">{translations.consulting.hero.contactButton}</Link>
                </Button>
              </div>
            </div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>{translations.consulting.hero.formTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" id="services">
        <div className="container mx-auto px-4 md:px-6 space-y-16">
            <div>
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">{translations.consulting.consultingServicesSection.title}</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        {translations.consulting.consultingServicesSection.subtitle}
                    </p>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                    {consultingServices.map((service) => (
                    <Card key={service.title} className="flex flex-col md:flex-row items-center md:items-start overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/50 transform hover:-translate-y-1 text-center md:text-left">
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

            {targetAudienceImage && (
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg group mt-12">
                    <Image
                        src={targetAudienceImage.imageUrl}
                        alt={targetAudienceImage.description}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        data-ai-hint={targetAudienceImage.imageHint}
                    />
                </div>
            )}
            
            <div>
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">{translations.consulting.financialConsultingSection.title}</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        {translations.consulting.financialConsultingSection.subtitle}
                    </p>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                    {financialServices.map((service) => (
                    <Card key={service.title} className="flex flex-col md:flex-row items-center md:items-start overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/50 transform hover:-translate-y-1 text-center md:text-left">
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

            {teamImage && (
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg group mt-12">
                    <Image
                        src={teamImage.imageUrl}
                        alt={teamImage.description}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        data-ai-hint={teamImage.imageHint}
                    />
                </div>
            )}
        </div>
      </section>

      <section className="bg-secondary/50 py-16 md:py-24" id="contact-consulting">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">{translations.consulting.startTransformation.title}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {translations.consulting.startTransformation.subtitle}
            </p>
          </div>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>{translations.consulting.startTransformation.formTitle}</CardTitle>
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
