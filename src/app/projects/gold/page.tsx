
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Gem, ShieldCheck, Scale, Globe, ArrowRight, ArrowLeft, Check, X, Award, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { GoldInvestmentCalculator } from '@/components/gold-investment-calculator';
import { useLanguage } from '@/context/language-context';
import { ContactForm } from '@/components/contact-form';

export default function AndrgoldPage() {
  const { translations } = useLanguage();
  const heroImage = PlaceHolderImages.find(p => p.id === 'andrgold-hero');
  
  const goldTranslations = translations.goldPage || {};

  return (
    <div className="bg-background text-foreground">
      
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none -translate-x-1/2 -translate-y-1/2 brightness-50 z-0 object-cover"
            >
                <source src="https://ruah.uz/images/RGR.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
          <div className="absolute inset-0 bg-primary/20"></div>
          <div className="relative z-10 space-y-4 px-4">
            <p className="font-headline text-lg text-primary-foreground/80 tracking-widest">ANDRGOLD</p>
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-white">
              {goldTranslations.heroTitle}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {goldTranslations.heroSubtitle}
            </p>
          </div>
        </section>
      

      <main className="container mx-auto px-4 md:px-6 py-16 md:py-24 space-y-20">
        
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-semibold text-primary mb-4">{goldTranslations.investmentTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {goldTranslations.investmentSubtitle}
            </p>
          </div>
          <div id="key-advantages" className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-card p-8 rounded-lg shadow-md border">
                <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-foreground">{goldTranslations.advantages?.quality?.title}</h3>
                <p className="text-muted-foreground">{goldTranslations.advantages?.quality?.description}</p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-md border">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-foreground">{goldTranslations.advantages?.reliability?.title}</h3>
                <p className="text-muted-foreground">{goldTranslations.advantages?.reliability?.description}</p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-md border">
                <Gem className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-foreground">{goldTranslations.advantages?.approach?.title}</h3>
                <p className="text-muted-foreground">{goldTranslations.advantages?.approach?.description}</p>
            </div>
          </div>
        </section>

        <section id="product">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">{goldTranslations.products?.title}</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {goldTranslations.products?.subtitle}
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-foreground">
                            <Gem className="w-7 h-7 text-primary"/>
                            {goldTranslations.products?.raw?.title}
                        </CardTitle>
                        <CardDescription>{goldTranslations.products?.raw?.origin}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4 text-muted-foreground">
                        <p><span className="font-semibold text-foreground">{goldTranslations.products?.purityLabel}:</span> {goldTranslations.products?.raw?.purity}</p>
                        <p><span className="font-semibold text-foreground">{goldTranslations.products?.formLabel}:</span> {goldTranslations.products?.raw?.form}</p>
                        <p>{goldTranslations.products?.raw?.idealFor}</p>
                    </CardContent>
                </Card>
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-foreground">
                            <Award className="w-7 h-7 text-primary"/>
                            {goldTranslations.products?.refined?.title}
                        </CardTitle>
                        <CardDescription>{goldTranslations.products?.refined?.afterRefining}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4 text-muted-foreground">
                        <p><span className="font-semibold text-foreground">{goldTranslations.products?.purityLabel}:</span> {goldTranslations.products?.refined?.purity}</p>
                        <p><span className="font-semibold text-foreground">{goldTranslations.products?.formLabel}:</span> {goldTranslations.products?.refined?.form}</p>
                        <div className="flex items-start gap-2 pt-2">
                           <ShieldCheck className="w-5 h-5 text-primary mt-1 shrink-0"/>
                           <p><span className="font-semibold text-foreground">{goldTranslations.products?.certificationLabel}:</span> {goldTranslations.products?.refined?.certification}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>

        <section>
          <Card className="grid md:grid-cols-2 overflow-hidden shadow-lg">
              <div className="relative min-h-[300px] md:min-h-full bg-secondary">
                  <Image
                      src="https://s1.hostingkartinok.com/uploads/images/2025/09/af6b257df6c8cb1866f9df662df9502b.png"
                      alt={goldTranslations.refinedCard?.alt || "Refined Gold 999.9"}
                      fill
                      className="object-contain p-4"
                  />
              </div>
              <div className="p-8">
                  <h3 className="font-headline text-2xl font-bold text-primary mb-4">{goldTranslations.refinedCard?.title}</h3>
                  
                  <div className="space-y-6">
                      <div>
                          <h4 className="font-bold text-lg text-foreground mb-2">{goldTranslations.refinedCard?.characteristics?.title}</h4>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                              <li><span className="font-semibold text-foreground">{goldTranslations.refinedCard?.characteristics?.category?.label}:</span> {goldTranslations.refinedCard?.characteristics?.category?.value}</li>
                              <li><span className="font-semibold text-foreground">{goldTranslations.refinedCard?.characteristics?.purity?.label}:</span> {goldTranslations.refinedCard?.characteristics?.purity?.value}</li>
                              <li><span className="font-semibold text-foreground">{goldTranslations.refinedCard?.characteristics?.manufacturer?.label}:</span> {goldTranslations.refinedCard?.characteristics?.manufacturer?.value}</li>
                              <li><span className="font-semibold text-foreground">{goldTranslations.refinedCard?.characteristics?.guarantees?.label}:</span> {goldTranslations.refinedCard?.characteristics?.guarantees?.value}</li>
                          </ul>
                      </div>

                      <div>
                          <h4 className="font-bold text-lg text-foreground mb-2">{goldTranslations.refinedCard?.investmentCase?.title}</h4>
                          <p className="text-muted-foreground">
                              {goldTranslations.refinedCard?.investmentCase?.description}
                          </p>
                      </div>

                      <div>
                          <h4 className="font-bold text-lg text-foreground mb-2">{goldTranslations.refinedCard?.idealFor?.title}</h4>
                           <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                              <li><span className="font-semibold text-foreground">{goldTranslations.refinedCard?.idealFor?.investors?.label}:</span> {goldTranslations.refinedCard?.idealFor?.investors?.value}</li>
                              <li><span className="font-semibold text-foreground">{goldTranslations.refinedCard?.idealFor?.banks?.label}:</span> {goldTranslations.refinedCard?.idealFor?.banks?.value}</li>
                              <li><span className="font-semibold text-foreground">{goldTranslations.refinedCard?.idealFor?.buyers?.label}:</span> {goldTranslations.refinedCard?.idealFor?.buyers?.value}</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </Card>
        </section>

        <section id="delivery-terms">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">{goldTranslations.delivery?.title}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
                <Card className="border-primary border-2 flex flex-col">
                    <CardHeader>
                        <CardTitle className="text-primary">{goldTranslations.delivery?.seller?.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 flex-grow text-muted-foreground">
                       {goldTranslations.delivery?.seller?.duties.map((duty: string) => (
                           <p key={duty} className="flex items-start"><Check className="w-5 h-5 mr-2 mt-1 text-primary flex-shrink-0"/>{duty}</p>
                       ))}
                    </CardContent>
                </Card>
                <Card className="border-border border-2 flex flex-col">
                    <CardHeader>
                        <CardTitle className="text-foreground">{goldTranslations.delivery?.buyer?.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 flex-grow text-muted-foreground">
                       {goldTranslations.delivery?.buyer?.duties.map((duty: string) => (
                           <p key={duty} className="flex items-start"><Check className="w-5 h-5 mr-2 mt-1 text-muted-foreground flex-shrink-0"/>{duty}</p>
                       ))}
                    </CardContent>
                </Card>
            </div>
            <div className="overflow-x-auto py-4">
                <div className="flex items-center justify-center my-4 min-w-[500px]">
                    <div className="px-2 py-4 bg-secondary rounded-lg whitespace-nowrap shadow-md border">
                        <p className="font-bold text-primary">{goldTranslations.delivery?.seller?.title}</p>
                    </div>
                    <ArrowRight className="w-8 h-8 mx-2 text-muted-foreground shrink-0"/>
                     <div className="px-2 py-4 bg-muted rounded-lg whitespace-nowrap shadow-md border">
                        <p className="font-bold text-center text-foreground">{goldTranslations.delivery?.carrier}</p>
                    </div>
                    <ArrowRight className="w-8 h-8 mx-2 text-muted-foreground shrink-0"/>
                    <div className="px-2 py-4 bg-secondary rounded-lg whitespace-nowrap shadow-md border">
                        <p className="font-bold text-primary">{goldTranslations.delivery?.buyer?.title}</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="pricing">
          <GoldInvestmentCalculator />
        </section>
        
        <section id="cta" className="bg-card rounded-lg shadow-xl p-8 md:p-12 border">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">{goldTranslations.cta?.title}</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {goldTranslations.cta?.subtitle}
              </p>
            </div>
            <Card className="max-w-2xl mx-auto rounded-lg bg-secondary/50">
                <CardHeader>
                  <CardTitle>{goldTranslations.cta?.formTitle}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                    <ContactForm />
                </CardContent>
            </Card>
        </section>

      </main>
    </div>
  );
}

    